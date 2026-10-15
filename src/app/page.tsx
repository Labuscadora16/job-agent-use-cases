import Link from "next/link";
import { useCases, categories } from "../data/use-cases";

export default function Home() {
  const sorted = [...useCases].sort(
    (a, b) => (b.saves || 0) - (a.saves || 0)
  );
  const byDate = [...useCases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="wrap">
      <section className="hero">
        <h1>Real AI agent use cases for job seekers</h1>
        <p>
          What people are actually doing with Claude, ChatGPT, Grok, and custom
          agents to get hired, switch careers, and negotiate better. Prompts
          included.
        </p>
        <div className="hero-actions">
          <Link href="/#newsletter" className="btn">
            Get 5 every week
          </Link>
          <Link href="/submit" className="btn-ghost">
            Submit a use case
          </Link>
        </div>
      </section>

      <div className="chips">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/categories/${cat.slug}`} className="chip">
            {cat.name}
          </Link>
        ))}
      </div>

      <section style={{ marginBottom: "2.5rem" }}>
        <p className="section-label">Trending</p>
        <div className="list">
          {sorted.slice(0, 3).map((uc) => (
            <article key={uc.id} className="item">
              <h2 className="item-title">{uc.title}</h2>
              <p className="item-desc">{uc.description}</p>
              {uc.result && <p className="item-result">→ {uc.result}</p>}
              <div className="item-meta">
                <span className="tag">
                  {categories.find((c) => c.slug === uc.category)?.name}
                </span>
                {uc.agent && <span>{uc.agent}</span>}
                {uc.sourceUrl && (
                  <>
                    <span>·</span>
                    <a href={uc.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Source
                    </a>
                  </>
                )}
                {uc.saves !== undefined && (
                  <span className="saves">{uc.saves} saves</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <p className="section-label">Latest</p>
        <div className="list">
          {byDate.map((uc) => (
            <article key={`latest-${uc.id}`} className="item">
              <h2 className="item-title">{uc.title}</h2>
              <p className="item-desc">{uc.description}</p>
              {uc.result && <p className="item-result">→ {uc.result}</p>}
              <div className="item-meta">
                <span className="tag">
                  {categories.find((c) => c.slug === uc.category)?.name}
                </span>
                {uc.agent && <span>{uc.agent}</span>}
                <span>·</span>
                <time dateTime={uc.date}>
                  {new Date(uc.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                {uc.sourceUrl && (
                  <>
                    <span>·</span>
                    <a href={uc.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Source
                    </a>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="newsletter" className="newsletter">
        <h2>5 real AI job-search tactics</h2>
        <p>Every week. Real use cases with the prompts. No fluff.</p>
        <form>
          <input type="email" name="email" required placeholder="you@email.com" />
          <button type="submit">Subscribe</button>
        </form>
        <p className="fine">Free. Unsubscribe anytime.</p>
      </section>
    </div>
  );
}
