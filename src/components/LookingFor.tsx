import { motion } from 'framer-motion';

const LookingFor = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 reveal-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-warm-gray-800">
            What I'm Looking For
          </h2>
          <p className="text-xl text-warm-gray-600 font-light">
            Backend engineering roles where I can grow and make an impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Technical Growth',
              description: 'Work with experienced engineers who can mentor me on distributed systems, cloud architecture, and advanced backend patterns.',
              icon: '📚',
            },
            {
              title: 'Real Impact',
              description: 'Build systems that serve real users at scale, not just features. I want to solve meaningful technical challenges.',
              icon: '🎯',
            },
            {
              title: 'Modern Stack',
              description: 'Teams using Spring Boot, microservices, cloud platforms (AWS/GCP), and modern development practices.',
              icon: '⚡',
            },
            {
              title: 'Product Focus',
              description: 'Companies that value engineering excellence and give engineers autonomy to design good solutions.',
              icon: '🚀',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-gradient-to-br from-white/80 to-white/50 border border-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-display font-bold text-warm-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-warm-gray-600 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-warm-gray-700 font-light">
            <span className="font-semibold">Core Skills:</span> Java • Spring Boot • Microservices • REST APIs • MySQL • System Design • Clean Code
          </p>
          <p className="text-base text-warm-gray-600 mt-2 font-light">
            <span className="font-semibold">Currently Learning:</span> Docker • Kubernetes • AWS • GraphQL
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LookingFor;
