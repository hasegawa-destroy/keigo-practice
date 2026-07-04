"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();


  return (
    <main className="min-h-screen bg-[var(--color-background)]">

      {/* ヘッダー */}
      <header className="w-full bg-[var(--color-primary)] py-8 text-center text-white">
        <h1 className="text-3xl font-bold">敬語練習</h1>
      </header>

      <div className="mt-10 mx-auto max-w-4xl p-8">

        {/* サイト概要 */}
        <section className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
            このサイトについて
          </h2>

          <p className="text-[var(--color-text-light)]">
            敬語の使い方を問題形式で学習できます。
          </p>
        </section>

        {/* 問題一覧 */}
        <section className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
            問題一覧
          </h2>

          <div className="flex flex-col gap-3">
            <div className="rounded border border-[var(--color-border)]">
              <button className="w-full h-full p-4 hover:bg-gray-50 text-start" onClick={() => router.push("/question/")}>
                問題1：・・・
              </button>
            </div>
            <div className="rounded border border-[var(--color-border)] p-4 hover:bg-gray-50">
              問題2：・・・
            </div>
            <div className="rounded border border-[var(--color-border)] p-4 hover:bg-gray-50">
              問題3：・・・
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}