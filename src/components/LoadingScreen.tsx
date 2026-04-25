import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 800; // 0.8 seconds (very fast)
    const steps = 30;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onLoadingComplete, 300);
        }, 100);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#FFF8F3] via-[#F8F4FF] to-[#FFF3F8]"
        >

          {/* Loading content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-warm-gray-800 via-peach-600 to-lavender-600 bg-clip-text text-transparent">
                Danish Khan
              </h1>
              <p className="text-warm-gray-600 mb-8 font-light">Backend Architect</p>

              {/* Progress bar */}
              <div className="w-64 h-1 bg-white/60 rounded-full overflow-hidden backdrop-blur-sm mx-auto">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                  className="h-full bg-gradient-to-r from-peach-500 to-lavender-500 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/40 animate-pulse" />
                </motion.div>
              </div>

              {/* Loading percentage */}
              <motion.p
                className="text-sm text-warm-gray-500 mt-4 font-light"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
