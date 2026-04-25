import { motion } from 'framer-motion';

const Hero = () => {
  const name = "Danish Khan";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Floating metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-8 left-8 md:top-16 md:left-16 text-sm text-warm-gray-600"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-peach-400" />
          <span className="font-medium">Available for opportunities</span>
        </div>
        <div className="text-xs text-warm-gray-500">Pune, Maharashtra</div>
      </motion.div>

      {/* Honest metrics - Focus on projects, not fake years */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16"
      >
        <div className="backdrop-blur-sm bg-gradient-to-br from-white/70 to-white/40 border border-white/80 rounded-2xl p-6 shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-warm-gray-800">2</div>
            <div className="text-xs text-warm-gray-600 mt-1 font-light">Production Projects</div>
          </div>
        </div>
      </motion.div>

      {/* Main content - CENTERED with proper max-width for readability */}
      <div className="w-full max-w-3xl mx-auto text-center">
        {/* Name - Display Font, Large & Bold with GRADIENT (coral to lavender) */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 bg-gradient-to-r from-[#E07A5F] to-[#C8B6E2] bg-clip-text text-transparent">
          {name}
        </h1>

        {/* Primary Statement - IMMEDIATELY VISIBLE, Strong Hierarchy */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-warm-gray-900 leading-snug mb-6">
          I build backend systems that handle real-world scale.
        </h2>
        
        {/* Role Badge */}
        <div className="inline-block backdrop-blur-sm bg-gradient-to-r from-peach-100/60 to-lavender-100/60 border border-white/80 rounded-full px-6 py-2 shadow-lg mb-8">
          <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-peach-700 to-lavender-700 bg-clip-text text-transparent">
            Java Backend Engineer • Spring Boot • Microservices
          </p>
        </div>

        {/* Supporting details - Sans-serif, Lighter Weight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-base md:text-lg text-warm-gray-600 leading-relaxed font-light">
            Specializing in Spring Boot microservices, REST APIs, and distributed system design. 
            I turn complex business requirements into scalable, maintainable backend architecture.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col items-center text-sm text-warm-gray-500"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-peach-400 to-transparent mb-2" />
          <span className="font-light">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
