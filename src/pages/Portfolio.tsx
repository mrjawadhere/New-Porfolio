import { useState, useEffect } from 'react';
import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import LoadingScreen from '@/components/ui/loading-screen';
import ScrollProgress from '@/components/ui/scroll-progress';
import GlobalNeuralBg from '@/components/ui/global-neural-bg';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Smooth scroll behavior setup
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Global Neural Network Background - Enhanced */}
      <GlobalNeuralBg opacity={0.12} nodeCount={35} speed={0.25} />
      
      <ScrollProgress />
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;