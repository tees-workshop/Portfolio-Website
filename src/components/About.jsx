import { motion } from "framer-motion";
import ProfilePic from "../assets/profile-pic.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen text-[#daf1de] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-12 overflow-hidden"
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="relative shrink-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#8eb69b] shadow-[0_0_25px_#8eb69b90]">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Optional glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#8eb69b30] blur-2xl"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
          delay: 0.12,
        }}
        viewport={{ once: true }}
        className="max-w-xl text-center md:text-left"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-merienda mb-6 text-[#8eb69b]"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed text-[#daf1de]/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
        >
          Hi! I’m <span className="text-[#8eb69b] font-semibold">Tehilah</span>, a passionate developer who
          loves blending elegant design with solid functionality. I’m all about
          building interactive, performance-focused web experiences that feel
          alive. When I’m not coding, I’m probably exploring new ideas, sketching
          UI concepts, or stargazing ✨.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8"
        >
          <button className="px-6 py-3 rounded-lg bg-[#163832] text-[#daf1de] font-bold hover:bg-[#235347] transition-all duration-300 shadow-md">
            View My Work
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
