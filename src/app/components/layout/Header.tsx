import Link from "next/link";

export default function Header() {
    return (
        <header className="relative z-50 w-full bg-[var(--color-primary)] py-8 text-center text-white">
            <Link href="/" className="inline-block">
                <h1 className="cursor-pointer text-3xl font-bold">
                    敬語レビュアー
                </h1>
            </Link>
        </header>
    );
}