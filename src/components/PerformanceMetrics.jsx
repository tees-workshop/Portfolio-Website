import { motion } from 'framer-motion';

const Metric = ({ label, value }) => (
  <div className="bg-[#163832] p-4 rounded-lg text-center">
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="text-2xl font-bold text-[#8eb69b]">{value}</div>
      <div className="text-sm text-[#daf1de]">{label}</div>
    </motion.div>
  </div>
);

const PerformanceMetrics = () => {
  const metrics = [
    { label: 'Projects Completed', value: '24' },
    { label: 'Years Experience', value: '4+' },
    { label: 'Performance Score', value: 'A' },
  ];

  return (
    <section id="metrics" className="py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <Metric key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </section>
  );
};

export default PerformanceMetrics;
