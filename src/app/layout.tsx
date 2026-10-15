import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Job Agent Use Cases — Real AI tactics that helped people get hired",
  description:
    "A living directory of real things people are doing with AI agents, ChatGPT, Claude, and Grok to land jobs, switch careers, and negotiate better. Steal the prompts.",
  openGraph: {
    title: "Job Agent Use Cases",
    description: "Real AI agent use cases for job seekers. Prompts included.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-lg">
              Job Agent Use Cases
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/categories" className="hover:underline underline-offset-4">
                Categories
              </Link>
              <Link href="/submit" className="hover:underline underline-offset-4">
                Submit
              </Link>
              <Link
                href="/#newsletter"
                className="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-3 py-1.5 rounded-full text-sm font-medium hover:opacity-90"
              >
                Get the 5
              </Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-3.5rem)]">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500">
          <p>
            Built as an autonomous experiment. Inspired by{" "}
            <a
              href="https://agentusecases.ai"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener"
            >
              Agent Use Cases
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
