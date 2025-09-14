import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Full-stack e-commerce platform with ML-based product recommendations, real-time inventory management, and advanced analytics dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "TensorFlow", "PostgreSQL", "AWS"],
      category: "Full Stack + ML",
      status: "Live",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Computer Vision Health Monitor",
      description: "Real-time health monitoring system using computer vision to analyze posture, detect fatigue, and provide wellness recommendations.",
      image: "🔬",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "WebRTC"],
      category: "Machine Learning",
      status: "In Development",
      github: "https://github.com",
      demo: null
    },
    {
      title: "Blockchain Task Management",
      description: "Decentralized task management system with smart contracts, cryptocurrency rewards, and collaborative workspace features.",
      image: "⛓️",
      technologies: ["Solidity", "React", "Web3.js", "IPFS", "Ethereum"],
      category: "Blockchain",
      status: "Live",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive data visualization platform with real-time streaming, custom chart builders, and collaborative reporting tools.",
      image: "📊",
      technologies: ["Vue.js", "D3.js", "Socket.io", "Redis", "Docker"],
      category: "Data Visualization",
      status: "Live",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "NLP Sentiment Analysis API",
      description: "Scalable sentiment analysis microservice with multi-language support, batch processing, and comprehensive API documentation.",
      image: "💭",
      technologies: ["Python", "BERT", "FastAPI", "Docker", "GCP"],
      category: "Natural Language Processing",
      status: "Live",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "AR Shopping Experience",
      description: "Augmented reality mobile app for virtual try-ons, 3D product visualization, and immersive shopping experiences.",
      image: "🥽",
      technologies: ["React Native", "ARKit", "Three.js", "Firebase", "Stripe"],
      category: "Mobile + AR",
      status: "In Development",
      github: "https://github.com",
      demo: null
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Live" ? "text-green-400" : "text-yellow-400";
  };

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-glow-cyan mb-4">
            🚀 Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            Innovative solutions at the intersection of technology and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard 
              key={project.title}
              className="group relative overflow-hidden hover-lift"
              variant="hover"
            >
              {/* Project Icon */}
              <div className="text-6xl mb-4 text-center">
                {project.image}
              </div>

              {/* Project Header */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs glass hover-glow transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 hover-glow"
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                
                {project.demo && (
                  <Button 
                    asChild 
                    size="sm" 
                    className="flex-1 glow-cyan"
                  >
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </GlassCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <GlassCard className="hover-lift">
            <h2 className="text-2xl font-bold text-glow-purple mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and explore new 
              technologies. Let's build something amazing together!
            </p>
            <Button 
              asChild 
              size="lg" 
              className="glow-cyan hover-lift"
            >
              <a href="/contact">
                Get In Touch
              </a>
            </Button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};