import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpenCheck, BrainCircuit, FileUp, Target } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    number: "01",
    title: "Bring your own study material",
    description:
      "Students upload the learning resources they are using to prepare, keeping practice connected to the material they need to understand.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Generate a focused quiz with AI",
    description:
      "An AI model or API uses the uploaded content as the basis for short practice questions, helping learners move from rereading to active recall.",
  },
  {
    icon: Target,
    number: "03",
    title: "Check exam readiness",
    description:
      "Students complete the quiz and use their results as a checkpoint for understanding and to decide where they may need more revision.",
  },
];

export default function EduMateCaseStudy() {
  return (
    <main className="container" style={{ paddingTop: 44, paddingBottom: 100 }}>
      <Link href="/#work" className="project-link" style={{ marginTop: 0, marginBottom: 44 }}>
        <ArrowLeft size={15} /> Back to selected work
      </Link>

      <header style={{ maxWidth: 800, padding: "30px 0 60px" }}>
        <span className="eyebrow">Case study / Education technology</span>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 0.96, letterSpacing: "-.075em", margin: "24px 0" }}>
          EduMate<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", color: "var(--muted)", lineHeight: 1.7, maxWidth: 720 }}>
          Helping students turn their own study materials into AI-assisted practice, so they can check their understanding before exam day.
        </p>
        <div className="tags" style={{ marginTop: 24 }}>
          {["Education technology", "AI-assisted quiz generation", "Next.js", "React", "TypeScript"].map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
      </header>

      <section style={{ borderRadius: 28, background: "var(--accent)", color: "white", padding: "clamp(28px, 6vw, 64px)", marginBottom: 90 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ display: "grid", placeItems: "center", width: 54, height: 54, borderRadius: 16, background: "var(--lime)", color: "#20211f" }}><BookOpenCheck size={26} /></div>
          <span className="mini-label" style={{ color: "rgba(255,255,255,.75)" }}>The idea in one sentence</span>
        </div>
        <p style={{ fontSize: "clamp(26px, 4vw, 44px)", lineHeight: 1.15, letterSpacing: "-.05em", margin: 0, maxWidth: 850 }}>
          Upload your materials. Practise what you&apos;ve learned. Get a clearer sense of what to revise next.
        </p>
      </section>

      <section style={{ maxWidth: 800, marginBottom: 82 }}>
        <span className="eyebrow">01 / The challenge</span>
        <h2 className="section-title" style={{ marginTop: 18 }}>Reading isn&apos;t always the same as being ready.</h2>
        <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.9, marginTop: 24 }}>
          Students can spend hours going through notes and still find it difficult to judge how well they understand the material. EduMate is designed to give them a more active way to check their knowledge: practise with questions based on the resources they are already studying.
        </p>
      </section>

      <section style={{ marginBottom: 82 }}>
        <div className="section-heading">
          <div><span className="eyebrow">02 / How it works</span><h2 className="section-title" style={{ marginTop: 18 }}>From study notes to a readiness check.</h2></div>
        </div>
        <div className="timeline">
          {steps.map((step) => {
            const Icon = step.icon;
            return <article className="timeline-item" key={step.number}>
              <div className="timeline-date" style={{ display: "flex", alignItems: "center", gap: 12 }}><Icon size={18} color="var(--accent)" /> STEP {step.number}</div>
              <div className="timeline-content"><h3>{step.title}</h3><p>{step.description}</p></div>
            </article>;
          })}
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 18, marginBottom: 82 }}>
        <div style={{ border: "1px solid var(--line)", borderRadius: 20, padding: 26 }}>
          <span className="eyebrow">03 / Design goal</span>
          <h3 style={{ fontSize: 24, letterSpacing: "-.04em", margin: "18px 0 10px" }}>Make practice personal.</h3>
          <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, margin: 0 }}>Base practice on the learner&apos;s own materials instead of relying only on a generic set of questions.</p>
        </div>
        <div style={{ border: "1px solid var(--line)", borderRadius: 20, padding: 26 }}>
          <span className="eyebrow">04 / Intended value</span>
          <h3 style={{ fontSize: 24, letterSpacing: "-.04em", margin: "18px 0 10px" }}>Make revision more informed.</h3>
          <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, margin: 0 }}>Use quiz performance as a useful signal for exam preparation—not as a guarantee of exam results.</p>
        </div>
      </section>

      <section style={{ maxWidth: 800, marginBottom: 82 }}>
        <span className="eyebrow">05 / Technical overview</span>
        <h2 className="section-title" style={{ marginTop: 18 }}>A web experience with AI-assisted question generation.</h2>
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.9, marginTop: 24 }}>
          The project repository uses Next.js, React, TypeScript, and Tailwind CSS. The product concept includes an AI model or API to generate quiz questions from uploaded study materials. The exact model, API provider, file-processing pipeline, and deployment details should be added once the implementation is confirmed.
        </p>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div><span className="eyebrow">Explore the project</span><p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>See the source code and follow the project as it develops.</p></div>
        <a className="button" href="https://github.com/tees-workshop/EduMate" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>
      </section>
    </main>
  );
}
