import Link from "next/link";
import { categories, useCases } from "../../data/use-cases";

export default function CategoriesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Categories</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Browse real AI job-search use cases by topic.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const count = useCases.filter((u) => u.category === cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
              <h2 className="font-medium text-lg mb-1">{cat.name}</h2>
              <p className="text-sm text-zinc-500 mb-3">{cat.description}</p>
              <span className="text-xs text-zinc-400">{count} use cases</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
