export default function SubmitPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">
        Submit a use case
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Found (or created) a real way AI helped someone in their job search?
        Share it. We review every submission.
      </p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="e.g. Claude agent that ranked 600+ job offers"
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            What happened (short description)
          </label>
          <textarea
            name="description"
            required
            rows={4}
            placeholder="What the person actually did with the AI/agent..."
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Prompt or link (optional)
          </label>
          <textarea
            name="prompt"
            rows={3}
            placeholder="The actual prompt they used, or a link to the original post"
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Your email (so we can credit you)
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 py-2.5 rounded-lg font-medium hover:opacity-90"
        >
          Submit for review
        </button>
      </form>
      <p className="text-xs text-zinc-500 mt-4">
        We only publish real, useful use cases. No spam, no generic advice.
      </p>
    </div>
  );
}
