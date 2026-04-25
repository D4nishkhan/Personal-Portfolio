import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Backend System',
      tagline: 'Microservices Architecture at Scale',
      problem: 'E-commerce platforms struggle with monolithic architectures that become bottlenecks during high traffic. Need independent scaling of product catalog, orders, and authentication.',
      solution: 'Designed a microservices ecosystem where each service (Product, Auth, Order) operates independently. Used Spring Boot with REST APIs for inter-service communication and MySQL for data persistence.',
      complexity: 'Implemented API Gateway pattern for unified access, handled distributed transactions across services, and ensured data consistency with proper event-driven patterns.',
      tech: ['Spring Boot', 'Microservices', 'REST APIs', 'MySQL', 'API Gateway'],
      highlights: [
        'Independent service deployment without downtime',
        'RESTful API design with proper HTTP status codes',
        'JWT-based authentication with role-based access control',
        'Optimized N+1 query problems with eager loading',
      ],
      color: 'from-peach-400 to-peach-600',
      icon: '🛒',
    },
    {
      title: 'Complaint Tracking System',
      tagline: 'Streamlined Issue Management',
      problem: 'Customer support teams lost track of complaints across email, phone, and chat. No centralized system for tracking resolution times or escalation paths.',
      solution: 'Built a centralized Spring Boot application with priority-based queue management. Implemented status workflows (Open → In Progress → Resolved) with automated notifications and SLA tracking.',
      complexity: 'Designed database schema for efficient querying of complaints by status, priority, and assignment. Implemented cron jobs for SLA breach alerts and integrated email notifications via JavaMail API.',
      tech: ['Spring Boot', 'MySQL', 'Java Mail API', 'Postman', 'Cron Scheduler'],
      highlights: [
        'Priority-based auto-assignment to support agents',
        'Real-time dashboard showing SLA compliance metrics',
        'Email notifications for status changes and escalations',
        'Comprehensive REST API tested with 50+ Postman scenarios',
      ],
      color: 'from-lavender-400 to-lavender-600',
      icon: '📋',
    },
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
            Real Projects, Real Impact
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto font-light">
            Backend systems I've built: from problem to production-ready solution
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                layout
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                className="backdrop-blur-sm bg-gradient-to-br from-white/90 to-white/50 border border-white/80 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer overflow-hidden group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-warm-gray-800 group-hover:text-peach-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-warm-gray-600 mt-1 font-light">{project.tagline}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedProject === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-warm-gray-400"
                  >
                    ↓
                  </motion.div>
                </div>

                {/* Problem → Solution → Complexity */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-warm-gray-500 uppercase tracking-wide mb-1">
                      Problem
                    </h4>
                    <p className="text-base text-warm-gray-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-warm-gray-500 uppercase tracking-wide mb-1">
                      Solution
                    </h4>
                    <p className="text-base text-warm-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-warm-gray-500 uppercase tracking-wide mb-1">
                      Backend Logic
                    </h4>
                    <p className="text-base text-warm-gray-700 leading-relaxed">
                      {project.complexity}
                    </p>
                  </div>
                </div>

                {/* Tech stack tags */}
                <div className="mb-6">
                  <h5 className="text-xs font-semibold text-warm-gray-500 uppercase tracking-wide mb-2">
                    Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-warm-gray-800 border border-white/80 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-warm-gray-200">
                        <h4 className="text-xl font-display font-bold text-warm-gray-800 mb-4">What I Built</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1`}>
                                ✓
                              </div>
                              <span className="text-warm-gray-700">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-warm-gray-600 mb-6">
            These are just the beginning. More systems being crafted...
          </p>
          <div className="inline-flex items-center gap-2 text-peach-600 font-medium">
            <span>View on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
