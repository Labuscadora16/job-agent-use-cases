"use client";

import { useState } from "react";
import { categories, type UseCase } from "../data/use-cases";

export default function UseCaseCard({ uc }: { uc: UseCase }) {
  const [open, setOpen] = useState(false);
  const catName = categories.find((c) => c.slug === uc.category)?.name;

  return (
    <article className="item">
      <h2 className="item-title">{uc.title}</h2>
      <p className="item-desc">{uc.description}</p>
      {uc.result && <p className="item-result">→ {uc.result}</p>}
      <div className="item-meta">
        {catName && <span className="tag">{catName}</span>}
        {uc.agent && <span>{uc.agent}</span>}
        {uc.source && (
          <>
            <span>·</span>
            <span>{uc.source}</span>
          </>
        )}
        {uc.sourceUrl && (
          <>
            <span>·</span>
            <a href={uc.sourceUrl} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </>
        )}
        {uc.saves !== undefined && <span className="saves">{uc.saves} saves</span>}
      </div>
      {uc.prompt && (
        <div className="prompt-row">
          <button type="button" className="prompt-btn" onClick={() => setOpen(!open)}>
            {open ? "Hide prompt" : "View prompt"}
          </button>
          {open && (
            <pre className="prompt-box">
              <code>{uc.prompt}</code>
            </pre>
          )}
        </div>
      )}
    </article>
  );
}
