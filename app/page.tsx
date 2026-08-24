import PortfolioAgent from "./portfolio-agent";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const capabilities = [
  ["01", "RAG + LLM systems"],
  ["02", "Retrieval evaluation"],
  ["03", "AWS architecture"],
  ["04", "Python + FastAPI"],
  ["05", "Next.js + React"],
  ["06", "PostgreSQL + pgvector"],
  ["07", "Computer vision"],
  ["08", "Distributed systems"],
  ["09", "Product engineering"],
  ["10", "Technical leadership"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Syed Muhammad Hanzala, home">
          <span className="wordmark-mark">H</span>
          <span>SYED MUHAMMAD HANZALA<br /><i>AI SYSTEMS ENGINEER</i></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#agent">Agent</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/Syed_Muhammad_Hanzala_Resume.pdf" target="_blank" rel="noreferrer">Résumé <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> Available for high-impact AI &amp; product roles</div>
          <p className="eyebrow">AI / ML LEAD · CLOUD ARCHITECT · FULL-STACK BUILDER</p>
          <h1>AI systems.<span>Real products.</span></h1>
          <p className="hero-intro">I engineer the layer between a promising model and a product people can trust—from retrieval and evaluation to cloud architecture and the interface.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#agent">Challenge the agent <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#work">See the evidence <Arrow /></a>
          </div>
          <a className="hero-hook" href="#agent"><span>NOT A STATIC RÉSUMÉ</span><b>Ask this portfolio if I fit your role</b><i>↓</i></a>
        </div>

        <div className="portrait-stage">
          <div className="portrait-orbit orbit-one" aria-hidden="true" />
          <div className="portrait-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <img src="/hanzala-profile.jpg" alt="Syed Muhammad Hanzala wearing a black suit" width="699" height="1536" />
            <div className="portrait-shade" />
          </div>
          <div className="portrait-label label-top"><small>PRIMARY MODE</small><strong>BUILD + SHIP</strong></div>
          <div className="portrait-label label-bottom"><span>03:93</span><small>CGPA / 4.00</small></div>
          <div className="portrait-code" aria-hidden="true">PROFILE_ID / SMH-01<br />LOCATION / LAHORE_PK<br />STATUS / ONLINE</div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected outcomes">
        <div><span>ACADEMIC SIGNAL</span><strong>3.93</strong><p>CGPA / 4.00</p></div>
        <div><span>PRODUCTION SCALE</span><strong>158,570</strong><p>SEC chunks indexed</p></div>
        <div><span>INFRA EFFICIENCY</span><strong>~90%</strong><p>Projected cloud cost cut</p></div>
        <div><span>RETRIEVAL QUALITY</span><strong>1.00</strong><p>Targeted Hit@5</p></div>
      </section>

      <section className="agent-section" id="agent">
        <div className="section-intro agent-intro-heading">
          <div><p className="eyebrow">THE INTERACTIVE HOOK / 01</p><h2>Don&apos;t take my word for it.<br /><span>Interrogate the work.</span></h2></div>
          <p>Describe the engineer you need. This local evidence agent turns your brief into a plan, retrieves relevant projects, and cites the proof behind its recommendation.</p>
        </div>
        <PortfolioAgent />
      </section>

      <section className="work-section" id="work">
        <div className="section-intro">
          <div><p className="eyebrow">SELECTED SYSTEMS / 02</p><h2>Proof over<br /><span>promises.</span></h2></div>
          <p>Six systems across retrieval, multimodal ML, full-stack product delivery, distributed services, mobile, and computer vision.</p>
        </div>

        <article className="flagship flagship-violet" id="rag">
          <div className="flagship-index"><span>CASE / 01</span><b>AI + CLOUD</b></div>
          <div className="flagship-main">
            <p className="project-kicker">ÖZYEĞIN UNIVERSITY · AI/ML TEAM LEAD</p>
            <h3>Retail Intelligence RAG</h3>
            <p>A citation-grounded financial intelligence platform for multi-company, multi-year questions across SEC 10-K filings. I led the AI/ML workstream, repository integration, AWS architecture, evaluation, and production delivery.</p>
            <div className="metric-row"><div><strong>158,570</strong><span>indexed chunks</span></div><div><strong>0.958</strong><span>Recall@5</span></div><div><strong>1.00</strong><span>targeted Hit@5</span></div></div>
            <a href="https://github.com/Hanzala-Shadow/retail-intelligence-ai" target="_blank" rel="noreferrer">Explore source <Arrow /></a>
          </div>
          <div className="system-map" aria-label="RAG system architecture">
            <span>QUESTION</span><i>01</i><span>DECOMPOSE</span><i>02</i><span>RETRIEVE</span><i>03</i><span>RERANK</span><i>04</i><span>GROUND + CITE</span>
          </div>
        </article>

        <article className="flagship flagship-blue" id="hris">
          <div className="flagship-index"><span>CASE / 02</span><b>PRODUCT + BACKEND</b></div>
          <div className="flagship-main">
            <p className="project-kicker">BOOKJANE · LEAD SOFTWARE DEVELOPER</p>
            <h3>Production HRIS</h3>
            <p>A multi-role HR platform with server-enforced RBAC, auditable workflows, OAuth, PostgreSQL, and automated Vercel delivery. I owned the architecture and shipped the production system for a distributed Canadian team.</p>
            <div className="metric-row"><div><strong>4</strong><span>role surfaces</span></div><div><strong>RBAC</strong><span>server enforced</span></div><div><strong>CI/CD</strong><span>production delivery</span></div></div>
            <span className="private-chip">PRIVATE CLIENT SYSTEM</span>
          </div>
          <div className="system-map"><span>NEXT.JS</span><i>01</i><span>AUTH.JS</span><i>02</i><span>PRISMA</span><i>03</i><span>POSTGRESQL</span><i>04</i><span>VERCEL</span></div>
        </article>

        <div className="project-grid">
          <article className="project-card project-coral" id="youtube">
            <div className="project-head"><span>03 / COLLABORATOR</span><b>MULTIMODAL AI</b></div>
            <div className="project-glyph">YT<span>AI</span></div>
            <h3>YouTube Content Analyzer AI</h3>
            <p>A five-module video intelligence pipeline spanning hierarchical RoBERTa, ResNet-50, LightGBM, safety analysis, and explainable scoring.</p>
            <div className="project-metrics"><span><b>0.958</b> ROC-AUC</span><span><b>~3K</b> clips</span><span><b>5</b> modules</span></div>
            <a href="https://github.com/muhammadwaqarsaleem/YouTube-Content-Analyzer-AI" target="_blank" rel="noreferrer">Open collaboration <Arrow /></a>
          </article>

          <article className="project-card project-dark" id="echo">
            <div className="project-head"><span>04 / SYSTEM</span><b>DISTRIBUTED AI</b></div>
            <div className="project-glyph">ECHO<span>5×</span></div>
            <h3>Echo</h3>
            <p>Encrypted real-time chat across text, audio, and images, with five independently deployable transformer microservices.</p>
            <div className="project-metrics"><span>Spring Boot</span><span>FastAPI</span><span>Docker</span></div>
            <a href="https://github.com/Hanzala-Shadow/Echo" target="_blank" rel="noreferrer">Open repository <Arrow /></a>
          </article>

          <article className="project-card project-cyan" id="deen">
            <div className="project-head"><span>05 / SYSTEM</span><b>MOBILE + SEARCH</b></div>
            <div className="project-glyph">40+<span>OFFLINE</span></div>
            <h3>Understand Deen</h3>
            <p>An offline-first Flutter knowledge system connecting the Quran, six Hadith collections, comparative Fiqh, audio, and cross-module search.</p>
            <div className="project-metrics"><span>Flutter</span><span>SQLite</span><span>&lt;2s retrieval</span></div>
            <a href="https://github.com/Hanzala-Shadow/Islamic_App" target="_blank" rel="noreferrer">Open repository <Arrow /></a>
          </article>

          <article className="project-card project-wire" id="vision">
            <div className="project-head"><span>06 / ENGINE</span><b>COMPUTER VISION</b></div>
            <div className="project-glyph">468<span>POINTS</span></div>
            <h3>Face Synthesis Engine</h3>
            <p>Offline CPU lip-sync from a still image using forced alignment, face-mesh warping, viseme textures, blinking, and head drift.</p>
            <div className="project-metrics"><span>Whisper</span><span>MediaPipe</span><span>OpenCV</span></div>
            <a href="https://github.com/Hanzala-Shadow/Journey-to-DeepFake-A-Phoneme-and-Viseme-Synchronization" target="_blank" rel="noreferrer">Open repository <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-statement"><p className="eyebrow">OPERATING PRINCIPLE / 03</p><h2>Own the system.<br />Measure the result.<br /><span>Ship the useful version.</span></h2></div>
        <div className="about-copy">
          <p>I&apos;m a Computer Science student at FAST-NUCES, graduating in 2027, with a 3.93/4.00 CGPA, Dean&apos;s List recognition across semesters 1–5, and first position in Fall 2025.</p>
          <p>Already trusted to lead remote engineering work across Türkiye and Canada, I move between research depth and product reality: retrieval bottlenecks, model evaluation, authorization, AWS networking, and the last interaction in the interface.</p>
          <a href="https://www.linkedin.com/in/syed-muhammad-hanzala-bin-ahsan-a9b13b332/" target="_blank" rel="noreferrer">Full experience on LinkedIn <Arrow /></a>
        </div>
      </section>

      <section className="capabilities">
        <div className="capabilities-title"><span>CAPABILITY MATRIX</span><span>10 SIGNALS / END-TO-END OWNERSHIP</span></div>
        <div className="stack-list">{capabilities.map(([index, skill]) => <div key={skill}><span>{index}</span>{skill}</div>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">NEXT MISSION / 04</p>
        <h2>Have a hard problem<br />that should become<br /><span>a real product?</span></h2>
        <div className="contact-grid">
          <a href="mailto:syedmuhammadhanzala11@gmail.com"><small>EMAIL</small><strong>syedmuhammadhanzala11@gmail.com</strong><Arrow /></a>
          <a href="tel:+923025934240"><small>PHONE</small><strong>+92 302 5934240</strong><Arrow /></a>
        </div>
        <div className="contact-meta"><span>Lahore, Pakistan · Available globally</span><div><a href="https://github.com/Hanzala-Shadow" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/syed-muhammad-hanzala-bin-ahsan-a9b13b332/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="/Syed_Muhammad_Hanzala_Resume.pdf" target="_blank" rel="noreferrer">Résumé <Arrow /></a></div></div>
      </section>

      <footer><span>© 2026 Syed Muhammad Hanzala</span><span>Designed as an evidence system, not a résumé template.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
