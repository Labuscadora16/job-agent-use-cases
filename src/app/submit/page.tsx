export default function SubmitPage() {
  return (
    <div className="container" style={{ maxWidth: "36rem" }}>
      <h1>Submit a use case</h1>
      <p className="muted" style={{ marginBottom: "2rem" }}>
        Found (or created) a real way AI helped someone in their job search?
        Share it. We review every submission.
      </p>
      <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.25rem" }}>Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="e.g. Claude agent that ranked 600+ job offers"
            style={{ width: "100%", padding: "0.5rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8" }}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.25rem" }}>
            What happened (short description)
          </label>
          <textarea
            name="description"
            required
            rows={4}
            placeholder="What the person actually did with the AI/agent..."
            style={{ width: "100%", padding: "0.5rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8" }}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.25rem" }}>
            Prompt or link (optional)
          </label>
          <textarea
            name="prompt"
            rows={3}
            placeholder="The actual prompt they used, or a link to the original post"
            style={{ width: "100%", padding: "0.5rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8" }}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.25rem" }}>
            Your email (so we can credit you)
          </label>
          <input
            type="email"
            name="email"
            style={{ width: "100%", padding: "0.5rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8" }}
          />
        </div>
        <button type="submit" className="btn" style={{ width: "100%", padding: "0.65rem", borderRadius: "0.5rem" }}>
          Submit for review
        </button>
      </form>
      <p style={{ fontSize: "0.75rem", color: "#71717a", marginTop: "1rem" }}>
        We only publish real, useful use cases. No spam, no generic advice.
      </p>
    </div>
  );
}
