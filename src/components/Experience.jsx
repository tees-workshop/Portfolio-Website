const Experience = () => {
  const items = [
    {
      company: 'Elonatech Nigeria Limited',
      role: 'Front End Developer (Intern)',
      start: 'Jan 2025',
      end: 'Sep 2025',
      bullets: ['Worked on frontend features and UI polish', 'Collaborated with the development team on internal projects'],
    },
    {
      company: 'Elonatech Nigeria Limited',
      role: 'Digital Marketer',
      start: 'Feb 2025',
      end: 'Sep 2025',
      bullets: ['Managed social media accounts and email marketing campaigns ', 'Supported digital campaigns and analytics', 'Assisted with content and growth initiatives'],
    },
    // Removed other demo roles per request; only Elonatech entries remain.
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-merienda text-[#8eb69b] mb-6">Experience</h2>
        <div className="space-y-6">
          {items.map((it) => (
            <div key={it.company} className="bg-[#163832] p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-[#daf1de] font-semibold">{it.role}</h3>
                  <p className="text-sm text-[#8eb69b]">{it.company}</p>
                </div>
                <div className="text-sm text-[#8eb69b]">{it.start} — {it.end}</div>
              </div>
              <ul className="list-disc list-inside text-sm text-[#daf1de] opacity-90">
                {it.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
