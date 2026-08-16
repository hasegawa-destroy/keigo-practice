"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Question = {
    PK: string;
    SK: string;
    Title: string;
};

export default function QuestionList() {
    const router = useRouter();
    const [questions, setQuestions] = useState<Question[]>([]);

    // 問題一覧を取得
    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/quizzes/review"
            );

            const data = await res.json();
            setQuestions(data);
        };

        fetchQuestions();
    }, []);

    if (questions == null) {
        return <>読み込み中</>
    }

    return (
        <div className="flex flex-col gap-3 p-6 divide-y-2 divide-[var(--color-secondary)]">
            {questions.map((question) => (
                <div
                    key={question.PK + question.SK}
                    className=""
                >
                    <button
                        className="h-full w-full p-2 md:p-4 text-start text-sm md:text-lg hover:bg-gray-50"
                        onClick={() => router.push(`/question/${question.SK}`)}
                    >
                        {question.Title}
                    </button>
                </div>
            ))}
        </div>
    );
}