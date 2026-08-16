"use client";

import { useState } from "react";
import QuestionList from "./components/QuestionList";
import QuizList from "./components/QuizList";

type questionsTab = "keigoPractice" | "quiz";

export default function Page() {
  const [activeTab, setActiveTab] = useState<questionsTab>("keigoPractice");

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <div className="mt-10 mx-auto max-w-4xl p-8">

        {/* サイト概要 */}
        <section className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="w-full rounded-t-lg bg-[var(--color-primary)] px-6 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-surface)]">
              このサイトについて
            </h2>
          </div>

          <div className="p-6 text-[var(--color-text-light)]">
            <p>
              敬語をクイズと文章添削で楽しく練習できるWebアプリです。
            </p>
            <p>
              ビジネスシーンや日常生活で使われる敬語を、4択問題と文章作成の2つの方法で学習できます。
            </p>
          </div>
        </section>

        {/* 問題一覧 */}
        <section className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="w-full rounded-t-lg bg-[var(--color-primary)] px-6 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-surface)]">
              問題一覧
            </h2>
          </div>

          {/* タブ */}
          <div className="flex flex-col justify-center mt-8 mb-2 mx-8 md:mx-64 text-xl">
            <div className="flex divide-x-2 divide-[var(--color-secondary)] ">
              <button
                onClick={() => setActiveTab("keigoPractice")}
                className={`flex-1 py-2 transition-colors ${activeTab === "keigoPractice" ? "text-[var(--color-primary)] font-bold" : "text-[var(--color-text-light)]"}`}
              >
                敬語練習
              </button>

              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex-1 py-2 transition-colors ${activeTab === "quiz" ? "text-[var(--color-primary)] font-bold" : "text-[var(--color-text-light)]"}`}
              >
                敬語問題
              </button>
            </div>

            {/* 下線 */}
            <div
              className={`bottom-0 h-1 w-1/2 bg-[var(--color-primary)] transition-transform duration-300 ease-in-out 
                ${activeTab === "keigoPractice" ? "translate-x-0" : "translate-x-full"}`}
            />
          </div>

          {activeTab === "keigoPractice" && <QuestionList />}
          {activeTab === "quiz" && <QuizList />}
        </section>

      </div>
    </main>
  );
}