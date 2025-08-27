import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp AI ChatBot Fully Automated",
      description: "Advanced conversational AI chatbot for WhatsApp with full automation capabilities. Features intelligent message routing, RAG-based knowledge retrieval, and seamless integration with business systems using OpenAI Agent SDK.",
      technologies: ["OpenAI Agent SDK", "RAG", "n8n AI Automation", "Python", "FastAPI", "LangChain"],
      impact: "24/7 automated customer service",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "AI Agent for University Portal Automation",
      description: "Intelligent automation system for university management using OpenAI Agent SDK and n8n workflows. Streamlines student registration, course management, and administrative tasks with 85% efficiency improvement.",
      technologies: ["OpenAI Agent SDK", "n8n AI Automation", "Python", "FastAPI", "LangChain", "MCP"],
      impact: "Serves 5000+ students daily",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Jarvis AI Assistant", 
      description: "Advanced conversational AI assistant built with LangGraph and OpenAI Agent SDK. Features multi-modal interactions, task automation, and intelligent decision-making with 95% accuracy.",
      technologies: ["LangGraph", "OpenAI Agent SDK", "Python", "FastAPI", "Speech Recognition"],
      impact: "24/7 intelligent assistance",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Machine Learning Classification System",
      description: "Robust ML pipeline for multi-class classification using TensorFlow and PyTorch. Includes automated feature engineering, model optimization, and deployment infrastructure.",
      technologies: ["TensorFlow", "PyTorch", "Python", "Scikit-learn", "FastAPI", "Docker"],
      impact: "92% classification accuracy",
      demoLink: "#", 
      codeLink: "#"
    },
    {
      title: "Virtual Mouse Control System",
      description: "Computer vision-based gesture recognition system for hands-free computer control. Uses advanced CV algorithms for real-time hand tracking with sub-50ms response time.",
      technologies: ["OpenCV", "MediaPipe", "Python", "Computer Vision", "Gesture Recognition"],
      impact: "96% gesture recognition accuracy",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl">
            Showcasing innovative AI solutions that push the boundaries of automation and intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Impact Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-lg mb-6">
                    {project.impact}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted/30 text-muted-foreground text-sm rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <EnhancedButton 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-foreground border-foreground/20 hover:bg-foreground hover:text-background"
                  onClick={() => window.open(project.demoLink, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </EnhancedButton>
                <EnhancedButton 
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => window.open(project.codeLink, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </EnhancedButton>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-20 text-center">
          <EnhancedButton 
            variant="default" 
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            View All Projects
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;