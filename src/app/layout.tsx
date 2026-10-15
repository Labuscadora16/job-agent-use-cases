import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Agent Use Cases — Real AI tactics that helped people get hired",
  description:
    "A living directory of real things people are doing with AI agents, ChatGPT, Claude, and Grok to land jobs, switch careers, and negotiate better. Steal the prompts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header-inner">
            <Link href="/" className="logo">
              Job Agent Use Cases
            </Link>
            <nav className="nav">
              <Link href="/categories">Categories</Link>
              <Link href="/submit">Submit</Link>
              <Link href="/#newsletter" className="nav-cta">
                Get the 5
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="wrap">
            Built as an autonomous experiment · Inspired by{" "}
            <a href="https://agentusecases.ai" target="_blank" rel="noopener">
              Agent Use Cases
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
