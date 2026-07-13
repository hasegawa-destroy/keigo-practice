import QuestionList from "./components/QuestionList";

export default function Page() {
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

          <QuestionList />
        </section>

      </div>
    </main>
  );
}