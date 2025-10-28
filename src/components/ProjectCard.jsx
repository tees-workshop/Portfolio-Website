import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ translateY: -6 }}
      className="bg-[#0b2b26] rounded-xl p-4 shadow-sm flex flex-col justify-between"
    >
      <div>
        <h4 className="text-[#daf1de] font-semibold text-lg mb-2">{project.title}</h4>
        <p className="text-sm text-[#8eb69b] mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-[#163832] rounded-full text-[#8eb69b]">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-[#8eb69b]">{project.year}</div>
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a href={project.liveUrl} className="text-xs px-3 py-1 rounded-md bg-[#8eb69b] text-[#0b2b26] font-semibold">Live</a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} className="text-xs px-3 py-1 rounded-md border border-[#8eb69b] text-[#8eb69b]">Code</a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
