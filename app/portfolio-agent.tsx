"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Outcome = "correct" | "partial" | "wrong";

type Scenario = {
  id: "rag" | "aws" | "hris";
  number: string;
  short: string;
  domain: string;
  title: string;
  brief: string;
  pressure: string;
  telemetry: { label: string; value: string; tone: "bad" | "warn" | "neutral" }[];
  options: { id: string; label: string; outcome: Outcome; signal: string; analysis: string }[];
  tools: string[];
  pipeline: string[];
  before: { value: string; label: string };
  after: { value: string; label: string };
  result: string;
  evidence: string;
  href: string;
};

const scenarios: Scenario[] = [
  {
    id: "rag",
    number: "01",
    short: "Retrieval failure",
    domain: "PRODUCTION RAG",
    title: "The answer is fluent. The evidence is incomplete.",
    brief: "A user asks for a COST vs WMT revenue comparison across FY2023–FY2025. The answer omits a company-year but reads confidently.",
    pressure: "The model is not refusing. The failure is upstream, and every extra minute leaves a confident partial answer in production.",
    telemetry: [
      { label: "Hit@5", value: "0.708", tone: "bad" },
      { label: "Missing axes", value: "2 / 6", tone: "bad" },
      { label: "Generation", value: "FLUENT", tone: "warn" },
    ],
    options: [
      { id: "bigger-model", label: "Replace the answer model with a larger LLM", outcome: "wrong", signal: "NO RECOVERY", analysis: "A stronger generator cannot cite evidence that retrieval never supplied. Cost increases; source coverage does not." },
      { id: "more-chunks", label: "Increase top-K from 5 to 50", outcome: "partial", signal: "NOISY IMPROVEMENT", analysis: "More candidates may contain the missing evidence, but they also dilute requirement coverage and increase reranking and context cost." },
      { id: "decompose", label: "Decompose company-year requirements before retrieval", outcome: "correct", signal: "ROOT CAUSE MATCH", analysis: "Correct. The request contains six evidence obligations. Making those axes explicit allows retrieval and allocation to satisfy each one." },
      { id: "temperature", label: "Lower the generation temperature to zero", outcome: "wrong", signal: "NO RECOVERY", analysis: "Temperature changes output variability, not retrieval coverage. The same incomplete evidence becomes more consistently incomplete." },
    ],
    tools: ["inspect_query_axes", "trace_retrieval", "rerank_evidence", "run_frozen_eval"],
    pipeline: ["DECOMPOSE", "BGE + HNSW", "L12 RERANK", "REQUIREMENT ALLOCATE", "GROUND + CITE"],
    before: { value: "0.708", label: "baseline Hit@5" },
    after: { value: "1.00", label: "targeted Hit@5" },
    result: "Requirement-aware retrieval recovered the missing company-year evidence; targeted Recall@5 reached 0.958.",
    evidence: "Implemented in Retail Intelligence RAG across 158,570 SEC filing chunks.",
    href: "#rag",
  },
  {
    id: "aws",
    number: "02",
    short: "Cloud cost spike",
    domain: "AWS ARCHITECTURE",
    title: "The GPU works. The operating model does not.",
    brief: "The database already lives in eu-north-1. GPU inference is required in eu-central-1, but an always-on duplicate stack makes the projected cost unacceptable.",
    pressure: "Preserve one source of truth, keep GPU latency practical, and avoid paying for idle acceleration between research sessions.",
    telemetry: [
      { label: "Cost index", value: "100", tone: "bad" },
      { label: "GPU idle", value: "HIGH", tone: "bad" },
      { label: "DB copies", value: "2", tone: "warn" },
    ],
    options: [
      { id: "reserved", label: "Keep the GPU always on and buy reserved capacity", outcome: "wrong", signal: "PREMATURE COMMITMENT", analysis: "The workload is session-based and still evolving. Reserved capacity locks in spend before utilization is predictable." },
      { id: "duplicate", label: "Duplicate PostgreSQL beside the GPU", outcome: "wrong", signal: "SOURCE-OF-TRUTH RISK", analysis: "This reduces network distance but creates synchronization, lineage, and operational risk across two databases." },
      { id: "peer", label: "Peer the regions, route privately, and auto-stop GPU compute", outcome: "correct", signal: "CONSTRAINTS SATISFIED", analysis: "Correct. Keep the database authoritative, connect both VPCs privately, and pay for acceleration only while inference is active." },
      { id: "cpu", label: "Run reranking on the database server CPU", outcome: "partial", signal: "COST DOWN / LATENCY UP", analysis: "It removes GPU spend but shifts a heavy inference workload onto the database host and degrades response time and isolation." },
    ],
    tools: ["map_region_constraints", "inspect_idle_compute", "plan_private_routes", "project_run_cost"],
    pipeline: ["DB / EU-NORTH-1", "VPC PEERING", "PRIVATE ROUTE", "GPU / EU-CENTRAL-1", "AUTO-STOP"],
    before: { value: "100", label: "projected cost index" },
    after: { value: "~10", label: "optimized cost index" },
    result: "Cross-region VPC peering and session-based GPU shutdown cut projected infrastructure cost by approximately 90%.",
    evidence: "Designed and operated for the production-oriented annual-filings chatbot.",
    href: "#rag",
  },
  {
    id: "hris",
    number: "03",
    short: "Authorization leak",
    domain: "PRODUCT SECURITY",
    title: "The button is hidden. The endpoint is still open.",
    brief: "A manager-only HR action is removed from the employee interface, but a signed-in employee can still call the underlying route directly.",
    pressure: "OAuth proves identity, not permission. The fix must protect every mutation without duplicating fragile role logic across the UI.",
    telemetry: [
      { label: "Authentication", value: "PASS", tone: "neutral" },
      { label: "UI guard", value: "PASS", tone: "neutral" },
      { label: "Server guard", value: "MISSING", tone: "bad" },
    ],
    options: [
      { id: "hide", label: "Hide every restricted control more carefully", outcome: "wrong", signal: "BOUNDARY UNCHANGED", analysis: "Client-side visibility improves UX, but the browser is not a security boundary. Direct requests remain possible." },
      { id: "oauth", label: "Trust Google OAuth because the user is verified", outcome: "wrong", signal: "IDENTITY ≠ AUTHORITY", analysis: "OAuth confirms who the user is. It does not establish which HR records or mutations that role may access." },
      { id: "server-rbac", label: "Enforce RBAC in server actions and routes, then audit transitions", outcome: "correct", signal: "BOUNDARY RESTORED", analysis: "Correct. Authorization belongs beside protected data operations, with auditable state changes and UI guards as a secondary layer." },
      { id: "deployments", label: "Create a separate application deployment for every role", outcome: "partial", signal: "ISOLATED / UNMAINTAINABLE", analysis: "Isolation can reduce exposure, but it multiplies deployments and still requires data-level authorization at the server." },
    ],
    tools: ["trace_request_boundary", "resolve_session_role", "enforce_server_policy", "audit_state_change"],
    pipeline: ["AUTH.JS", "SESSION ROLE", "SERVER RBAC", "PRISMA MUTATION", "AUDIT RECORD"],
    before: { value: "UI", label: "authorization boundary" },
    after: { value: "SERVER", label: "authorization boundary" },
    result: "Protected operations moved behind server-enforced RBAC while interface guards remained a usability layer, not the security control.",
    evidence: "Implemented in the multi-role BookJane production HRIS.",
    href: "#hris",
  },
];

const outcomeLabel: Record<Outcome, string> = {
  correct: "Sound diagnosis",
  partial: "Incomplete diagnosis",
  wrong: "Incident unresolved",
};

export default function IncidentRoom() {
  const [scenarioId, setScenarioId] = useState<Scenario["id"]>("rag");
  const [phase, setPhase] = useState<"brief" | "decision" | "analysis" | "running" | "resolved">("brief");
  const [choiceId, setChoiceId] = useState<string | null>(null);
  const [toolIndex, setToolIndex] = useState(-1);
  const timers = useRef<number[]>([]);

  const scenario = useMemo(() => scenarios.find((item) => item.id === scenarioId) ?? scenarios[0], [scenarioId]);
  const choice = scenario.options.find((item) => item.id === choiceId) ?? null;

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  function clearTimers() {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }

  function selectScenario(id: Scenario["id"]) {
    clearTimers();
    setScenarioId(id);
    setPhase("brief");
    setChoiceId(null);
    setToolIndex(-1);
  }

  function makeDecision(id: string) {
    setChoiceId(id);
    setPhase("analysis");
  }

  function runRecovery() {
    clearTimers();
    setPhase("running");
    setToolIndex(0);
    scenario.tools.forEach((_, index) => {
      timers.current.push(window.setTimeout(() => setToolIndex(index), 300 + index * 360));
    });
    timers.current.push(window.setTimeout(() => {
      setToolIndex(scenario.tools.length);
      setPhase("resolved");
    }, 300 + scenario.tools.length * 360));
  }

  function retry() {
    clearTimers();
    setChoiceId(null);
    setToolIndex(-1);
    setPhase("decision");
  }

  const nextScenario = scenarios[(scenarios.findIndex((item) => item.id === scenario.id) + 1) % scenarios.length];

  return (
    <div className="incident-shell">
      <div className="incident-chrome">
        <div><span className="incident-live" /> PRODUCTION AI INCIDENT ROOM</div>
        <div>INTERACTIVE RECONSTRUCTION / REAL PROJECT EVIDENCE</div>
      </div>

      <div className="incident-layout">
        <aside className="mission-rail" aria-label="Incident scenarios">
          <div className="mission-rail-head"><span>SELECT MISSION</span><b>03 AVAILABLE</b></div>
          {scenarios.map((item) => (
            <button className={item.id === scenario.id ? "active" : ""} key={item.id} onClick={() => selectScenario(item.id)} type="button">
              <span>{item.number}</span><div><strong>{item.short}</strong><small>{item.domain}</small></div><i aria-hidden="true">↗</i>
            </button>
          ))}
          <div className="mission-disclaimer"><span>NO MODEL THEATRE</span><p>Decisions are scored against the causal failure—not against the visitor.</p></div>
        </aside>

        <div className="incident-console" aria-live="polite">
          <div className="incident-statusbar">
            <span>INCIDENT / {scenario.number}</span><b className={phase === "resolved" ? "resolved" : "critical"}>{phase === "resolved" ? "SYSTEM RECOVERED" : "SEVERITY / HIGH"}</b>
          </div>

          <div className="incident-brief">
            <p>{scenario.domain}</p>
            <h3>{scenario.title}</h3>
            <div className="incident-telemetry">
              {scenario.telemetry.map((metric) => <div key={metric.label}><span>{metric.label}</span><strong className={metric.tone}>{metric.value}</strong></div>)}
            </div>
            <p className="incident-description">{scenario.brief}</p>
          </div>

          {phase === "brief" && (
            <div className="incident-action-panel">
              <div><span>ON-CALL BRIEF</span><p>{scenario.pressure}</p></div>
              <button type="button" onClick={() => setPhase("decision")}>Enter incident <span aria-hidden="true">→</span></button>
            </div>
          )}

          {phase === "decision" && (
            <div className="decision-panel">
              <div className="decision-head"><span>YOUR FIRST MOVE</span><b>Choose the intervention with the highest causal leverage.</b></div>
              <div className="decision-grid">
                {scenario.options.map((option, index) => (
                  <button key={option.id} type="button" onClick={() => makeDecision(option.id)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{option.label}</strong><i aria-hidden="true">↗</i></button>
                ))}
              </div>
            </div>
          )}

          {phase === "analysis" && choice && (
            <div className={`decision-analysis ${choice.outcome}`}>
              <div className="analysis-signal"><span>{outcomeLabel[choice.outcome]}</span><strong>{choice.signal}</strong></div>
              <p>{choice.analysis}</p>
              <div className="analysis-actions"><button type="button" onClick={retry}>Try another move</button><button className="primary" type="button" onClick={runRecovery}>{choice.outcome === "correct" ? "Execute recovery" : "Inspect Hanzala's recovery"}<span aria-hidden="true">→</span></button></div>
            </div>
          )}

          {(phase === "running" || phase === "resolved") && (
            <div className="recovery-panel">
              <div className="tool-trace">
                <div className="tool-trace-head"><span>DIAGNOSTIC AGENT TRACE</span><b>{phase === "resolved" ? "04 / 04 COMPLETE" : `${String(Math.max(1, toolIndex + 1)).padStart(2, "0")} / 04 RUNNING`}</b></div>
                {scenario.tools.map((tool, index) => {
                  const status = phase === "resolved" || index < toolIndex ? "done" : index === toolIndex ? "running" : "queued";
                  return <div className={`tool-call ${status}`} key={tool}><span>{String(index + 1).padStart(2, "0")}</span><code>{tool}()</code><i>{status}</i></div>;
                })}
              </div>

              {phase === "running" && <div className="recovery-running"><span /><span /><span /><p>Testing the recovery against the incident constraints…</p></div>}

              {phase === "resolved" && (
                <div className="recovery-result">
                  <div className="before-after"><div><span>BEFORE</span><strong>{scenario.before.value}</strong><small>{scenario.before.label}</small></div><i aria-hidden="true">→</i><div><span>AFTER</span><strong>{scenario.after.value}</strong><small>{scenario.after.label}</small></div></div>
                  <div className="recovery-pipeline" aria-label="Recovery architecture">{scenario.pipeline.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b>{index < scenario.pipeline.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
                  <div className="recovery-proof"><span>WHAT HANZALA ACTUALLY BUILT</span><p>{scenario.result}</p><small>{scenario.evidence}</small><a href={scenario.href}>Inspect project evidence ↘</a></div>
                  <button className="next-mission" type="button" onClick={() => selectScenario(nextScenario.id)}>Next incident: {nextScenario.short}<span aria-hidden="true">→</span></button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
