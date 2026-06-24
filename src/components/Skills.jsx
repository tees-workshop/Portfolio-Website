import { motion } from "framer-motion";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaBrain, FaSearch, FaPuzzlePiece, FaLightbulb } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { MdOutlineGroups2, MdTimer } from "react-icons/md";

const SkillTag = ({ icon: Icon, name, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className="group"
  >
    <div className="bg-[#0b2b26] p-4 rounded-xl flex items-center gap-4 transition-shadow duration-200 group-hover:shadow-[0_0_20px_#8eb69b30]">
      <Icon className="w-9 h-9 text-[#8eb69b] shrink-0" />
      <h4 className="text-[#daf1de] font-semibold">{name}</h4>
    </div>
  </motion.div>
);

const Skills = () => {
  const technicalSkills = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: FaReact, name: "React" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaGithub, name: "Git & GitHub" },
  ];

  const professionalSkills = [
    { icon: FaPuzzlePiece, name: "Problem Solving" },
    { icon: FaSearch, name: "Analytical Thinking" },
    { icon: FaBrain, name: "Quick Learning" },
    { icon: FaLightbulb, name: "Creative Solutions" },
    { icon: MdOutlineGroups2, name: "Team Collaboration" },
    { icon: MdTimer, name: "Time Management" },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 md:px-16 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left column - intro + summary */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="md:col-span-1 bg-[#163832] p-8 rounded-2xl">
          <h2 className="text-3xl font-merienda text-[#8eb69b] mb-3">Technical Arsenal</h2>
          <p className="text-[#daf1de]/85 mb-4">Tools, libraries and professional strengths I reach for when building products. I value clarity, performance and good UX.</p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-[#0b2b26] text-[#8eb69b] text-sm">Frontend</span>
            <span className="px-3 py-1 rounded-full bg-[#0b2b26] text-[#8eb69b] text-sm">Styling</span>
            <span className="px-3 py-1 rounded-full bg-[#0b2b26] text-[#8eb69b] text-sm">Versioning</span>
            <span className="px-3 py-1 rounded-full bg-[#0b2b26] text-[#8eb69b] text-sm">Tooling</span>
          </div>
        </motion.div>

        {/* Right columns - skills grid */}
        <div className="md:col-span-2">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technicalSkills.map((skill, i) => (
              <SkillTag key={skill.name} icon={skill.icon} name={skill.name} index={i} />
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} viewport={{ once: true }} className="mt-8">
            <h3 className="text-[#daf1de] font-semibold mb-4">Professional & Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {professionalSkills.map((s) => (
                <div key={s.name} className="px-4 py-2 bg-[#163832] rounded-full text-sm text-[#daf1de] flex items-center gap-2">
                  <s.icon className="w-4 h-4 text-[#8eb69b]" />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
