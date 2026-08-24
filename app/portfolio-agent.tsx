"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type Evidence = {
  id: string;
  title: string;
  area: string;
  proof: string;
  skills: string;
  href: string;
  keywords: string[];
};

const evidence: Evidence[] = [
  {
    id: "P1",
    title: "Retail Intelligence RAG",
    area: "AI systems + cloud ownership",
    proof: "Led a citation-grounded RAG platform across 158,570 SEC chunks; reached 1.00 Hit@5 and cut projected infrastructure cost by roughly 90%.",
    skills: "Python · BGE · pgvector · reranking · Bedrock · EC2",
    href: "#rag",
    keywords: ["ai", "ml", "llm", "rag", "retrieval", "agent", "aws", "cloud", "python", "data", "lead", "architecture", "nlp", "finance"],
  },
  {
    id: "P2",
    title: "BookJane HRIS",
    area: "Full-stack product delivery",
    proof: "Owned a production HR platform with server-enforced RBAC, auditable workflows, PostgreSQL, OAuth, and automated Vercel delivery.",
    skills: "Next.js · TypeScript · Prisma · PostgreSQL · Auth.js",
    href: "#hris",
    keywords: ["backend", "frontend", "fullstack", "full-stack", "product", "web", "react", "next", "typescript", "postgres", "security", "auth", "lead", "saas"],
  },
  {
    id: "P3",
    title: "YouTube Content Analyzer AI",
    area: "Multimodal machine learning",
    proof: "Collaborated on a five-module video intelligence pipeline spanning hierarchical RoBERTa, ResNet-50, LightGBM, safety analysis, and explainable scoring.",
    skills: "PyTorch · RoBERTa · ResNet-50 · LightGBM · OpenCV",
    href: "#youtube",
    keywords: ["ai", "ml", "multimodal", "video", "computer", "vision", "nlp", "pytorch", "transformer", "classification", "safety", "data"],
  },
  {
    id: "P4",
    title: "Echo",
    area: "Distributed AI product",
    proof: "Built encrypted real-time messaging with WebSockets plus five independently deployable NLP microservices and a Dockerized multi-service stack.",
    skills: "Spring Boot · React · FastAPI · WebSockets · Docker",
    href: "#echo",
    keywords: ["backend", "microservice", "distributed", "real-time", "websocket", "java", "react", "python", "nlp", "docker", "security"],
  },
  {
    id: "P5",
    title: "Understand Deen",
    area: "Offline mobile information system",
    proof: "Engineered an offline-first Flutter application connecting 40+ features with cross-module search and sub-two-second local retrieval.",
    skills: "Flutter · Dart · SQLite · information retrieval",
    href: "#deen",
    keywords: ["mobile", "flutter", "offline", "search", "sqlite", "product", "data", "performance"],
  },
  {
    id: "P6",
    title: "Face Synthesis Engine",
    area: "Applied computer vision",
    proof: "Built CPU-based lip-sync from a still image using forced alignment, a 468-point face mesh, piecewise warping, and viseme blending.",
    skills: "Whisper · MediaPipe · OpenCV · phoneme alignment",
    href: "#vision",
    keywords: ["computer", "vision", "video", "audio", "whisper", "opencv", "media", "ml", "python", "offline"],
  },
];

const prompts = [
  "Need an AI engineer who can own RAG and AWS",
  "Can he lead backend product delivery?",
  "Show multimodal ML and computer vision evidence",
];

function rankEvidence(query: string) {
  const normalized = query.toLowerCase();
  const tokens = normalized.match(/[a-z0-9+#.-]+/g) ?? [];

  return evidence
    .map((item, index) => {
      const score = item.keywords.reduce((total, keyword) => {
        const exactPhrase = normalized.includes(keyword);
        const tokenHit = tokens.some((token) => token.includes(keyword) || keyword.includes(token));
        return total + (exactPhrase ? 4 : tokenHit ? 1 : 0);
      }, 0);
      return { item, score: score + (index < 2 ? 0.25 : 0) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ item }) => item);
}

export default function PortfolioAgent() {
  const [query, setQuery] = useState(prompts[0]);
  const [phase, setPhase] = useState<"idle" | "plan" | "retrieve" | "compose" | "done">("idle");
  const [results, setResults] = useState<Evidence[]>([]);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const phaseIndex = useMemo(() => ({ idle: 0, plan: 1, retrieve: 2, compose: 3, done: 4 })[phase], [phase]);

  function runAgent(event?: FormEvent) {
    event?.preventDefault();
    const brief = query.trim();
    if (!brief) return;

    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    setResults([]);
    setPhase("plan");
    timers.current.push(window.setTimeout(() => setPhase("retrieve"), 360));
    timers.current.push(window.setTimeout(() => setPhase("compose"), 760));
    timers.current.push(window.setTimeout(() => {
      setResults(rankEvidence(brief));
      setPhase("done");
    }, 1160));
  }

  return (
    <div className="agent-shell">
      <div className="agent-chrome">
        <div><span className="agent-dot" /> PORTFOLIO EVIDENCE AGENT</div>
        <div>LOCAL RETRIEVAL / NO API</div>
      </div>

      <div className="agent-grid">
        <div className="agent-input-panel">
          <p className="micro-label">Give the agent a hiring brief</p>
          <h3>Challenge my fit.</h3>
          <p className="agent-intro">It plans the request, ranks six real projects, and returns evidence—not a generic bio.</p>

          <form onSubmit={runAgent}>
            <label htmlFor="agent-brief">Role or capability you need</label>
            <textarea
              id="agent-brief"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              rows={3}
              placeholder="e.g. Need someone who can own an LLM product end to end"
            />
            <button type="submit" disabled={phaseIndex > 0 && phaseIndex < 4}>
              {phaseIndex > 0 && phaseIndex < 4 ? "Agent working…" : "Run evidence agent"}
              <span aria-hidden="true">↗</span>
            </button>
          </form>

          <div className="agent-prompts" aria-label="Example prompts">
            {prompts.map((prompt) => (
              <button key={prompt} type="button" onClick={() => { setQuery(prompt); setPhase("idle"); setResults([]); }}>
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="agent-output" aria-live="polite">
          <div className="agent-plan">
            <div className={phaseIndex >= 1 ? "active" : ""}><b>01</b><span>Parse intent + constraints</span><i>{phaseIndex > 1 ? "done" : phaseIndex === 1 ? "running" : "waiting"}</i></div>
            <div className={phaseIndex >= 2 ? "active" : ""}><b>02</b><span>Retrieve portfolio evidence</span><i>{phaseIndex > 2 ? "done" : phaseIndex === 2 ? "running" : "waiting"}</i></div>
            <div className={phaseIndex >= 3 ? "active" : ""}><b>03</b><span>Compose grounded fit brief</span><i>{phaseIndex > 3 ? "done" : phaseIndex === 3 ? "running" : "waiting"}</i></div>
          </div>

          {phase === "idle" && (
            <div className="agent-empty">
              <span>[ READY ]</span>
              <p>Run a brief to make this portfolio answer back.</p>
            </div>
          )}

          {phaseIndex > 0 && phaseIndex < 4 && (
            <div className="agent-thinking"><span /><span /><span /><p>Inspecting grounded project records…</p></div>
          )}

          {phase === "done" && results.length > 0 && (
            <div className="agent-results">
              <div className="agent-verdict">
                <span>FIT SIGNAL / STRONG</span>
                <p>The brief maps most strongly to <b>{results[0].title}</b>, supported by adjacent delivery evidence in {results[1].title}.</p>
              </div>
              {results.map((result, index) => (
                <a className="evidence-hit" href={result.href} key={result.id}>
                  <b>[{result.id}]</b>
                  <div><strong>{result.title}</strong><span>{result.area}</span><p>{result.proof}</p><small>{result.skills}</small></div>
                  <em>{String(index + 1).padStart(2, "0")} ↘</em>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
