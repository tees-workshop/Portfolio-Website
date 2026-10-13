import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BrainCircuit, CheckCircle2, ListChecks, Play, Save, Scale } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-assisted task breakdown",
    description: "Accepts a task in plain English and turns it into a structured plan with actionable subtasks.",
  },
  {
    icon: Scale,
    title: "Transparent priority scoring",
    description: "Uses an urgency × impact ÷ effort formula to help rank work and make the reasoning easier to inspect.",
  },
  {
    icon: Save,
    title: "Session persistence",
    description: "Saves task information locally in a session file so tasks can remain available across CLI runs.",
  },
  {
    icon: Play,
    title: "Interactive execution",
    description: "Guides the user through a selected task's subtasks with an interactive command-line workflow.",
  },
  {
    icon: ListChecks,
    title: "Task management commands",
    description: "Supports adding, listing, viewing, editing, completing, reprioritizing, reporting on, and clearing tasks.",
  },
  {
    icon: CheckCircle2,
    title: "Built-in evaluation metrics",
    description: "Includes a report that evaluates dimensions such as task decomposition, prioritization, context retention, latency, and completion.",
  },
];

export default function TaskMindCaseStudy() {
  return (
    <main className="container" style={{ paddingTop: 44, paddingBottom: 100 }}>
      <Link href="/#work" className="project-link" style={{ marginTop: 0, marginBottom: 44 }}>
        <ArrowLeft size={15} /> Back to selected work
      </Link>

      <header style={{ maxWidth: 820, padding: "30px 0 56px" }}>
        <span className="eyebrow">Case study / AI productivity tooling</span>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 0.96, letterSpacing: "-.075em", margin: "24px 0" }}>
          TaskMind<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", color: "var(--muted)", lineHeight: 1.7, maxWidth: 740 }}>
          A Python command-line productivity agent that transforms everyday task descriptions into prioritized plans and helps users work through them step by step.
        </p>
        <div className="tags" style={{ marginTop: 24 }}>
          {["Python", "AI agent", "CLI", "Task prioritization", "Local session persistence"].map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
      </header>

      <section style={{ background: "var(--paper-raised)", border: "1px solid var(--line)", borderRadius: 24, padding: "clamp(28px, 6vw, 56px)", marginBottom: 82 }}>
        <span className="eyebrow">The concept</span>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.12, letterSpacing: "-.06em", margin: "18px 0" }}>Less time figuring out the next step. More time making progress.</h2>
        <p style={{ color: "var(--muted)", maxWidth: 700, lineHeight: 1.9, margin: 0 }}>
          TaskMind addresses the gap between having a long list of things to do and knowing what to do next. Users describe a task in ordinary language; the agent creates a plan, assigns a priority score, keeps the work organised, and offers an interactive way to execute it.
        </p>
      </section>

      <section style={{ marginBottom: 82 }}>
        <span className="eyebrow">01 / Core capabilities</span>
        <h2 className="section-title" style={{ marginTop: 18, marginBottom: 30 }}>From a vague goal to an actionable workflow.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))", gap: 14 }}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return <article key={feature.title} style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 22, background: "var(--paper-raised)" }}>
              <div style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: 13, background: "var(--accent-soft)", color: "var(--accent)" }}><Icon size={20} /></div>
              <h3 style={{ fontSize: 18, letterSpacing: "-.035em", margin: "20px 0 9px" }}>{feature.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8, margin: 0 }}>{feature.description}</p>
            </article>;
          })}
        </div>
      </section>

      <section style={{ maxWidth: 800, marginBottom: 82 }}>
        <span className="eyebrow">02 / How the workflow fits together</span>
        <h2 className="section-title" style={{ marginTop: 18 }}>A focused loop for getting work done.</h2>
        <div className="timeline" style={{ marginTop: 30 }}>
          <article className="timeline-item"><div className="timeline-date">01 · Capture</div><div className="timeline-content"><h3>Describe the task</h3><p>The user enters a goal using the command line in plain English.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">02 · Plan</div><div className="timeline-content"><h3>Generate subtasks and a priority</h3><p>The agent breaks the goal into smaller actions and calculates a priority score based on urgency, impact, and effort.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">03 · Organise</div><div className="timeline-content"><h3>Keep the queue in context</h3><p>Tasks and their session data are saved locally, so the user can review and manage work between runs.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">04 · Execute</div><div className="timeline-content"><h3>Work through the plan</h3><p>The interactive run command walks the user through the selected task's subtasks, while reporting commands provide a view of progress and evaluation metrics.</p></div></article>
        </div>
      </section>

      <section style={{ maxWidth: 800, marginBottom: 82 }}>
        <span className="eyebrow">03 / Implementation notes</span>
        <h2 className="section-title" style={{ marginTop: 18 }}>A Python CLI with an AI integration.</h2>
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.9, marginTop: 24 }}>
          The repository includes a Python command-line entry point, environment-variable loading, Rich terminal output, and a requirements file with AI-client and supporting libraries. The README and dependency configuration should be reconciled before naming the exact model provider in this public case study, so the portfolio only states verified implementation details.
        </p>
        <div className="tags" style={{ marginTop: 20 }}>
          {["Python 3.10+", "argparse", "python-dotenv", "Rich terminal UI", "AI API integration"].map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div><span className="eyebrow">Explore the source</span><p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>Read the README and inspect the CLI implementation on GitHub.</p></div>
        <a className="button" href="https://github.com/tees-workshop/TaskMind" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>
      </section>
    </main>
  );
}
