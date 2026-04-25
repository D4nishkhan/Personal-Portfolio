import { motion } from 'framer-motion';
import { useState } from 'react';

const TechEcosystem = () => {
  const [, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: 'Java', category: 'Core', level: 95, color: 'peach' },
    { name: 'Spring Boot', category: 'Framework', level: 90, color: 'lavender' },
    { name: 'Microservices', category: 'Architecture', level: 85, color: 'peach' },
    { name: 'REST APIs', category: 'Integration', level: 90, color: 'lavender' },
    { name: 'MySQL', category: 'Database', level: 80, color: 'peach' },
    { name: 'System Design', category: 'Concept', level: 85, color: 'lavender' },
    { name: 'DSA', category: 'Foundation', level: 80, color: 'peach' },
    { name: 'Postman', category: 'Testing', level: 90, color: 'lavender' },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 reveal-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-warm-gray-800 via-peach-600 to-lavender-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto font-light">
            Technologies I use to build scalable, maintainable backend systems
          </p>
        </motion.div>

        {/* Interactive tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="group relative"
            >
              <div
                className={`backdrop-blur-sm ${
                  tech.color === 'peach'
                    ? 'bg-gradient-to-br from-peach-100/70 to-white/50'
                    : 'bg-gradient-to-br from-lavender-100/70 to-white/50'
                } border border-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer h-full group`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-display font-bold text-warm-gray-800 group-hover:text-peach-600 transition-colors">{tech.name}</h3>
                    <span className="text-xs text-warm-gray-500 bg-white/70 px-2 py-1 rounded-full font-light">
                      {tech.category}
                    </span>
                  </div>

                  {/* Level indicator */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-warm-gray-600">Proficiency</span>
                      <span className="text-sm font-semibold text-warm-gray-700">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          tech.color === 'peach'
                            ? 'bg-gradient-to-r from-peach-400 to-peach-600'
                            : 'bg-gradient-to-r from-lavender-400 to-lavender-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What I'm learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-gradient-to-br from-white/70 to-peach-50/30 border border-white/60 rounded-3xl p-12 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-peach-400 to-lavender-500 flex items-center justify-center text-2xl">
              🌱
            </div>
            <h3 className="text-3xl font-display font-bold text-warm-gray-800">Currently Learning</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-warm-gray-700">
              <span className="text-lg font-display font-semibold">Docker & Kubernetes</span>
              <p className="text-sm text-warm-gray-600 mt-1 font-light">Containerization and orchestration</p>
            </div>
            <div className="text-warm-gray-700">
              <span className="text-lg font-display font-semibold">AWS Cloud Services</span>
              <p className="text-sm text-warm-gray-600 mt-1 font-light">Cloud deployment and scaling</p>
            </div>
            <div className="text-warm-gray-700">
              <span className="text-lg font-display font-semibold">GraphQL</span>
              <p className="text-sm text-warm-gray-600 mt-1 font-light">Alternative to REST APIs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechEcosystem;
