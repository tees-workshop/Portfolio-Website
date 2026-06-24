import { motion } from "framer-motion";

const HeroSection = () => {
  return (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden text-[#daf1de] px-6">
      
      {/* Background is provided by MotionBackground (site-wide) */}

      {/* 🌟 Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-merienda mb-3">
          Hi, I’m <span className="text-[#8eb69b]">Tehilah</span>
        </h1>
        <p className="text-lg md:text-xl text-[#daf1de]/90 font-light">
          Frontend Developer • Digital Marketer • Creative Coder • AI Tools Builder
        </p>
      </motion.div>

      {/* Bottom gradient fade for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#051f20] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
