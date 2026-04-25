import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 reveal-section">
      <div className="max-w-6xl mx-auto">
        {/* Philosophical statement */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                My Approach:
                <br />
                <span className="bg-gradient-to-r from-peach-500 to-peach-700 bg-clip-text text-transparent">
                  Systems that scale,
                </span>
                <br />
                <span className="bg-gradient-to-r from-lavender-500 to-lavender-700 bg-clip-text text-transparent">
                  Code that evolves
                </span>
              </h3>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-warm-gray-600 leading-relaxed font-light"
            >
              Backend development is about orchestrating complexity behind simple interfaces. 
              I'm focused on building microservices that communicate seamlessly, designing APIs 
              with clean contracts, and structuring databases for performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-warm-gray-600 leading-relaxed font-light"
            >
              My learning focus: Spring Boot microservices, RESTful architecture, system design patterns, 
              and writing clean, maintainable code that can scale with business needs.
            </motion.p>
          </div>
        </div>

        {/* Core principles */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Clean Code', icon: '⚡' },
            { label: 'Scalability', icon: '📈' },
            { label: 'Performance', icon: '🚀' },
            { label: 'Reliability', icon: '🛡️' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-gradient-to-br from-white/80 to-white/50 border border-white/80 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-display font-bold text-warm-gray-800">{item.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
