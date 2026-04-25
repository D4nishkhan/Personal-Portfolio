import { motion } from 'framer-motion';

const Footer = () => {
  const contactLinks = [
    { label: 'Email', value: 'danish@backend.dev', href: 'mailto:danish@backend.dev', icon: '📧' },
    { label: 'GitHub', value: 'github.com/danishkhan', href: 'https://github.com', icon: '💻' },
    { label: 'LinkedIn', value: 'linkedin.com/in/danishkhan', href: 'https://linkedin.com', icon: '🔗' },
  ];

  return (
    <footer className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-warm-gray-800 via-peach-600 to-lavender-600 bg-clip-text text-transparent">
              Let's build something scalable.
            </span>
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto mb-10 font-light">
            I'm looking for backend engineering opportunities where I can design scalable systems, 
            architect microservices, and solve challenging technical problems.
          </p>
          
          {/* CTA Button - MANDATORY */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="mailto:danish@backend.dev"
              className="px-10 py-5 bg-gradient-to-r from-peach-500 to-lavender-500 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/danishkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 backdrop-blur-sm bg-white/90 border-2 border-warm-gray-300 text-warm-gray-800 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              View GitHub
            </a>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-gradient-to-br from-white/90 to-white/50 border border-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <div className="text-4xl mb-3">
                {link.icon}
              </div>
              <div className="text-sm text-warm-gray-600 mb-1 font-light">{link.label}</div>
              <div className="text-lg font-display font-semibold text-warm-gray-800 group-hover:text-peach-600 transition-colors">
                {link.value}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-warm-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-warm-gray-600">
            <span className="font-semibold">Danish Khan</span>
            {' · '}
            Backend Architect
            {' · '}
            Pune, India
          </div>
          <div className="flex items-center gap-2 text-sm text-warm-gray-500">
            <span>Designed & Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-peach-500"
            >
              ❤️
            </motion.span>
            <span>in 2026</span>
          </div>
        </motion.div>

        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-peach-200/20 to-lavender-200/20 rounded-full blur-3xl -z-10" />
      </div>
    </footer>
  );
};

export default Footer;
