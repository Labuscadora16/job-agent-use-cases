import Link from "next/link";
import { useCases, categories } from "../data/use-cases";

export default function Home() {
  const sorted = [...useCases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container">
      <section style={{ marginBottom: "3rem" }}>
        <h1>Real AI agent use cases for job seekers</h1>
        <p className="muted" style={{ fontSize: "1.125rem", maxWidth: "42rem" }}>
          What people are actually doing with Claude, ChatGPT, Grok, and custom
          agents to get hired, switch careers, and negotiate better offers.
          Prompts included.
        </p>
        <div className="hero-actions">
          <Link href="/#newsletter" className="btn" style={{ padding: "0.65rem 1.25rem" }}>
            Get 5 new use cases every week
          </Link>
          <Link href="/submit" className="btn-outline">
            Submit a use case
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/categories/${cat.slug}`} className="chip">
            {cat.name}
          </Link>
        ))}
      </section>

      <section>
        <h2 style={{ marginBottom: "1.5rem" }}>Latest use cases</h2>
        {sorted.map((uc) => (
          <article key={uc.id} className="card">
            <div className="meta">
              <span className="badge">
                {categories.find((c) => c.slug === uc.category)?.name || uc.category}
              </span>
              {uc.agent && <span>{uc.agent}</span>}
              <span>·</span>
              <time dateTime={uc.date}>
                {new Date(uc.date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </time>
              {uc.saves !== undefined && (
                <span style={{ marginLeft: "auto" }}>{uc.saves} saves</span>
              )}
            </div>
            <h3>{uc.title}</h3>
            <p className="muted" style={{ fontSize: "0.875rem", margin: "0 0 0.75rem" }}>
              {uc.description}
            </p>
            {uc.result && <p className="result">Result: {uc.result}</p>}
            {uc.sourceUrl && (
              <a href={uc.sourceUrl} target="_blank" rel="noopener noreferrer" className="muted" style={{ fontSize: "0.875rem" }}>
                Source →
              </a>
            )}
          </article>
        ))}
      </section>

      <section id="newsletter" className="newsletter">
        <h2 style={{ color: "#fff", fontSize: "1.5rem", textTransform: "none", letterSpacing: 0, marginBottom: "0.5rem" }}>
          5 real AI job-search tactics
        </h2>
        <p style={{ color: "#a1a1aa", marginBottom: "1.5rem" }}>
          Every week. Real use cases with the prompts. No fluff.
        </p>
        <form>
          <input type="email" name="email" required placeholder="you@email.com" />
          <button type="submit" className="btn" style={{ background: "#fff", color: "#18181b" }}>
            Subscribe
          </button>
        </form>
        <p style={{ fontSize: "0.75rem", color: "#71717a", marginTop: "0.75rem" }}>
          Free. Unsubscribe anytime.
        </p>
      </section>
    </div>
  );
}
