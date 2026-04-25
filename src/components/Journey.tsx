import { motion } from 'framer-motion';

const Journey = () => {
  const milestones = [
    {
      year: 'Early 2025',
      title: 'Backend Foundation',
      description: 'Focused on Java fundamentals, OOP principles, and Data Structures & Algorithms',
      icon: '☕',
      color: 'from-peach-400 to-peach-600',
    },
    {
      year: 'Mid 2025',
      title: 'Spring Boot Learning',
      description: 'Explored Spring Boot framework, REST API development, and microservices architecture patterns',
      icon: '🌱',
      color: 'from-lavender-400 to-lavender-600',
    },
    {
      year: 'Late 2025',
      title: 'Building Projects',
      description: 'Built e-commerce backend system and complaint tracking application using Spring Boot and MySQL',
      icon: '🚀',
      color: 'from-peach-500 to-lavender-500',
    },
    {
      year: 'Current',
      title: 'Job Ready',
      description: 'Graduating with BCS degree, ready to contribute as a backend engineer',
      icon: '✨',
      color: 'from-lavender-500 to-peach-600',
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 reveal-section">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold mb-20 text-center bg-gradient-to-r from-warm-gray-800 via-peach-600 to-lavender-600 bg-clip-text text-transparent"
        >
          The Journey
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-peach-300 via-lavender-300 to-peach-300 hidden md:block" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className="flex-1 md:text-right md:pr-8 md:pl-0 pl-0">
                  <div
                    className={`backdrop-blur-sm bg-gradient-to-br ${
                      index % 2 === 0
                        ? 'from-white/80 to-peach-50/60 md:ml-auto'
                        : 'from-white/80 to-lavender-50/60 md:mr-auto'
                    } border border-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 max-w-md cursor-pointer group`}
                  >
                    <div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} text-white text-3xl mb-4 shadow-lg`}
                    >
                      {milestone.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-warm-gray-800 mb-2 group-hover:text-peach-600 transition-colors duration-200">
                      {milestone.title}
                    </h3>
                    <p className="text-warm-gray-600 leading-relaxed font-light">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Year marker */}
                <div className="relative z-10 flex-shrink-0 hidden md:block">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-peach-400 to-lavender-500 flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
