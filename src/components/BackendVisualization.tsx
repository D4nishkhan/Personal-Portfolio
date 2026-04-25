import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackendVisualization = () => {
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 3);
    }, 5000); // Slower interval for less CPU usage

    return () => clearInterval(interval);
  }, []);

  const microservices = [
    { name: 'API Gateway', color: 'peach', icon: '🚪', position: 'top-0 left-1/2 -translate-x-1/2', description: 'Entry point' },
    { name: 'Auth Service', color: 'lavender', icon: '🔐', position: 'top-32 left-8', description: 'JWT validation' },
    { name: 'Product Service', color: 'peach', icon: '📦', position: 'top-32 right-8', description: 'Catalog logic' },
    { name: 'Order Service', color: 'lavender', icon: '🛒', position: 'bottom-32 left-8', description: 'Order processing' },
    { name: 'MySQL Database', color: 'peach', icon: '💾', position: 'bottom-0 left-1/2 -translate-x-1/2', description: 'Data persistence' },
    { name: 'Redis Cache', color: 'lavender', icon: '⚡', position: 'bottom-32 right-8', description: 'Performance' },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 reveal-section overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-warm-gray-800 via-peach-600 to-lavender-600 bg-clip-text text-transparent">
            Inside My System
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto font-light">
            How backend services work: from API request to database response
          </p>
        </motion.div>

        {/* Visualization container */}
        <div className="relative">
          {/* Microservices Architecture */}
          <div className="relative h-[600px] mb-16">
            {/* Connection lines with animated data flow */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {/* Static connection lines */}
              <line x1="50%" y1="10%" x2="20%" y2="30%" stroke="#FFB89A" strokeWidth="2" opacity="0.2" />
              <line x1="50%" y1="10%" x2="80%" y2="30%" stroke="#C5B4E3" strokeWidth="2" opacity="0.2" />
              <line x1="20%" y1="30%" x2="50%" y2="90%" stroke="#FFB89A" strokeWidth="2" opacity="0.2" />
              <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="#C5B4E3" strokeWidth="2" opacity="0.2" />
              <line x1="20%" y1="70%" x2="50%" y2="90%" stroke="#FFB89A" strokeWidth="2" opacity="0.2" />
              <line x1="80%" y1="30%" x2="80%" y2="70%" stroke="#C5B4E3" strokeWidth="2" opacity="0.2" />
              
              {/* Animated data flow particles */}
              <motion.circle
                cx="50%"
                cy="10%"
                r="4"
                fill="#FFB89A"
                animate={{
                  cx: ["50%", "20%", "50%"],
                  cy: ["10%", "30%", "90%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.circle
                cx="50%"
                cy="10%"
                r="4"
                fill="#C5B4E3"
                animate={{
                  cx: ["50%", "80%", "20%", "50%"],
                  cy: ["10%", "30%", "70%", "90%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
              />
              <motion.circle
                cx="80%"
                cy="30%"
                r="4"
                fill="#FFB89A"
                animate={{
                  cx: ["80%", "80%"],
                  cy: ["30%", "70%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
              />
              
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB89A" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#C5B4E3" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>

            {/* Service nodes */}
            <div className="relative w-full h-full" style={{ zIndex: 2 }}>
              {microservices.map((service, idx) => (
                <motion.div
                  key={service.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={`absolute ${service.position}`}
                >
                  <div
                    className={`relative backdrop-blur-sm ${
                      service.color === 'peach'
                        ? 'bg-gradient-to-br from-peach-100/80 to-white/60'
                        : 'bg-gradient-to-br from-lavender-100/80 to-white/60'
                    } border border-white/80 rounded-2xl p-6 shadow-xl cursor-pointer`}
                  >
                    {/* Service icon */}
                    <div className="text-4xl mb-2 text-center">{service.icon}</div>
                    
                    {/* Service name */}
                    <div className="text-center">
                      <h4 className="text-sm font-bold text-warm-gray-800 whitespace-nowrap mb-1">
                        {service.name}
                      </h4>
                      <p className="text-xs text-warm-gray-600 font-light">
                        {service.description}
                      </p>
                    </div>

                    {/* Active pulse indicator - simplified */}
                    {activeFlow === idx % 3 && (
                      <div className={`absolute inset-0 rounded-2xl ${
                        service.color === 'peach'
                          ? 'bg-peach-400/10'
                          : 'bg-lavender-400/10'
                      }`} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* API Request Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-gradient-to-br from-white/80 to-white/40 border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-center text-warm-gray-800">
              API Request Flow (How I Build Systems)
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Request */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-peach-400 to-peach-600 flex items-center justify-center text-3xl shadow-lg">
                  📨
                </div>
                <h4 className="font-display font-bold text-lg mb-2 text-warm-gray-800">1. Request</h4>
                <p className="text-sm text-warm-gray-600 font-light mb-3">
                  Client sends HTTP request
                </p>
                <div className="text-xs text-warm-gray-500 bg-warm-gray-100 rounded-lg p-3 font-mono text-left">
                  POST /api/orders<br/>
                  Headers: JWT Token<br/>
                  Body: order data
                </div>
              </div>

              {/* Processing */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center text-3xl shadow-lg">
                  ⚙️
                </div>
                <h4 className="font-display font-bold text-lg mb-2 text-warm-gray-800">2. Backend Logic</h4>
                <p className="text-sm text-warm-gray-600 font-light mb-3">
                  Spring Boot processes
                </p>
                <div className="text-xs text-warm-gray-500 bg-warm-gray-100 rounded-lg p-3 font-mono text-left">
                  • Validate JWT<br/>
                  • Check business rules<br/>
                  • Query MySQL<br/>
                  • Build response
                </div>
              </div>

              {/* Response */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-peach-500 to-lavender-500 flex items-center justify-center text-3xl shadow-lg">
                  ✅
                </div>
                <h4 className="font-display font-bold text-lg mb-2 text-warm-gray-800">3. Response</h4>
                <p className="text-sm text-warm-gray-600 font-light mb-3">
                  JSON returned to client
                </p>
                <div className="text-xs text-warm-gray-500 bg-warm-gray-100 rounded-lg p-3 font-mono text-left">
                  Status: 201 Created<br/>
                  Body: &#123;order_id&#125;<br/>
                  Time: &lt;200ms
                </div>
              </div>
            </div>

            {/* Animated progress bar */}
            <div className="mt-8 relative h-2 bg-warm-gray-200/50 rounded-full overflow-hidden">
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-peach-500 via-lavender-500 to-peach-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackendVisualization;
