import Link from "next/link";
import { categories, useCases } from "../../data/use-cases";

export default function CategoriesPage() {
  return (
    <div className="container">
      <h1>Categories</h1>
      <p className="muted" style={{ marginBottom: "2rem" }}>
        Browse real AI job-search use cases by topic.
      </p>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {categories.map((cat) => {
          const count = useCases.filter((u) => u.category === cat.slug).length;
          return (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="card" style={{ display: "block" }}>
              <h3>{cat.name}</h3>
              <p className="muted" style={{ fontSize: "0.875rem", marginBottom: "0.75rem" }}>
                {cat.description}
              </p>
              <span style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>{count} use cases</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
