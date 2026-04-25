import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Journey from './components/Journey';
import TechEcosystem from './components/TechEcosystem';
import Projects from './components/Projects';
import NetworkBackground from './components/NetworkBackground';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import GradientBlobs from './components/GradientBlobs';
import BackendVisualization from './components/BackendVisualization';
import LookingFor from './components/LookingFor';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8],
    ['#FFF8F3', '#F8F4FF', '#FFF3F8', '#F5F5F0']
  );

  useEffect(() => {
    // Scroll-triggered animations
    gsap.utils.toArray('.reveal-section').forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Premium Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

      <motion.div 
        ref={containerRef}
        style={{ backgroundColor }}
        className="relative min-h-screen overflow-x-hidden"
      >
        {/* Animated Gradient Blobs Background */}
        <GradientBlobs />
        
        {/* Animated Network Background */}
        <NetworkBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Hero />
          <Philosophy />
          <Journey />
          <BackendVisualization />
          <TechEcosystem />
          <Projects />
          <LookingFor />
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default App;
