import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, useCases } from "../../../data/use-cases";

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const items = useCases
    .filter((u) => u.category === params.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container">
      <Link href="/categories" className="muted" style={{ fontSize: "0.875rem", display: "inline-block", marginBottom: "1rem" }}>
        ← All categories
      </Link>
      <h1>{category.name}</h1>
      <p className="muted" style={{ marginBottom: "2rem" }}>
        {category.description}
      </p>

      {items.length === 0 ? (
        <p className="muted">No use cases in this category yet.</p>
      ) : (
        items.map((uc) => (
          <article key={uc.id} className="card">
            <div className="meta">
              {uc.agent && <span>{uc.agent}</span>}
              <span>·</span>
              <time dateTime={uc.date}>
                {new Date(uc.date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
            <h3>{uc.title}</h3>
            <p className="muted" style={{ fontSize: "0.875rem" }}>{uc.description}</p>
            {uc.result && <p className="result">Result: {uc.result}</p>}
            {uc.sourceUrl && (
              <a href={uc.sourceUrl} target="_blank" rel="noopener noreferrer" className="muted" style={{ fontSize: "0.875rem" }}>
                Source →
              </a>
            )}
          </article>
        ))
      )}
    </div>
  );
}
