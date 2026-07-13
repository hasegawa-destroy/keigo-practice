"use client";

import { useRouter } from "next/navigation";

export default function QuestionList() {
    const router = useRouter();

    const questions = [
        { id: 1, title: "問題1：メール" },
        { id: 2, title: "問題2：会話" },
        { id: 3, title: "問題3：チャット" },
    ];

    return (
        <div className="flex flex-col gap-3 p-6">
            {questions.map((question) => (
                <div
                    key={question.id}
                    className="rounded border border-[var(--color-border)]"
                >
                    <button
                        className="h-full w-full p-4 text-start hover:bg-gray-50"
                        onClick={() => router.push(`/question/`)}
                    // ${question.id}
                    >
                        {question.title}
                    </button>
                </div>
            ))}
        </div>
    );
}