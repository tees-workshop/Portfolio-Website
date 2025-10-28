const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-16 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white">© {new Date().getFullYear()} Tehilah. All rights reserved.</div>
        <div className="flex items-center gap-4">
          {/* Replace hrefs with your real links when ready */}
          <a href="#" className="text-white">GitHub (code)</a>
          <a href="#" className="text-white">Vercel (live)</a>
          <a href="#" className="text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
