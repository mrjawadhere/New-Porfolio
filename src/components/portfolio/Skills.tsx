import { 
  Brain, 
  Zap, 
  Server, 
  Code, 
  Database, 
  Cloud,
  Cpu,
  Network,
  Bot
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "RAG Systems", icon: Brain },
        { name: "OpenAI Agent SDK", icon: Bot },
        { name: "LangGraph/LangChain", icon: Network },
        { name: "MCP (Model Context Protocol)", icon: Cpu },
        { name: "TensorFlow", icon: Brain },
        { name: "PyTorch", icon: Brain },
        { name: "Computer Vision", icon: Brain },
        { name: "NLP", icon: Brain }
      ]
    },
    {
      title: "Automation & Integration",
      skills: [
        { name: "n8n AI Automation", icon: Zap },
        { name: "AI Agents & Automation", icon: Bot },
        { name: "Workflow Orchestration", icon: Network },
        { name: "API Integration", icon: Network },
        { name: "Process Automation", icon: Zap },
        { name: "Intelligent Chatbots", icon: Bot }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", icon: Code },
        { name: "FastAPI", icon: Server },
        { name: "RESTful APIs", icon: Network },
        { name: "Database Integration", icon: Database },
        { name: "Cloud & DevOps", icon: Cloud },
        { name: "Scalable Architecture", icon: Server }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl">
            Specialized in cutting-edge AI technologies and automation solutions that drive innovation.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              {/* Category Title */}
              <h3 className="text-2xl font-semibold font-poppins text-foreground">
                {category.title}
              </h3>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="mt-24 pt-16 border-t border-border/30">
          <div className="text-center">
            <h3 className="text-2xl font-semibold font-poppins text-foreground mb-4">
              Featured Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                "Python", "OpenAI", "LangChain", "FastAPI", "n8n", "TensorFlow", 
                "PyTorch", "MCP", "AI Agents", "RAG", "Automation"
              ].map((tech) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-card border border-border/50 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;