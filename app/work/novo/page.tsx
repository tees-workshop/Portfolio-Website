import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Layers3, LayoutTemplate, MonitorSmartphone, Users } from "lucide-react";

const contributions = [
  {
    icon: LayoutTemplate,
    title: "Page implementation",
    description: "Contributed frontend work across the site's pages, helping translate service and business requirements into consistent web interfaces.",
  },
  {
    icon: Layers3,
    title: "Reusable interface patterns",
    description: "Worked within the site's shared layout and navigation patterns to keep the experience coherent across different sections.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive UI",
    description: "Built and refined page layouts with different screen sizes and usable navigation in mind.",
  },
  {
    icon: Users,
    title: "Collaborative delivery",
    description: "Contributed as part of a team project, coordinating frontend work within the wider website effort.",
  },
];

export default function NovoCaseStudy() {
  return (
    <main className="container" style={{ paddingTop: 44, paddingBottom: 100 }}>
      <Link href="/#work" className="project-link" style={{ marginTop: 0, marginBottom: 44 }}>
        <ArrowLeft size={15} /> Back to selected work
      </Link>

      <header style={{ maxWidth: 820, padding: "30px 0 56px" }}>
        <span className="eyebrow">Case study / Collaborative client work</span>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 0.96, letterSpacing: "-.075em", margin: "24px 0" }}>
          Novo<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", color: "var(--muted)", lineHeight: 1.7, maxWidth: 740 }}>
          Frontend development contribution across a multi-page business website, focused on responsive layouts, shared navigation, and service-page interfaces.
        </p>
        <div className="tags" style={{ marginTop: 24 }}>
          {["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Team collaboration"].map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
      </header>

      <section style={{ border: "1px solid var(--line)", borderRadius: 24, padding: "clamp(28px, 6vw, 54px)", background: "var(--paper-raised)", marginBottom: 82 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <span style={{ display: "grid", placeItems: "center", width: 46, height: 46, borderRadius: 14, background: "var(--accent-soft)", color: "var(--accent)" }}><Code2 size={22} /></span>
          <span className="eyebrow">My role</span>
        </div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: 1.15, letterSpacing: "-.06em", margin: "0 0 16px" }}>Frontend development across the website.</h2>
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.9, maxWidth: 740, margin: 0 }}>
          I contributed frontend implementation for the site's pages as part of a collaborative project. This case study focuses on my frontend contribution; it does not imply that I independently owned the full product, backend, or business decisions.
        </p>
      </section>

      <section style={{ marginBottom: 82 }}>
        <span className="eyebrow">01 / Areas of contribution</span>
        <h2 className="section-title" style={{ marginTop: 18, marginBottom: 30 }}>Consistent experiences across multiple pages.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))", gap: 14 }}>
          {contributions.map((item) => {
            const Icon = item.icon;
            return <article key={item.title} style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 22, background: "var(--paper-raised)" }}>
              <Icon size={22} color="var(--accent)" />
              <h3 style={{ fontSize: 18, letterSpacing: "-.035em", margin: "18px 0 9px" }}>{item.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8, margin: 0 }}>{item.description}</p>
            </article>;
          })}
        </div>
      </section>

      <section style={{ maxWidth: 800, marginBottom: 82 }}>
        <span className="eyebrow">02 / Tech stack</span>
        <h2 className="section-title" style={{ marginTop: 18 }}>Modern frontend tools.</h2>
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.9, marginTop: 24 }}>
          The project frontend uses Next.js, TypeScript, and Tailwind CSS. These tools support component-based page development, typed UI code, and responsive styling. Detailed implementation examples can be added where the public repository and project permissions allow.
        </p>
      </section>

      <section style={{ border: "1px solid var(--line)", borderRadius: 20, padding: 24, marginBottom: 60 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "start" }}>
          <CheckCircle2 size={21} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>A note on confidentiality</h3>
            <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
              This portfolio entry is intentionally high-level. Before publishing screenshots, code samples, or detailed client requirements, confirm that they are public or that you have permission to share them. Keep any private credentials, internal data, and confidential business information out of the case study.
            </p>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div><span className="eyebrow">Public project preview</span><p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>Open the publicly available website to see the project.</p></div>
        <a className="button" href="https://novo-index-page-re-do.vercel.app/" target="_blank" rel="noreferrer">View live site <ArrowUpRight size={15} /></a>
      </section>
    </main>
  );
}
