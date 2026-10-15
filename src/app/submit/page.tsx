export default function SubmitPage() {
  return (
    <div className="wrap" style={{ paddingTop: "2.5rem", paddingBottom: "3rem", maxWidth: "28rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 650, letterSpacing: "-0.03em", margin: "0 0 0.4rem" }}>
        Submit a use case
      </h1>
      <p style={{ color: "#666", fontSize: "0.95rem", margin: "0 0 1.75rem" }}>
        Found a real way AI helped someone get hired? Share it. We only publish
        useful, specific examples.
      </p>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" required placeholder="e.g. Claude agent that ranked 600+ offers" />
        </div>
        <div className="form-group">
          <label>What happened</label>
          <textarea name="description" required rows={4} placeholder="What they actually did with the AI/agent…" />
        </div>
        <div className="form-group">
          <label>Prompt or link (optional)</label>
          <textarea name="prompt" rows={3} placeholder="The prompt they used, or a link to the original post" />
        </div>
        <div className="form-group">
          <label>Your email (for credit)</label>
          <input type="email" name="email" />
        </div>
        <button type="submit" className="btn" style={{ width: "100%", borderRadius: "8px", padding: "0.7rem" }}>
          Submit for review
        </button>
      </form>
      <p style={{ fontSize: "0.75rem", color: "#999", marginTop: "1rem" }}>
        No spam, no generic advice — only real tactics.
      </p>
    </div>
  );
}
