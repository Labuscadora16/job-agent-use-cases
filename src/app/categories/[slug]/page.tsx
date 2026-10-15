import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, useCases } from "@/data/use-cases";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const items = useCases
    .filter((u) => u.category === slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link
        href="/categories"
        className="text-sm text-zinc-500 hover:underline mb-4 inline-block"
      >
        ← All categories
      </Link>
      <h1 className="text-3xl font-semibold tracking-tight mb-2">
        {category.name}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        {category.description}
      </p>

      {items.length === 0 ? (
        <p className="text-zinc-500">No use cases in this category yet.</p>
      ) : (
        <div className="space-y-6">
          {items.map((uc) => (
            <article
              key={uc.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                {uc.agent && <span>{uc.agent}</span>}
                <span>·</span>
                <time dateTime={uc.date}>
                  {new Date(uc.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h3 className="text-lg font-medium mb-2">{uc.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">
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
                  className="text-sm text-zinc-500 underline underline-offset-2"
                >
                  Source →
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
