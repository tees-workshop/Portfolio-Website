"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";

const projects = [
  {
    number: "01",
    title: "EduMate",
    type: "Learning experience",
    description:
      "A student-focused exam-readiness website where learners upload their study materials, take short quizzes generated from that content, and use the results to assess whether they are ready for an upcoming exam.",
    tech: ["Education", "Web development"],
    repo: "https://github.com/tees-workshop/EduMate",
    symbol: "E",
    tone: "lavender",
  },
  {
    number: "02",
    title: "Convocation Invite",
    type: "Interactive web experience",
    description:
      "A digital convocation invitation designed to share event details in a polished, accessible format, with a focus on visual presentation and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/tees-workshop/Convocation-Invite",
    live: "https://convocation-invite-kappa.vercel.app/",
    symbol: "✳",
    tone: "lime",
  },
  {
    number: "03",
    title: "TaskMind",
    type: "AI tooling · 2026",
    description:
      "A Python CLI-based AI agent that turns a high-level goal into structured tasks and subtasks, with progress saved across sessions.",
    tech: ["Python", "LLMs", "CLI"],
    repo: "https://github.com/tees-workshop/TaskMind",
    symbol: "T",
    tone: "peach",
  },
  {
    number: "04",
    title: "Novo — Frontend collaboration",
    type: "Professional project",
    description:
      "Frontend contributions to a multi-page business website, helping shape responsive interfaces and reusable UI across service pages.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://novo-index-page-re-do.vercel.app/",
    symbol: "N",
    tone: "blue",
  },
];

const experience = [
  {
    date: "2025",
    title: "Digital Support & Web Development Intern",
    org: "Elonatech Nigeria",
    description:
      "Contributed to web experiences using Next.js and TypeScript, supported digital content planning and client engagement, and helped maintain consistent brand communication across multiple brands. Recognised as Employee of the Month.",
  },
  {
    date: "Community",
    title: "Assistant Community Lead",
    org: "AIAI Lagos Community",
    description:
      "Supporting community engagement, coordination, and activities that help people connect, learn, and grow together.",
  },
  {
    date: "Community",
    title: "Volunteer",
    org: "Career Compass",
    description:
      "Contributing to a career-focused community initiative. Add your specific responsibilities and outcomes here as you refine this section.",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML & CSS",
  "Git & GitHub",
  "Python",
  "Responsive UI",
  "Content strategy",
  "AI tools",
];

const links = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tee-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = saved ? saved === "dark" : prefersDark;
    setDark(enabled);
    document.documentElement.dataset.theme = enabled ? "dark" : "light";
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("tee-theme", next ? "dark" : "light");
  }

  return (
    <button className="icon-button" type="button" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <div className="container">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Tehilah home">
            <span className="brand-mark">T.</span>
            <span>tehilah okhiria<span style={{ color: "var(--accent)" }}>.</span></span>
          </a>
          <div className="nav-links">
            {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="button" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
            <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {open && <motion.div className="mobile-links" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label} <ArrowUpRight size={14} style={{ display: "inline" }} /></a>)}
          </motion.div>}
        </AnimatePresence>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2 className="section-title">{title}</h2></div>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="availability"><span className="status-dot" /> Open to opportunities & collaborations</span>
          <h1>Curious mind.<br />Thoughtful <span>builder.</span></h1>
          <p className="hero-copy">I&apos;m Tehilah — a Computer Science student and developer who enjoys turning ideas into useful, human-centred digital experiences.</p>
          <div className="hero-actions">
            <a className="button" href="#work">Explore my work <ArrowDownRight size={16} /></a>
            <a className="button secondary" href="#contact">Get in touch <ArrowUpRight size={15} /></a>
          </div>
        </motion.div>
        <motion.aside className="hero-aside" initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} aria-label="A little about my approach">
          <div className="mini-label">A little about my approach</div>
          <div className="orbit" aria-hidden="true" /><div className="orbit-core" aria-hidden="true"><Code2 size={28} /></div>
          <div className="aside-bottom"><Sparkles size={19} color="var(--accent)" /><p>Building with curiosity, learning in public, and making technology feel a little more human.</p></div>
        </motion.aside>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="A few things I've been building." copy="A mix of web experiences, practical tools, and experiments. Each project is an opportunity to learn by making." />
        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.article key={project.number} className="project-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: i * 0.07 }}>
              <div>
                <div className="project-top"><span className="project-number">PROJECT / {project.number}</span><span className="project-icon"><Layers3 size={19} /></span></div>
                <span className="mini-label">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
              </div>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View code <Github size={14} /></a>
                {"live" in project && project.live && <a className="project-link" href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={14} /></a>}
              </div>
            </motion.article>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: 12, marginTop: 18 }}>Project descriptions are an initial draft; we&apos;ll verify each feature and your exact contribution before calling these final case studies.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container about-grid">
        <div><span className="eyebrow">A bit about me</span><h2 className="section-title">Tech is the tool.<br />People are the point.</h2></div>
        <div className="about-note">
          <p>I&apos;m a Computer Science undergraduate growing my craft across frontend development, software engineering, and emerging AI tools. I enjoy the mix of logic and creativity that comes with taking a rough idea and turning it into something people can use.</p>
          <p>Outside the code editor, I&apos;ve explored digital communications, content planning, and community leadership. Those experiences shape how I think about the people on the other side of every interface.</p>
          <div className="about-facts">
            <div className="fact"><strong>Build</strong><span>Responsive web experiences and interfaces</span></div>
            <div className="fact"><strong>Explore</strong><span>AI tools and practical problem-solving</span></div>
            <div className="fact"><strong>Connect</strong><span>Communities, communication, collaboration</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <SectionHeading eyebrow="The journey so far" title="Experience that shapes how I work." copy="Technical growth matters, but so do communication, reliability, teamwork, and staying curious." />
        <div className="timeline">
          {experience.map((item) => <article className="timeline-item" key={item.title}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content"><h3>{item.title}</h3><p style={{ color: "var(--accent)", marginBottom: 8, fontSize: 12 }}>{item.org}</p><p>{item.description}</p></div>
          </article>)}
        </div>
        <div style={{ marginTop: 54 }}>
          <span className="eyebrow">Tools in my toolkit</span>
          <div className="skills-wrap">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Portfolio enquiry from " + name);
    const body = encodeURIComponent("From: " + name + "\nReply to: " + email + "\n\n" + message);
    window.location.href = "mailto:?subject=" + subject + "&body=" + body;
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div>
            <span className="eyebrow">Have something in mind?</span>
            <h2>Let&apos;s make something meaningful.</h2>
            <p>Have a role, a collaboration, or an interesting problem to solve? I&apos;d love to hear what you&apos;re working on.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 25 }}>
              <a className="button" style={{ background: "var(--lime)", borderColor: "var(--lime)", color: "#20211f" }} href="mailto:">Email me <Mail size={15} /></a>
              <a className="button secondary" style={{ borderColor: "rgba(255,255,255,.45)", color: "white" }} href="https://github.com/tees-workshop" target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>
            </div>
          </div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <label className="mini-label" htmlFor="contact-name" style={{ color: "rgba(255,255,255,.75)" }}>Your name</label>
            <input id="contact-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" style={fieldStyle} />
            <label className="mini-label" htmlFor="contact-email" style={{ color: "rgba(255,255,255,.75)" }}>Your email</label>
            <input id="contact-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" style={fieldStyle} />
            <label className="mini-label" htmlFor="contact-message" style={{ color: "rgba(255,255,255,.75)" }}>What would you like to talk about?</label>
            <textarea id="contact-message" required rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me a little about it..." style={{ ...fieldStyle, resize: "vertical" }} />
            <button className="button" type="submit" style={{ alignSelf: "start", background: "white", color: "#3b3c95", borderColor: "white" }}>Compose email <Send size={14} /></button>
            <span style={{ color: "rgba(255,255,255,.65)", fontSize: 11, lineHeight: 1.6 }}>This opens your email app with the message prepared; it does not send automatically.</span>
          </form>
        </div>
      </div>
    </section>
  );
}

const fieldStyle: CSSProperties = {
  width: "100%",
  padding: "12px 13px",
  border: "1px solid rgba(255,255,255,.28)",
  borderRadius: 10,
  background: "rgba(255,255,255,.1)",
  color: "white",
  outlineOffset: 3,
  fontSize: 13,
};

export default function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <div className="ticker"><div className="container ticker-inner"><span>Software development</span><span>✳</span><span>Creative problem-solving</span><span>✳</span><span>AI & emerging tech</span><span>✳</span><span>Community</span></div></div>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="container footer">
        <span>© {new Date().getFullYear()} Tehilah Okhiria. Made with curiosity.</span>
        <div className="footer-links"><a href="https://github.com/tees-workshop" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} style={{ display: "inline" }} /></a><a href="https://www.linkedin.com/in/tehilah-okhiria" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} style={{ display: "inline" }} /></a><a href="#home">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
