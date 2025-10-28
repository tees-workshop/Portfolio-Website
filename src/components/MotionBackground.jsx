const MotionBackground = () => {
  // Decorative layered SVG waves. Keep the container behind page content (z-0).
  // More layers (including smaller ripples) added so the background feels richer.
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#07221f" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0b2b26" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#163832" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8eb69b" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Large smooth waves */}
        <g className="wave-anim-1" style={{ transformOrigin: '50% 50%' }}>
          <path fill="url(#g1)" d="M0,140 C180,180 360,100 540,140 C720,180 900,100 1080,140 C1260,180 1440,140 1440,140 L1440,420 L0,420 Z" />
        </g>

        <g className="wave-anim-2" style={{ transformOrigin: '50% 50%' }}>
          <path fill="url(#g2)" d="M0,180 C180,140 360,200 540,180 C720,160 900,220 1080,180 C1260,140 1440,180 1440,180 L1440,420 L0,420 Z" />
        </g>

        <g className="wave-anim-3" style={{ transformOrigin: '50% 50%' }}>
          <path fill="#0b2b26" opacity="0.28" d="M0,220 C180,260 360,200 540,220 C720,240 900,180 1080,220 C1260,260 1440,220 1440,220 L1440,420 L0,420 Z" />
        </g>

        {/* Medium ripples */}
        <g className="wave-anim-4" style={{ transformOrigin: '50% 50%' }}>
          <path fill="#07221f" opacity="0.12" d="M0,100 C120,120 240,80 360,100 C480,120 600,80 720,100 C840,120 960,80 1080,100 C1200,120 1320,100 1440,100 L1440,420 L0,420 Z" />
        </g>

        <g className="wave-anim-5" style={{ transformOrigin: '50% 50%' }}>
          <path fill="#0b2b26" opacity="0.08" d="M0,60 C80,80 160,40 240,60 C320,80 400,40 480,60 C560,80 640,40 720,60 C800,80 880,40 960,60 C1040,80 1120,60 1200,60 C1280,60 1360,60 1440,60 L1440,420 L0,420 Z" />
        </g>

        {/* Small scattered ripples for texture */}
        <g className="wave-anim-small" style={{ transformOrigin: '50% 50%' }}>
          <circle cx="180" cy="90" r="10" fill="#163832" opacity="0.16" />
          <circle cx="320" cy="120" r="6" fill="#8eb69b" opacity="0.07" />
          <circle cx="520" cy="70" r="8" fill="#0b2b26" opacity="0.12" />
          <circle cx="760" cy="110" r="5" fill="#163832" opacity="0.08" />
          <circle cx="1040" cy="95" r="7" fill="#8eb69b" opacity="0.06" />
          <circle cx="1260" cy="130" r="6" fill="#0b2b26" opacity="0.08" />
        </g>
      </svg>
    </div>
  );
};

export default MotionBackground;
