"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Code2, ExternalLink, Github, Layers3,
  Mail, Menu, Moon, Send, Sparkles, Sun, X, GraduationCap, BrainCircuit,
  BriefcaseBusiness, MoveUpRight
} from "lucide-react";
import { useEffect, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";

const projects = [
  {
    number: "01", title: "EduMate", type: "Learning experience",
    description: "An AI-assisted study tool that turns students’ uploaded learning materials into short, content-based quizzes, helping them check their understanding and gauge exam readiness.",
    tech: ["Education", "Web development"], repo: "https://github.com/tees-workshop/EduMate",
    live: "https://edu-mate-iota-six.vercel.app/", caseStudy: "/work/edumate", image: "/images/edumate-preview.svg", imageAlt: "Illustrated EduMate study dashboard preview",
    tone: "lavender", icon: GraduationCap,
  },
  {
    number: "02", title: "Convocation Invite", type: "Interactive web experience",
    description: "A responsive digital invitation featuring a live countdown, ceremony details, venue directions, and RSVP options in one shareable page.",
    tech: ["HTML", "CSS", "JavaScript"], repo: "https://github.com/tees-workshop/Convocation-Invite",
    live: "https://convocation-invite-phi.vercel.app/", caseStudy: "/work/convocation-invite",
    image: "/images/convocation-preview.svg", imageAlt: "Illustrated warm ivory and gold convocation invitation preview",
    tone: "lime", icon: Sparkles,
  },
  {
    number: "03", title: "TaskMind", type: "AI tooling · 2026",
    description: "A Python command-line productivity agent that breaks goals into actionable tasks, prioritizes work, guides execution, and preserves session data between runs.",
    tech: ["Python", "LLMs", "CLI"], repo: "https://github.com/tees-workshop/TaskMind",
    caseStudy: "/work/taskmind", image: "/images/taskmind-preview.svg", imageAlt: "Illustrated TaskMind command-line task planning interface",
    tone: "peach", icon: BrainCircuit,
  },
  {
    number: "04", title: "Novo", type: "Professional collaboration",
    description: "Contributed frontend development across a multi-page business website, refining responsive layouts, navigation, and service-page interfaces as part of a team.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"], live: "https://novo-index-page-re-do.vercel.app/",
    caseStudy: "/work/novo", image: "/images/novo-preview.svg", imageAlt: "Illustrated business website preview for Novo",
    tone: "blue", icon: BriefcaseBusiness,
  },
];

const experience = [
  { date: "2025", title: "Digital Support & Web Development Intern", org: "Elonatech Nigeria", description: "Contributed to web experiences using Next.js and TypeScript, supported digital content planning and client engagement, and helped maintain consistent brand communication across multiple brands. Recognised as Employee of the Month." },
  { date: "Community", title: "Assistant Community Lead", org: "AIAI Lagos Community", description: "Supporting community engagement, coordination, and activities that help people connect, learn, and grow together." },
  { date: "Community", title: "Volunteer", org: "Career Compass", description: "Contributing to a career-focused community initiative." },
];

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML & CSS", "Git & GitHub", "Python", "Responsive UI", "Content strategy", "AI tools"];
const links = [["About", "#about"], ["Work", "#work"], ["Experience", "#experience"], ["Certifications", "#certifications"], ["Contact", "#contact"]];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("tee-theme");
    const enabled = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(enabled);
    document.documentElement.dataset.theme = enabled ? "dark" : "light";
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("tee-theme", next ? "dark" : "light");
  }
  return <button className="icon-button" type="button" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><div className="container">
    <nav className="nav" aria-label="Main navigation">
     
<a className="brand" href="#home" aria-label="Tehilah home">
  <img
    src="/icon.png"
    alt=""
    className="brand-mark"
  />
  <span>
    Okhiria Tehilah 
    <span style={{ color: "var(--accent)" }}>.</span>
  </span>
</a>

      <div className="nav-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
      <div className="nav-actions"><ThemeToggle /><a className="button nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a><button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={17} /> : <Menu size={17} />}</button></div>
    </nav>
    <AnimatePresence>{open && <motion.div className="mobile-links" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label} <ArrowUpRight size={14} style={{ display: "inline" }} /></a>)}</motion.div>}</AnimatePresence>
  </div></header>;
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2 className="section-title">{title}</h2></div>{copy && <p className="section-copy">{copy}</p>}</div>;
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return <section className="hero" id="home"><div className="hero-glow" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy-column">
        <motion.span className="availability" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="status-dot" /> Open to opportunities & collaborations</motion.span>
        <h1 className="hero-title"><motion.span className="title-line" initial={reduceMotion ? false : { opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>Curious mind.</motion.span><motion.span className="title-line" initial={reduceMotion ? false : { opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}><span className="accent-word">Thoughtful</span> builder.</motion.span></h1>
        <motion.p className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .36 }}>I&apos;m Tehilah — a Computer Science graduate, a front-end developer and a product manager who loves turning ideas into useful, human-centred digital experiences.</motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .48 }}><a className="button" href="#work">Explore my work <ArrowDownRight size={16} /></a><a className="button secondary" href="#contact">Get in touch <ArrowUpRight size={15} /></a><a className="button secondary" href="/Tehilah-Okhiria-CV.pdf" download>Download CV <ArrowDownRight size={16} /></a></motion.div>
        <div className="hero-note"><span className="note-line" /> Building with curiosity. Learning by doing.</div>
      </div>
      <motion.aside className="portrait-card" initial={reduceMotion ? false : { opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .85, delay: .18, ease: [0.22, 1, .36, 1] }} aria-label="Illustrated portrait placeholder">
        <div className="portrait-image-wrap"><img src="/images/profile-pic.jpeg" alt="Stylised illustrated portrait placeholder; replace with Tehilah's own photo" className="portrait-image" /><span className="portrait-sticker">HELLO,<br />I&apos;M TEE <Sparkles size={14} /></span></div>
        <div className="portrait-caption"><span className="mini-label">Developer · Creative thinker</span><span className="portrait-caption-mark">✳</span></div>
        <span className="portrait-orbit orbit-one" aria-hidden="true" /><span className="portrait-orbit orbit-two" aria-hidden="true" />
      </motion.aside>
    </div>
    <div className="hero-index" aria-hidden="true">PORTFOLIO / 2026</div>
  </section>;
}

function Ticker() {
  return <div className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({ length: 2 }, (_, i) => <div className="ticker-inner" key={i}><span>Software development</span><span className="ticker-star">✳</span><span>Creative problem-solving</span><span className="ticker-star">✳</span><span>AI & emerging tech</span><span className="ticker-star">✳</span><span>Community</span><span className="ticker-star">✳</span></div>)}</div></div>;
}

function About() {
  return <section className="section" id="about"><div className="container about-grid">
    <Reveal><span className="eyebrow">A bit about me</span><h2 className="section-title">Tech is the tool.<br /><span className="serif-italic">People are the point.</span></h2><div className="about-illustration"><span className="about-sun" /><span className="about-shape shape-a" /><span className="about-shape shape-b" /><span className="about-stamp">CURIOUS<br />BY NATURE</span><Sparkles size={27} /></div></Reveal>
    <Reveal delay={.12}><div className="about-note"><p>I&apos;m a Computer Science graduate growing my craft across frontend development, product management, software engineering, and emerging AI tools. I enjoy the mix of logic and creativity that comes with taking a rough idea and turning it into something people can use.</p><p>Outside the code editor, I&apos;ve explored digital communications, content planning, and community leadership. Those experiences shape how I think about the people on the other side of every interface.</p><div className="about-facts"><div className="fact"><strong>Build</strong><span>Responsive web experiences and interfaces</span></div><div className="fact"><strong>Explore</strong><span>AI tools and practical problem-solving</span></div><div className="fact"><strong>Connect</strong><span>Communities, communication, collaboration</span></div></div></div></Reveal>
  </div></section>;
}

function Projects() {
  return <section className="section work-section" id="work"><div className="container"><Reveal><SectionHeading eyebrow="Selected work" title="A few things I’ve been building." copy="A mix of web experiences, practical tools, and experiments. Each project is an opportunity to learn by making." /></Reveal>
    <div className="project-grid">{projects.map((project, i) => { const Icon = project.icon; return <Reveal key={project.number} delay={(i % 2) * .08} className="project-reveal"><article className={"project-card project-" + project.tone}>
      <a className="project-image-link" href={project.caseStudy} aria-label={"Read the " + project.title + " case study"}><div className="project-image-frame"><img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" /><span className="image-open"><MoveUpRight size={17} /></span></div></a>
      <div className="project-card-body"><div className="project-top"><span className="project-number">PROJECT / {project.number}</span><span className="project-icon"><Icon size={19} /></span></div><span className="mini-label">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
      <div className="project-links">{project.repo && <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View code <Github size={14} /></a>}{project.caseStudy && <a className="project-link" href={project.caseStudy}>Case study <ArrowUpRight size={14} /></a>}{project.live && <a className="project-link" href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={14} /></a>}</div></div>
    </article></Reveal>; })}</div>
    <Reveal><div className="work-footnote"><span>04 projects</span><span>Made with curiosity, patience & lots of tabs.</span><Sparkles size={18} /></div></Reveal>
  </div></section>;
}

function Experience() {
  return <section className="section experience-section" id="experience"><div className="container"><Reveal><SectionHeading eyebrow="The journey so far" title="Experience that shapes how I work." copy="Technical growth matters, but so do communication, reliability, teamwork, and staying curious." /></Reveal>
    <div className="timeline">{experience.map((item, i) => <Reveal key={item.title} delay={i * .06}><article className="timeline-item"><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.title}</h3><p className="timeline-org">{item.org}</p><p>{item.description}</p></div><ArrowUpRight className="timeline-arrow" size={18} /></article></Reveal>)}</div>
    <Reveal><div className="skills-area"><div><span className="eyebrow">Tools in my toolkit</span><p className="skills-intro">The things I use, and the things I&apos;m growing into.</p></div><div className="skills-wrap">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div></div></Reveal>
  </div></section>;
}


function Certifications() {
  const certificates = [
    {
      title: "HTML and CSS in Depth",
      issuer: "Meta · Coursera",
      image: "/certificates/Coursera%20%20Online%20Courses%20%26%20Credentials%20From%20Top%20Educators.%20Join%20for%20Free%20%20Coursera_page-0001.jpg",
      description: "Course certificate",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      image: "/certificates/Introduction_to_Cybersecurity_Badge20240802-7-gakcb9_page-0001.jpg",
      description: "Course badge",
    },
    {
      title: "30 Days of Web Design",
      issuer: "Web design",
      image: "/certificates/30%20DAYS%20OF%20WEB%20DESIGN%20CERTIFICATE_page-0001.jpg",
      description: "Web design certificate",
    },
    {
      title: "Launchpad to Fundamental Questions of AI - Part 3",
      issuer: "ATINGI · YOMA",
      image: "/certificates/TehilahOkhiria%20-%20Launchpad%20to%20Fundamental%20Questions%20of%20Artificial%20Intelligence%20-Part%203Risks_page-0001.jpg",
      description: "Risks of artificial intelligence",
    },
    {
      title: "Launchpad to Fundamental Questions of AI - Part 4",
      issuer: "ATINGI · YOMA",
      image: "/certificates/TehilahOkhiria%20-%20Launchpad%20to%20Fundamental%20Questions%20of%20Artificial%20Intelligence%20-Part%204%20Opportunities%20and%20Outlook_page-0001.jpg",
      description: "Opportunities and outlook",
    },
    {
      title: "How to Be a Successful Online Learner",
      issuer: "ATINGI · YOMA",
      image: "/certificates/TehilahOkhiria-%20How%20to%20be%20a%20successful%20online%20learner_page-0001.jpg",
      description: "Learning and development certificate",
    },
    {
      title: "Introduction to Modern AI",
      issuer: "CISCO Networking Academy",
      image: "/certificates/TehilahOkhiria-%20Introduction%20to%20Modern%20AI_page-0001.jpg",
      description: "Course certificate",
    },
    {
      title: "Introduction to Data Literacy",
      issuer: "DataCamp",
      image: "/certificates/certificate%202_page-0001.jpg",
      description: "Certificate of completion",
    },
    {
      title: "Understanding Data Engineering",
      issuer: "DataCamp",
      image: "/certificates/certificate%203_page-0001.jpg",
      description: "Certificate of completion",
    },
    {
      title: "Introduction to AI Agents",
      issuer: "DataCamp",
      image: "/certificates/certificate_page-0001.jpg",
      description: "Certificate of completion",
    },
  ];

  return <section className="section work-section" id="certifications"><div className="container">
    <Reveal><SectionHeading eyebrow="Learning & growth" title="Certifications." copy="A few milestones from my continued learning journey." /></Reveal>
    <div className="project-grid">{certificates.map((certificate, index) => <Reveal key={certificate.title} delay={(index % 2) * .08} className="project-reveal"><article className="project-card project-lavender">
      <div className="project-card-body">
        <div className="project-top"><span className="project-number">CERTIFICATE / {String(index + 1).padStart(2, "0")}</span><span className="project-icon"><GraduationCap size={19} /></span></div>
        <span className="mini-label">{certificate.issuer}</span><h3>{certificate.title}</h3><p>{certificate.description}</p>
        <a href={certificate.image} target="_blank" rel="noreferrer" aria-label={"View full image of " + certificate.title}>
          <img
            className="certificate-image"
            src={certificate.image}
            alt={certificate.title + " certificate"}
            loading="lazy"
            style={{ display: "block", width: "100%", height: "auto", maxHeight: 440, objectFit: "contain", objectPosition: "top", border: "1px solid var(--border)", borderRadius: 12, background: "white", marginTop: 16 }}
          />
        </a>
      </div>
    </article></Reveal>)}</div>
  </div></section>;
}

function Contact() {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [message, setMessage] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const subject = encodeURIComponent("Portfolio enquiry from " + name); const body = encodeURIComponent("From: " + name + "\nReply to: " + email + "\n\n" + message); window.location.href = "mailto:okhiriatehilah@gmail.com?subject=" + subject + "&body=" + body; }
  return <section className="section contact-section" id="contact"><div className="container"><Reveal><div className="contact-panel"><div className="contact-copy"><span className="eyebrow">Have something in mind?</span><h2>Let&apos;s make something <span>meaningful.</span></h2><p>Have a role, a collaboration, or an interesting problem to solve? I&apos;d love to hear what you&apos;re working on.</p><div className="contact-socials"><a className="button contact-light-button" href="mailto:okhiriatehilah@gmail.com">Email me <Mail size={15} /></a><a className="button contact-outline-button" href="https://github.com/tees-workshop" target="_blank" rel="noreferrer">GitHub <Github size={15} /></a><a className="button contact-outline-button" href="https://www.linkedin.com/in/tehilah-okhiria" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div><div className="contact-doodle" aria-hidden="true"><span /><span /><span /><Sparkles size={24} /></div></div>
    <form onSubmit={handleSubmit} className="contact-form"><label htmlFor="contact-name">Your name</label><input id="contact-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" style={fieldStyle} /><label htmlFor="contact-email">Your email</label><input id="contact-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" style={fieldStyle} /><label htmlFor="contact-message">What would you like to talk about?</label><textarea id="contact-message" required rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me a little about it..." style={{ ...fieldStyle, resize: "vertical" }} /><button className="button compose-button" type="submit">Compose email <Send size={14} /></button><span className="form-note">Opens your email app with the message prepared; it won&apos;t send automatically.</span></form>
  </div></Reveal></div></section>;
}

const fieldStyle: CSSProperties = { width: "100%", padding: "12px 13px", border: "1px solid rgba(255,255,255,.25)", borderRadius: 12, background: "rgba(255,255,255,.08)", color: "white", outlineOffset: 3, fontSize: 13 };

export default function HomePage() {
  useEffect(() => {
    const onMove = (event: globalThis.MouseEvent) => {
      document.documentElement.style.setProperty("--pointer-x", event.clientX + "px");
      document.documentElement.style.setProperty("--pointer-y", event.clientY + "px");
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div className="site-shell"><Header /><main><Hero /><Ticker /><About /><Projects /><Experience /><Certifications /><Contact /></main>
    <footer className="container footer"><span>© {new Date().getFullYear()} Okhiria Tehilah. Made with curiosity.</span><div className="footer-links"><a href="https://github.com/tees-workshop" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} style={{ display: "inline" }} /></a><a href="https://www.linkedin.com/in/tehilah-okhiria" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} style={{ display: "inline" }} /></a><a href="#home">Back to top ↑</a></div></footer>
  </div>;
}
