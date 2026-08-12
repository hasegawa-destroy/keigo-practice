"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/app/components/layout/loading/Loading";

export default function Page() {
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
    const [result, setResult] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [question, setQuestion] = useState<any>(null);
    const [isResultLoading, setIsResultLoading] = useState(false);

    const router = useRouter();
    const resultRef = useRef<HTMLDivElement | null>(null);
    const params = useParams();
    const SK = params.SK as string;

    // 回答
    const handleAnswer = async () => {
        setIsResultLoading(true);

        try {
            setErrorMessage(null);

            if (selectedChoice == null) {
                setErrorMessage("選択肢を選んでください。");
                return;
            }
            setResult({ correct: selectedChoice === Number(question.Answer) });

            // カメラ移動
            requestAnimationFrame(() => {
                resultRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });

        } catch (error) {
            console.error(error);
            setErrorMessage(
                "エラー"
            );
        } finally {
            setIsResultLoading(false);
        }
    };

    // 問題文取得
    useEffect(() => {
        const fetchQuestion = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/quiz/${SK}/choice`
            );

            const data = await res.json();
            setQuestion(data);
        };

        if (SK) {
            fetchQuestion();
        }
    }, [SK]);

    if (!question) {
        return <><Loading /></>
    }

    return (
        <main className="min-h-screen bg-[var(--color-background)]">

            {/* ロード演出 */}
            {isResultLoading && <Loading />}

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
                        <div className="flex flex-col gap-3 mb-4">
                            {question.Choice.map((choice: string, index: number) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] p-4 cursor-pointer hover:bg-gray-50"
                                >
                                    <input
                                        type="radio"
                                        name="answer"
                                        checked={selectedChoice === index + 1}
                                        onChange={() => setSelectedChoice(index + 1)}
                                    />

                                    <span>{choice}</span>
                                </label>
                            ))}
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
                    <section ref={resultRef} className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">

                        <div className="w-full rounded-t-lg bg-[var(--color-primary)] px-6 py-4">
                            <h2 className="text-xl font-semibold text-[var(--color-surface)]">
                                添削結果
                            </h2>
                        </div>

                        <div className="p-6">
                            {/* 判定 */}

                            <div className="flex w-full justify-center items-end gap-2 mb-6">
                                <p className="text-2xl text-[var(--color-text-light)]">
                                    {result.correct ? "正解" : "不正解"}
                                </p>
                            </div>

                            {/* 模範解答 */}
                            <div className="mb-6">
                                <p className="text-lg">正解</p>
                                <p className="text-[var(--color-text-light)]">
                                    {question.Choice[question.Answer - 1]}
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

                {/* ボタン群 */}
                <div className="flex justify-center gap-8 mt-16 px-16">
                    <button
                        onClick={() => router.push(`/`)}
                        className="flex-1 rounded-lg bg-[var(--color-secondary)] text-[var(--color-surface)] px-8 py-4">
                        問題一覧に戻る
                    </button>

                    {question.NextQuestion && (
                        <button
                            onClick={() => router.push(`/question/choice/${question.NextQuestion}`)}
                            className="flex-1 rounded-lg bg-[var(--color-primary)] text-[var(--color-surface)] px-8 py-4"
                        >
                            次の問題
                        </button>
                    )}
                </div>

            </div >
        </main >
    );
}