import Link from "next/link";
import { categories, useCases } from "../../data/use-cases";

export default function CategoriesPage() {
  return (
    <div className="wrap" style={{ paddingTop: "2.5rem", paddingBottom: "3rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 650, letterSpacing: "-0.03em", margin: "0 0 0.4rem" }}>
        Categories
      </h1>
      <p style={{ color: "#666", fontSize: "0.95rem", margin: "0 0 1.75rem" }}>
        Browse real AI job-search use cases by topic.
      </p>
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
    </div>
  );
}
