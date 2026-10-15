import Link from "next/link";
import { useCases, categories } from "@/data/use-cases";

export default function Home() {
  const sorted = [...useCases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <section className="mb-12 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Real AI agent use cases for job seekers
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          What people are actually doing with Claude, ChatGPT, Grok, and custom
          agents to get hired, switch careers, and negotiate better offers.
          Prompts included.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
          <Link
            href="/#newsletter"
            className="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-5 py-2.5 rounded-full font-medium text-sm hover:opacity-90"
          >
            Get 5 new use cases every week
          </Link>
          <Link
            href="/submit"
            className="border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 rounded-full font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            Submit a use case
          </Link>
        </div>
      </section>

      <section className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          >
            {cat.name}
          </Link>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
          Latest use cases
        </h2>
        {sorted.map((uc) => (
          <article
            key={uc.id}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                  <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                    {categories.find((c) => c.slug === uc.category)?.name ||
                      uc.category}
                  </span>
                  {uc.agent && <span>{uc.agent}</span>}
                  <span>·</span>
                  <time dateTime={uc.date}>
                    {new Date(uc.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="text-lg font-medium leading-snug mb-2">
                  {uc.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-3">
                  {uc.description}
                </p>
                {uc.result && (
                  <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-3">
                    Result: {uc.result}
                  </p>
                )}
                {uc.sourceUrl && (
                  <a
                    href={uc.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 underline underline-offset-2"
                  >
                    Source →
                  </a>
                )}
              </div>
              {uc.saves !== undefined && (
                <div className="text-xs text-zinc-400 whitespace-nowrap">
                  {uc.saves} saves
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section id="newsletter" className="mt-16 mb-8">
        <div className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            5 real AI job-search tactics
          </h2>
          <p className="text-zinc-300 dark:text-zinc-600 mb-6 max-w-md mx-auto">
            Every week. Real use cases with the prompts. No fluff.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="flex-1 px-4 py-2.5 rounded-full text-zinc-900 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
            <button
              type="submit"
              className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-3">
            Free. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
