import { useState, useMemo } from 'react';
import projectsData from '../data/projects';
import ProjectCard from './ProjectCard';

const uniqueTechs = (items) => {
  const s = new Set();
  items.forEach((p) => p.tech.forEach((t) => s.add(t)));
  return Array.from(s);
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const techs = useMemo(() => ['All', ...uniqueTechs(projectsData)], []);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter((p) => p.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-merienda text-[#8eb69b] mb-6">Projects</h2>

        <div className="mb-6 flex flex-wrap gap-3">
          {techs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveFilter(t)}
              className={`px-3 py-1 rounded-full text-sm ${activeFilter === t ? 'bg-[#8eb69b] text-[#0b2b26]' : 'bg-[#0b2b26] text-[#8eb69b]'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
