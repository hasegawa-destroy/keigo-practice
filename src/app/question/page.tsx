export default function Page() {
    return (
        <main className="min-h-screen bg-[var(--color-background)]">

            {/* ヘッダー */}
            <header className="w-full bg-[var(--color-primary)] py-8 text-center text-white">
                <h1 className="text-3xl font-bold">敬語練習</h1>
            </header>

            <div className="mt-10 mx-auto max-w-4xl p-8">

                {/* サイト概要 */}
                <section className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <div className="w-full rounded-t-lg bg-[var(--color-primary)] px-6 py-4">
                        <h2 className="text-xl font-semibold text-[var(--color-surface)]">
                            問題
                        </h2>
                    </div>

                    <div className="p-6">
                        <p className="text-[var(--color-text-light)]">
                            問題文...
                        </p>
                    </div>
                </section>

                {/* 問題一覧 */}
                <section className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <div className="w-full rounded-t-lg bg-[var(--color-primary)] px-6 py-4">
                        <h2 className="text-xl font-semibold text-[var(--color-surface)]">
                            回答
                        </h2>
                    </div>

                    <div className="p-6">
                        <textarea className="w-full rounded-lg border border-[var(--color-border)]" />
                        <div>
                            <p className="">0文字</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="rounded-lg bg-[var(--color-primary)] text-[var(--color-surface)] px-8 py-4">回答する</button>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}