const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto bg-[#163832] p-8 rounded-2xl">
        <h2 className="text-2xl font-merienda text-[#8eb69b] mb-3">Contact</h2>
        <p className="text-[#daf1de] mb-4">I'm open to work and collaborations. Reach out via email or socials.</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="mailto:you@example.com" className="px-4 py-2 rounded-lg bg-[#8eb69b] text-[#0b2b26] font-semibold">Email Me</a>
          <a href="#" className="px-4 py-2 rounded-lg border border-[#8eb69b] text-[#8eb69b]">Schedule</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
