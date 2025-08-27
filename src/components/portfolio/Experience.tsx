import { Calendar, MapPin, Briefcase, ArrowUpRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "DeveloperHub",
      duration: "2025 - March-May",
      location: "Remote",
      description: "Leading AI automation initiatives and developing intelligent agent systems using cutting-edge technologies.",
      achievements: [
        "Developed AI-powered automation workflows using n8n and OpenAI Agent SDK",
        "Implemented LangGraph/LangChain solutions for complex multi-agent systems", 
        "Built scalable FastAPI backends for AI application integration",
      ],
      technologies: ["Python", "FastAPI", "Machine Learning", "Computer Vision", "TensorFlow", "PyTorch", "NLP"]
    },
    {
      title: "Freelance AI Developer", 
      company: "Independent",
      duration: "2025 - Present",
      location: "Faisalabad, Pakistan",
      description: "Delivering custom AI solutions and automation systems for diverse clients across various industries.",
      achievements: [
        "Delivered 5+ AI automation projects with 98% client satisfaction",
        "Specialized in university portal automation and academic system integration",
        "Built custom AI assistants using advanced LLM technologies",
        "Implemented computer vision solutions for client applications"
      ],
      technologies: ["Python","FastAPI","n8n Ai Automation","OpenAI Agent SDK", "LangGraph/LangChain", "MCP"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-foreground">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl">
            Building the future of AI automation with cutting-edge technologies and innovative solutions.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold font-poppins mb-4 text-foreground">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold font-poppins mb-4 text-foreground">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted/30 text-muted-foreground text-sm rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;