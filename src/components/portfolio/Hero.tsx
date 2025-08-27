import { ArrowUpRight } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import TypingAnimation from '@/components/ui/typing-animation';
import NeuralNetwork from '@/components/ui/neural-network';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
      {/* Neural Network Background */}
      <NeuralNetwork />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" style={{ zIndex: 2 }} />

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 3 }}>
        <div className="flex items-center min-h-screen py-20">
          
          {/* Left Content - Positioned in corner */}
          <div className="flex-1 max-w-4xl">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md animate-fade-in shadow-lg">
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-sm"></div>
              <span className="text-sm font-inter text-primary font-semibold tracking-wide">AI ENGINEER & AUTOMATION SPECIALIST</span>
            </div>

            {/* Main Title with Better Positioning */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-foreground leading-tight tracking-tight hover:scale-105 transition-transform duration-300">
                <TypingAnimation 
                  text="Jawad Ahmad" 
                  speed={120} 
                  delay={500}
                  className="block"
                />
              </h1>
            </div>

            {/* Enhanced Skills Line */}
            <div className="mb-6">
              <p className="text-lg md:text-xl lg:text-2xl text-primary font-medium font-inter leading-relaxed hover:scale-105 transition-transform duration-300">
                <TypingAnimation 
                  text="AI Engineer • Python • FastAPI • n8n Automation • RAG Specialist" 
                  speed={60} 
                  delay={3500}
                />
              </p>
            </div>

            {/* Tech Logos */}
            <div className="mb-6 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '6s' }}>
              {[
                { name: 'Python', emoji: '🐍' },
                { name: 'n8n', emoji: '🔄' },
                { name: 'FastAPI', emoji: '⚡' },
                { name: 'LangGraph', emoji: '🕸️' },
                { name: 'AI', emoji: '🤖' }
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <span className="text-lg">{tech.emoji}</span>
                  <span className="text-sm font-medium text-primary">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Professional Description */}
            <div className="mb-8">
              <p className="text-base md:text-lg text-muted-foreground font-inter leading-relaxed max-w-2xl animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '7s' }}>
                Specializing in intelligent automation solutions using 
                <span className="text-primary font-medium"> OpenAI Agent SDK</span>, 
                <span className="text-primary font-medium"> MCP</span>, 
                <span className="text-primary font-medium"> LangGraph/LangChain</span>, 
                <span className="text-primary font-medium"> RAG Systems</span>, and cutting-edge AI technologies to transform business processes.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '7.5s' }}>
              <EnhancedButton 
                variant="default" 
                size="default"
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group px-6 py-3 text-base font-semibold"
              >
                <span className="flex items-center gap-2">
                  Explore My Work
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </EnhancedButton>
              <EnhancedButton 
                variant="outline" 
                size="default"
                onClick={() => window.open('https://www.linkedin.com/in/jawad-ahmad-10021a330/', '_blank')}
                className="border-2 border-primary/40 text-primary hover:bg-primary/15 backdrop-blur-md hover:scale-105 px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Talk
              </EnhancedButton>
            </div>
          </div>

          {/* Right Side - Enhanced Floating Elements */}
          <div className="hidden xl:flex flex-1 relative justify-center items-center h-full">
            <div className="relative w-full h-full max-w-md -ml-24">
              
              {/* Agentic Systems Card - Moved up and closer */}
              <div className="absolute -top-8 right-12 bg-card/90 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 max-w-xs animate-fade-in shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105" style={{ animationDelay: '8s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-xs text-muted-foreground font-semibold tracking-wide">FUTURE READY</span>
                </div>
                <p className="text-lg text-foreground font-bold mb-2">Agentic Systems for the Future.</p>
                <p className="text-xs text-muted-foreground">Powered by Advanced AI</p>
              </div>

              {/* Business Automation Card - Moved up and closer */}
              <div className="absolute top-24 right-20 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-xl border border-primary/40 rounded-2xl p-5 animate-fade-in shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ animationDelay: '8.5s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-sm"></div>
                  <span className="text-xs font-bold text-primary tracking-wider">AUTOMATION</span>
                </div>
                <p className="text-base text-foreground font-semibold mb-1">Automate Your Business.</p>
                <p className="text-xs text-muted-foreground">Add AI in Your Field</p>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-52 right-72 animate-pulse" style={{ animationDelay: '9s' }}>
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-lg">
                  <ArrowUpRight className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Additional Floating Element */}
              <div className="absolute top-96 right-4 animate-fade-in" style={{ animationDelay: '9.5s' }}>
                <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;