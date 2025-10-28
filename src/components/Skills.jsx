import { motion } from "framer-motion";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaBrain, FaSearch, FaPuzzlePiece, FaLightbulb } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { MdOutlineGroups2, MdTimer } from "react-icons/md";

const SkillCard = ({ icon: Icon, name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    className="relative group"
  >
  <div className="bg-[#163832] p-6 rounded-2xl transform transition-transform duration-150 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_#8eb69b50]">
      <div className="absolute inset-0 bg-linear-to-br from-[#8eb69b20] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 mb-4">
        <Icon className="w-12 h-12 text-[#8eb69b]" />
      </div>

      <h3 className="text-[#daf1de] font-semibold text-lg mb-2 relative z-10">{name}</h3>

      <div className="h-1.5 bg-[#163832] rounded-full overflow-hidden relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.1, delay: index * 0.08 + 0.25 }}
          viewport={{ once: true }}
          className="h-full bg-[#8eb69b] rounded-full"
        />
      </div>

      <p className="text-[#8eb69b] text-sm mt-2 relative z-10">{level}% Proficiency</p>
    </div>
  </motion.div>
);

const Skills = () => {
  const technicalSkills = [
    { icon: FaHtml5, name: "HTML5", level: 85 },
    { icon: FaCss3Alt, name: "CSS3", level: 80 },
    { icon: FaReact, name: "React", level: 60 },
    { icon: SiJavascript, name: "JavaScript", level: 35 },
    { icon: SiTypescript, name: "TypeScript", level: 40 },
    { icon: SiTailwindcss, name: "Tailwind CSS", level: 85 },
    { icon: SiNextdotjs, name: "Next.js", level: 60 },
    { icon: FaGithub, name: "Git & GitHub", level: 80 },
  ];

  const professionalSkills = [
    { icon: FaPuzzlePiece, name: "Problem Solving", level: 85 },
    { icon: FaSearch, name: "Analytical Thinking", level: 80 },
    { icon: FaBrain, name: "Quick Learning", level: 90 },
    { icon: FaLightbulb, name: "Creative Solutions", level: 85 },
    { icon: MdOutlineGroups2, name: "Team Collaboration", level: 85 },
    { icon: MdTimer, name: "Time Management", level: 75 },
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
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalSkills.map((skill, i) => (
              <div key={skill.name} className="bg-[#0b2b26] p-4 rounded-xl flex items-center justify-between gap-4 hover:-translate-y-1.5 transform transition-transform duration-150">
                <div className="flex items-center gap-4">
                  <skill.icon className="w-10 h-10 text-[#8eb69b]" />
                  <div>
                    <h4 className="text-[#daf1de] font-semibold">{skill.name}</h4>
                    <p className="text-sm text-[#8eb69b]">{skill.level}%</p>
                  </div>
                </div>
                <div className="w-28 h-2 bg-[#163832] rounded-full overflow-hidden">
                  <div style={{ width: `${skill.level}%` }} className="h-full bg-[#8eb69b] rounded-full" />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} viewport={{ once: true }} className="mt-8">
            <h3 className="text-[#daf1de] font-semibold mb-4">Professional & Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {professionalSkills.map((s) => (
                <div key={s.name} className="px-3 py-2 bg-[#163832] rounded-lg text-sm text-[#daf1de] flex items-center justify-between">
                  <span>{s.name}</span>
                  <span className="text-[#8eb69b]">{s.level}%</span>
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
