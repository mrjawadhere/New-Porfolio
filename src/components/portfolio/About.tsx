import { User, MapPin, Award, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/95 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Professional Photo */}
          <div className="relative group h-full">
            <div className="relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500 h-full">
              {/* Professional Photo - Optimized Height */}
              <div className="h-[500px] rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="/lovable-uploads/4d6ce769-2ee8-4762-a378-c21fc783dc2d.png" 
                  alt="Jawad Ahmad - AI Engineer & Automation Specialist"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                AI Engineer
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-foreground hover:scale-105 transition-transform duration-300">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed hover:scale-105 transition-transform duration-300">
                I'm a passionate AI Engineer specializing in intelligent automation and agent systems. 
                With expertise in cutting-edge technologies, I build fully-fledged AI agents and automations 
                that transform businesses. Open to collaboration on innovative AI projects.
              </p>
            </div>

            {/* Education Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-poppins text-foreground">Education</h3>
              </div>
              <div className="pl-11">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-foreground">B.S. in Software Engineering</h4>
                  <p className="text-primary font-medium">Government College University Faisalabad (GCUF)</p>
                  <p className="text-muted-foreground">Batch (2024-2028) • Specialized in AI, Machine Learning, and Software Architecture</p>
                  <div className="mt-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-primary font-medium">🤖 Building AI Agents & Fully-Fledged Automations</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;