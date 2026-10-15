import Link from "next/link";
import { useCases, categories } from "../data/use-cases";
import UseCaseCard from "../components/UseCaseCard";

export default function Home() {
  const trending = [...useCases].sort((a, b) => (b.saves || 0) - (a.saves || 0));
  const latest = [...useCases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="wrap">
      <section className="hero">
        <h1>What people are actually doing with AI to get hired</h1>
        <p>
          Real use cases — Claude, ChatGPT, Grok, custom agents — for resumes,
          outreach, interviews, and offers. Each one includes the prompt.
        </p>
      </section>

      <div className="chips">
        <Link href="/" className="chip chip-active">
          All {useCases.length}
        </Link>
        {categories.map((cat) => {
          const n = useCases.filter((u) => u.category === cat.slug).length;
          if (n === 0) return null;
          return (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="chip">
              {cat.name}
            </Link>
          );
        })}
      </div>

      <section className="nl-card" id="newsletter">
        <div className="nl-left">
          <p className="nl-kicker">The Job Agent Brief</p>
          <h2>5 use cases every Monday</h2>
          <p>
            Each issue: five real tactics from the past week, the exact prompts,
            and one "human edge" note for the AI-era market. One email. No
            threads, no courses.
          </p>
          <form className="nl-form">
            <input type="email" name="email" required placeholder="you@email.com" />
            <button type="submit">Send me the 5</button>
          </form>
          <p className="nl-fine">Free · Unsubscribe anytime · Prompts included</p>
        </div>
        <div className="nl-sample" aria-hidden="true">
          <p className="nl-sample-label">Sample issue</p>
          <ol className="nl-sample-list">
            <li>Run 631 job evaluations with a Claude pipeline</li>
            <li>Map unposted roles + referral paths</li>
            <li>Build one proof-of-work artifact (not a portfolio)</li>
            <li>Walk into negotiation with real comp bands</li>
            <li>Morning shortlist from LinkedIn / Indeed / Glassdoor</li>
          </ol>
          <p className="nl-sample-note">+ the prompts for each</p>
        </div>
      </section>

      <section style={{ marginBottom: "2.75rem" }}>
        <p className="section-label">Trending</p>
        <div className="list">
          {trending.slice(0, 4).map((uc) => (
            <UseCaseCard key={uc.id} uc={uc} />
          ))}
        </div>
      </section>

      <section>
        <p className="section-label">Latest</p>
        <div className="list">
          {latest.map((uc) => (
            <UseCaseCard key={`l-${uc.id}`} uc={uc} />
          ))}
        </div>
      </section>

      <section className="cat-section">
        <p className="section-label">Browse by category</p>
        <div className="cat-grid">
          {categories.map((cat) => {
            const count = useCases.filter((u) => u.category === cat.slug).length;
            return (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} className="cat-card">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <span className="count">{count} use cases</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
