const Arrow = () => <span aria-hidden="true">↗</span>;

const proof = [
  { value: "190", label: "companies mapped" },
  { value: "158,570", label: "SEC chunks indexed" },
  { value: "~90%", label: "projected cloud cost cut" },
  { value: "1.00", label: "targeted Hit@5" },
];

const stack = ["Python", "TypeScript", "PyTorch", "FastAPI", "Next.js", "React", "PostgreSQL", "pgvector", "AWS", "Docker"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hanzala, back to top">
          <span className="wordmark-mark">H</span><span>HANZALA / 26</span>
        </a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="mailto:syedmuhammadhanzala11@gmail.com">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> Available for remote engineering roles</div>
          <p className="eyebrow">AI systems engineer · Full-stack product builder</p>
          <h1>I build the<span> intelligence layer—</span>and the product people use.</h1>
          <p className="hero-intro">I turn ambiguous problems into measurable, production-ready systems—from retrieval and model infrastructure to the interface in a user&apos;s hands.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="/Syed_Muhammad_Hanzala_Resume.pdf" target="_blank" rel="noreferrer">Open résumé <Arrow /></a>
          </div>
        </div>

        <aside className="trace-card" aria-label="Example RAG system trace">
          <div className="trace-topline"><span>SYSTEM TRACE / RAG-01</span><span className="trace-live">● LIVE</span></div>
          <div className="trace-query"><span>INPUT</span><p>Compare revenue drivers and risks across two retailers, FY23–25.</p></div>
          <ol className="trace-flow">
            <li><b>01</b><span>Resolve companies + fiscal years</span><i>12ms</i></li>
            <li><b>02</b><span>Decompose evidence requirements</span><i>31ms</i></li>
            <li><b>03</b><span>Retrieve + cross-encode</span><i>184ms</i></li>
            <li><b>04</b><span>Allocate grounded evidence</span><i>46ms</i></li>
          </ol>
          <div className="trace-result">
            <div><span>VALIDATION</span><strong>88 / 100</strong><small>unseen questions completed</small></div>
            <div className="signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Selected impact metrics">
        {proof.map((item, index) => <div className="proof-item" key={item.label}><span>0{index + 1}</span><strong>{item.value}</strong><p>{item.label}</p></div>)}
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected systems / 2025–26</p><h2>Proof over promises.</h2></div>
          <p>The work I&apos;m proudest of sits where machine intelligence, reliable infrastructure, and thoughtful product engineering meet.</p>
        </div>

        <article className="case-study case-rag">
          <div className="case-number">01 / FLAGSHIP</div>
          <div className="case-main">
            <div className="case-kicker">Özyeğin University · Technical & AWS Lead</div>
            <h3>Retail Intelligence RAG</h3>
            <p className="case-lead">A citation-grounded financial intelligence platform built to answer multi-company, multi-year questions across SEC 10-K filings—with evidence you can inspect, not just an answer you have to trust.</p>
            <div className="case-actions"><a href="https://github.com/Hanzala-Shadow/retail-intelligence-ai" target="_blank" rel="noreferrer">View source <Arrow /></a><span>Python · BGE · pgvector · Bedrock · EC2</span></div>
          </div>
          <div className="case-details">
            <div><span>01 / THE SYSTEM</span><p>Query decomposition, HNSW retrieval, cross-encoder reranking, requirement-aware evidence allocation, and grounded Nova generation.</p></div>
            <div><span>02 / MY OWNERSHIP</span><p>Led the AI/ML workstream, repository integration, AWS architecture, production deployment, evaluation, and cross-team delivery.</p></div>
            <div><span>03 / THE RESULT</span><p>158,570 indexed chunks. 88/100 unseen questions completed. Targeted retrieval tuning reached 1.00 Hit@5 and 0.958 Recall@5.</p></div>
          </div>
          <div className="architecture" aria-label="Retail Intelligence architecture"><span>QUESTION</span><i>→</i><span>DECOMPOSE</span><i>→</i><span>RETRIEVE</span><i>→</i><span>RERANK</span><i>→</i><span>GROUND</span></div>
        </article>

        <article className="case-study case-hris">
          <div className="case-number">02 / PRODUCT</div>
          <div className="case-main">
            <div className="case-kicker">BookJane · Lead Software Developer</div>
            <h3>Internal HRIS</h3>
            <p className="case-lead">A production HR platform where authorization had to survive real org charts—not just happy-path demos. I took it from data model to deployment.</p>
            <div className="case-actions"><span className="private-label">Private client system</span><span>Next.js 16 · TypeScript · Prisma · PostgreSQL</span></div>
          </div>
          <div className="case-details">
            <div><span>01 / SECURITY</span><p>Server-enforced RBAC, owner/manager boundaries, hierarchy cycle prevention, immediate session revocation, and immutable audit logs.</p></div>
            <div><span>02 / WORKFLOWS</span><p>Leave accrual and approval accounting, employee invitations, HTML notifications, Google OAuth, and just-in-time provisioning.</p></div>
            <div><span>03 / DELIVERY</span><p>Strict TypeScript across server/client boundaries, PostgreSQL on Neon, Dockerized delivery, and automated Vercel deployments from GitHub.</p></div>
          </div>
        </article>

        <div className="project-grid">
          <article className="project-card project-dark">
            <span className="project-index">03</span><div className="project-icon" aria-hidden="true">E2E</div><h3>Echo</h3>
            <p>Encrypted LAN chat across text, audio, and images, with five transformer microservices for translation, summaries, safety, replies, and deadlines.</p>
            <div className="project-footer"><span>Spring Boot · React · FastAPI · Docker</span><a href="https://github.com/Hanzala-Shadow/Echo" target="_blank" rel="noreferrer" aria-label="View Echo on GitHub"><Arrow /></a></div>
          </article>
          <article className="project-card project-light">
            <span className="project-index">04</span><div className="project-icon project-icon-bars" aria-hidden="true"><i/><i/><i/><i/></div><h3>YouTube Intelligence</h3>
            <p>Multimodal harm analysis over metadata, transcripts, and frames—reaching 0.958 ROC-AUC for violence detection across roughly 3,000 clips.</p>
            <div className="project-footer"><span>RoBERTa · ResNet-50 · LightGBM</span><em>ML pipeline</em></div>
          </article>
          <article className="project-card project-amber">
            <span className="project-index">05</span><div className="project-icon" aria-hidden="true">40+</div><h3>Understand Deen</h3>
            <p>An offline-first Flutter knowledge app connecting the Quran, six Hadith collections, comparative Fiqh, audio, and search across 40+ features.</p>
            <div className="project-footer"><span>Flutter · Dart · SQLite</span><a href="https://github.com/Hanzala-Shadow/Islamic_App" target="_blank" rel="noreferrer" aria-label="View Understand Deen on GitHub"><Arrow /></a></div>
          </article>
          <article className="project-card project-outline">
            <span className="project-index">06</span><div className="project-icon" aria-hidden="true">A/V</div><h3>Face Synthesis Engine</h3>
            <p>Offline CPU lip-sync from a still image: forced phoneme alignment, 468-point face mesh warping, viseme textures, blinking, and head drift.</p>
            <div className="project-footer"><span>Whisper · MediaPipe · OpenCV</span><a href="https://github.com/Hanzala-Shadow/Journey-to-DeepFake-A-Phoneme-and-Viseme-Synchronization" target="_blank" rel="noreferrer" aria-label="View Face Synthesis Engine on GitHub"><Arrow /></a></div>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-statement"><p className="eyebrow">How I work</p><h2>Own the system.<span>Measure the result.</span>Ship the useful version.</h2></div>
        <div className="about-copy">
          <p>I&apos;m a BS Computer Science student at FAST-NUCES, graduating in 2027, with a 3.93/4.00 CGPA. I&apos;ve already led distributed engineering work across Türkiye and Canada, owning architecture, code, evaluation, and production delivery.</p>
          <p>My edge is range with depth: I can diagnose a retrieval bottleneck, design a safer authorization model, connect infrastructure across AWS regions, and still care about the last interaction in the interface.</p>
          <a href="https://www.linkedin.com/in/syed-muhammad-hanzala-bin-ahsan-a9b13b332/" target="_blank" rel="noreferrer">Full experience on LinkedIn <Arrow /></a>
        </div>
      </section>

      <section className="capabilities" aria-label="Technical capabilities">
        <div className="capabilities-title"><span>CAPABILITIES / CURRENT</span><span>10 CORE TECHNOLOGIES</span></div>
        <div className="stack-list">{stack.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Based in Lahore · Working globally</p>
        <h2>Have a hard problem that needs to become a real product?</h2>
        <a className="contact-link" href="mailto:syedmuhammadhanzala11@gmail.com">syedmuhammadhanzala11@gmail.com <Arrow /></a>
        <div className="contact-meta"><span>Open to AI / LLM, backend, data, and product engineering roles.</span><div><a href="https://github.com/Hanzala-Shadow" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/syed-muhammad-hanzala-bin-ahsan-a9b13b332/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></div>
      </section>

      <footer><span>© 2026 Syed Muhammad Hanzala</span><span>ENGINEERED WITH INTENT / LAHORE, PK</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
