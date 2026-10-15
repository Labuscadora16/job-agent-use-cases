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
    <div className="wrap" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
      <Link href="/categories" style={{ fontSize: "0.8rem", color: "#888" }}>
        ← All categories
      </Link>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 650, letterSpacing: "-0.03em", margin: "0.75rem 0 0.35rem" }}>
        {category.name}
      </h1>
      <p style={{ color: "#666", fontSize: "0.95rem", margin: "0 0 1.75rem" }}>
        {category.description}
      </p>

      {items.length === 0 ? (
        <p style={{ color: "#888" }}>No use cases in this category yet.</p>
      ) : (
        <div className="list">
          {items.map((uc) => (
            <article key={uc.id} className="item">
              <h2 className="item-title">{uc.title}</h2>
              <p className="item-desc">{uc.description}</p>
              {uc.result && <p className="item-result">→ {uc.result}</p>}
              <div className="item-meta">
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
      )}
    </div>
  );
}
