"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Props = {
    params: Promise<{
        SK: string;
    }>;
};

export default function Page() {
    const [text, setText] = useState("");
    const [result, setResult] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [question, setQuestion] = useState<any>(null);

    const params = useParams();
    const SK = params.SK as string;

    // 添削
    const reviewText = async (text: string) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/review`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("添削API呼び出しに失敗しました。");
        }

        return await response.json();
    };

    const handleAnswer = async () => {
        try {
            setErrorMessage(null);
            const result = await reviewText(text);

            console.log(result);
            setResult(result);

        } catch (error) {
            console.error(error);
            setErrorMessage(
                "添削処理に失敗しました。時間をおいて再度お試しください。"
            );
        }
    };

    // 問題文取得
    useEffect(() => {
        const fetchQuestion = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/quiz/${SK}`
            );

            const data = await res.json();
            setQuestion(data);
        };

        if (SK) {
            fetchQuestion();
        }
    }, [SK]);

    if (!question) {
        return <div>読み込み中...</div>;
    }

    return (
        <main className="min-h-screen bg-[var(--color-background)]">
            <div className="mt-10 mx-auto max-w-4xl p-8">

                {/* 問題文 */}
                <section className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <div className="w-full rounded-t-lg bg-[var(--color-primary)] px-6 py-4">
                        <h2 className="text-xl font-semibold text-[var(--color-surface)]">
                            問題
                        </h2>
                    </div>

                    <div className="p-6">
                        <p className="text-[var(--color-text-light)]">
                            {question.Question}
                        </p>
                    </div>
                </section>

                {/* 回答 */}
                <section className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <div className="w-full rounded-t-lg bg-[var(--color-primary)] px-6 py-4">
                        <h2 className="text-xl font-semibold text-[var(--color-surface)]">
                            回答
                        </h2>
                    </div>

                    <div className="p-6">
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full h-40 resize-none rounded-lg p-2 border border-[var(--color-border)]"
                        />
                        <div>
                            <p className="">0文字</p>
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={handleAnswer}
                                className="rounded-lg bg-[var(--color-primary)] text-[var(--color-surface)] px-8 py-4">
                                回答する</button>
                        </div>
                    </div>
                </section>

                {/* 添削結果 */}
                {result && (
                    <section className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">

                        <div className="w-full rounded-t-lg bg-[var(--color-primary)] px-6 py-4">
                            <h2 className="text-xl font-semibold text-[var(--color-surface)]">
                                添削結果
                            </h2>
                        </div>

                        <div className="p-6">
                            {/* 点数 */}
                            <div className="flex w-full justify-center items-end gap-2 mb-6">
                                <p className="text-2xl text-[var(--color-text-light)]">
                                    {result.score}
                                </p>
                                <p className="text-lg">点</p>
                            </div>

                            {/* 模範解答 */}
                            <div className="mb-6">
                                <p className="text-lg">模範解答</p>
                                <p className="text-[var(--color-text-light)]">
                                    {result.corrected}
                                </p>
                            </div>

                            {/* コメント */}
                            <div>
                                <p className="text-lg">コメント</p>
                                <p className="text-[var(--color-text-light)]">
                                    {result.explanation}
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* エラー */}
                {errorMessage && (
                    <div className="mt-4 rounded-lg border border-red-400 bg-red-50 p-4 text-red-700">
                        {errorMessage}
                    </div>
                )}

            </div >
        </main >
    );
}