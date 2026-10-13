import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, MapPin, Timer, UsersRound } from "lucide-react";

const details = [
  { icon: CalendarDays, label: "Date", value: "Friday, 16 October 2026" },
  { icon: Clock3, label: "Time", value: "10:00 am" },
  { icon: MapPin, label: "Venue", value: "Trinity University City Campus, Yaba, Lagos" },
];

export default function ConvocationInviteCaseStudy() {
  return (
    <main className="container" style={{ paddingTop: 44, paddingBottom: 100 }}>
      <Link href="/#work" className="project-link" style={{ marginTop: 0, marginBottom: 44 }}>
        <ArrowLeft size={15} /> Back to selected work
      </Link>

      <header style={{ maxWidth: 820, padding: "30px 0 56px" }}>
        <span className="eyebrow">Case study / Personal project</span>
        <h1 style={{ fontSize: "clamp(46px, 8vw, 86px)", lineHeight: 0.96, letterSpacing: "-.075em", margin: "24px 0" }}>
          Convocation<br />Invite<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", color: "var(--muted)", lineHeight: 1.7, maxWidth: 740 }}>
          A digital invitation that brings event details, a live countdown, directions, and RSVP into one elegant, shareable web page.
        </p>
        <div className="tags" style={{ marginTop: 24 }}>
          {["HTML", "CSS", "JavaScript", "Responsive design", "Interactive countdown"].map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
      </header>

      <section style={{ border: "1px solid var(--line)", borderRadius: 24, overflow: "hidden", marginBottom: 84 }}>
        <div style={{ background: "#FFFEFB", color: "#3F2413", padding: "clamp(30px, 7vw, 76px)", textAlign: "center" }}>
          <span style={{ color: "#6B4630", fontSize: 12, letterSpacing: ".13em", textTransform: "uppercase" }}>You are warmly invited to my</span>
          <p style={{ color: "#B98A2F", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "clamp(20px, 3vw, 30px)", margin: "14px 0" }}>Convocation Celebration</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(34px, 7vw, 70px)", lineHeight: 1.08, margin: "20px auto", maxWidth: 650 }}>Okhiria Tehilah Ebehireime</h2>
          <p style={{ color: "#B98A2F", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 19 }}>B.Sc. (Hons) Computer Science</p>
          <p style={{ color: "#6B4630", marginTop: 8 }}>Trinity University, Yaba</p>
          <div style={{ background: "#3F2413", color: "#FFFEFB", margin: "44px -12px -12px", padding: "28px 12px", borderRadius: 12 }}>
            <span style={{ color: "#E9D7A8", fontFamily: "Georgia, serif", fontStyle: "italic" }}>The ceremony begins in</span>
            <div style={{ display: "flex", justifyContent: "center", gap: "clamp(12px, 5vw, 48px)", marginTop: 16, flexWrap: "wrap" }}>
              {[["16", "OCT"], ["10:00", "AM"], ["2026", "YEAR"]].map(([n, label]) => <div key={label}><div style={{ color: "#B98A2F", fontFamily: "Georgia, serif", fontSize: "clamp(22px, 5vw, 38px)" }}>{n}</div><div style={{ color: "#E9D7A8", fontSize: 10, letterSpacing: ".12em" }}>{label}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 800, marginBottom: 78 }}>
        <span className="eyebrow">01 / The idea</span>
        <h2 className="section-title" style={{ marginTop: 18 }}>An invitation should make the important details easy to find.</h2>
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.9, marginTop: 24 }}>
          The goal was to create a personal, shareable invitation that felt more considered than a static flyer while keeping essential information clear. Guests can quickly check the date, time, venue, directions, and RSVP options from a single page.
        </p>
      </section>

      <section style={{ marginBottom: 78 }}>
        <span className="eyebrow">02 / Features</span>
        <h2 className="section-title" style={{ marginTop: 18, marginBottom: 30 }}>Small interactions, useful details.</h2>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-date"><Timer size={17} color="var(--accent)" style={{ display: "inline", marginRight: 8 }} />Live countdown</div><div className="timeline-content"><h3>Make the event feel closer</h3><p>A JavaScript countdown updates days, hours, minutes, and seconds until the scheduled ceremony time, then changes to an event-day message when the countdown finishes.</p></div></article>
          <article className="timeline-item"><div className="timeline-date"><MapPin size={17} color="var(--accent)" style={{ display: "inline", marginRight: 8 }} />Venue directions</div><div className="timeline-content"><h3>Help guests find the venue</h3><p>A direct Google Maps search link lets guests continue to directions without having to copy the address manually.</p></div></article>
          <article className="timeline-item"><div className="timeline-date"><UsersRound size={17} color="var(--accent)" style={{ display: "inline", marginRight: 8 }} />RSVP</div><div className="timeline-content"><h3>Make responses straightforward</h3><p>The invitation provides a phone contact and an external attendance-confirmation form so guests can respond from the page.</p></div></article>
          <article className="timeline-item"><div className="timeline-date"><CalendarDays size={17} color="var(--accent)" style={{ display: "inline", marginRight: 8 }} />Responsive layout</div><div className="timeline-content"><h3>Designed for sharing</h3><p>Fluid type sizing, flexible spacing, and a compact mobile layout help the invitation remain readable across screen sizes. Motion is limited when the visitor prefers reduced motion.</p></div></article>
        </div>
      </section>

      <section style={{ maxWidth: 800, marginBottom: 78 }}>
        <span className="eyebrow">03 / Visual direction</span>
        <h2 className="section-title" style={{ marginTop: 18 }}>A classic palette with a modern web feel.</h2>
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.9, marginTop: 24 }}>
          The design pairs warm ivory, deep brown, and gold with an editorial serif for the main headings and a clean sans-serif for supporting information. A framed invitation header, restrained borders, and clear section spacing keep the page celebratory without overwhelming the event details.
        </p>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div><span className="eyebrow">Try it yourself</span><p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>Open the live invitation or inspect the source code.</p></div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="button" href="https://convocation-invite-kappa.vercel.app/" target="_blank" rel="noreferrer">View live site <ArrowUpRight size={15} /></a>
          <a className="button secondary" href="https://github.com/tees-workshop/Convocation-Invite" target="_blank" rel="noreferrer">View source <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </main>
  );
}
