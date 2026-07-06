"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();


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

          <div className="p-6">
            <p className="text-[var(--color-text-light)]">
              敬語の使い方を問題形式で学習できます。
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

          <div className="flex flex-col p-6 gap-3">
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