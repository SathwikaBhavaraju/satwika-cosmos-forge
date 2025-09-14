import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import profileImage from "@/assets/satwika-profile.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Skills data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "cyan",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "purple",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 95 },
        { name: "Django", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "GraphQL", level: 80 },
        { name: "PostgreSQL", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      color: "pink",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 92 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 95 },
        { name: "Computer Vision", level: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "blue",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 82 },
        { name: "Terraform", level: 70 },
        { name: "MongoDB", level: 85 }
      ]
    }
  ];

  const tools = [
    "Git", "VS Code", "Figma", "Postman", "Jupyter", "Linux", 
    "Firebase", "Vercel", "Netlify", "Supabase", "Prisma", "Redis"
  ];

  // Projects data
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

  // About data
  const highlights = [
    "Full Stack Development",
    "Machine Learning",
    "Cloud Computing",
    "DevOps",
    "Data Science",
    "AI Research"
  ];

  // Contact data
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-neon-cyan"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-neon-blue"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:satwika@example.com",
      color: "hover:text-neon-purple"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "satwika@example.com",
      href: "mailto:satwika@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null
    }
  ];

  const getGlowClass = (color: string) => {
    const glowMap: Record<string, string> = {
      cyan: "glow-cyan",
      purple: "glow-purple", 
      pink: "glow-pink",
      blue: "hover:glow-cyan"
    };
    return glowMap[color] || "glow-cyan";
  };

  const getTextGlowClass = (color: string) => {
    const textGlowMap: Record<string, string> = {
      cyan: "text-glow-cyan",
      purple: "text-glow-purple",
      pink: "text-glow-pink", 
      blue: "text-glow-cyan"
    };
    return textGlowMap[color] || "text-glow-cyan";
  };

  const getStatusColor = (status: string) => {
    return status === "Live" ? "text-green-400" : "text-yellow-400";
  };

  return (
    <div className="space-y-32">
      {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-glow-cyan animate-text-shimmer">Hi, I'm</span>
                <br />
                <span className="text-glow-purple">Satwika</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground space-y-2">
                <p className="text-glow-cyan">Full Stack Developer</p>
                <p className="text-glow-purple">& Machine Learning Engineer</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionate about creating innovative solutions that bridge the gap between 
              cutting-edge technology and real-world applications. Specializing in modern 
              web development and AI/ML implementations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" size="lg" className="glow-cyan hover-lift">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="hover-glow">
                <a href="#resume">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:satwika@example.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover-glow hover-lift transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <GlassCard className="relative p-8 hover-lift animate-pulse-glow">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-neon rounded-full blur-2xl opacity-20 animate-pulse" />
                <img
                  src={profileImage}
                  alt="Satwika - Full Stack & ML Developer"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-glass-border/30"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center glass">
                  <span className="text-xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center glass">
                  <span className="text-xl">🚀</span>
                </div>
                <div className="absolute top-1/4 -left-8 w-8 h-8 bg-neon-pink/20 rounded-full flex items-center justify-center glass">
                  <span className="text-sm">💻</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-glass-border/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-glow-purple mb-4">
              🌌 About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Exploring the intersection of technology and innovation
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio Section */}
            <GlassCard className="space-y-6 hover-lift">
              <h2 className="text-2xl font-bold text-glow-cyan mb-4">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer and Machine Learning Engineer 
                  with a deep love for creating innovative solutions that make a real impact. 
                  My journey in technology began with curiosity and has evolved into a 
                  career focused on building scalable applications and intelligent systems.
                </p>
                <p>
                  With expertise spanning modern web technologies and cutting-edge AI/ML 
                  frameworks, I bridge the gap between complex algorithms and user-friendly 
                  interfaces. I believe in the power of technology to solve real-world 
                  problems and create meaningful experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  contributing to open-source projects, or sharing knowledge through 
                  technical blogs and community meetups.
                </p>
              </div>
            </GlassCard>

            {/* Expertise Section */}
            <GlassCard className="space-y-6 hover-lift">
              <h2 className="text-2xl font-bold text-glow-cyan mb-4">Expertise</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Areas of Focus
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {highlights.map((highlight, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="glass hover-glow transition-all duration-300"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💻</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Full Stack Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Building end-to-end applications with modern frameworks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Machine Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        Developing intelligent systems and predictive models
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">☁️</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Cloud Solutions</h4>
                      <p className="text-sm text-muted-foreground">
                        Deploying scalable applications on cloud platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Philosophy Section */}
          <GlassCard className="mt-12 text-center hover-lift">
            <h2 className="text-2xl font-bold text-glow-purple mb-4">My Philosophy</h2>
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
              "Technology is not just about writing code; it's about solving problems, 
              creating opportunities, and building a better future. Every line of code 
              should serve a purpose, every algorithm should add value, and every 
              application should enhance human experience."
            </blockquote>
          </GlassCard>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-glow-cyan mb-4">
              ⚡ Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I use to build amazing experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <GlassCard 
                key={category.title} 
                className={`space-y-6 hover-lift ${getGlowClass(category.color)}`}
                variant="hover"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className={`text-xl font-bold ${getTextGlowClass(category.color)}`}>
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r transition-all duration-1000 ease-out ${
                            category.color === 'cyan' ? 'from-neon-cyan to-neon-blue' :
                            category.color === 'purple' ? 'from-neon-purple to-neon-pink' :
                            category.color === 'pink' ? 'from-neon-pink to-neon-purple' :
                            'from-neon-blue to-neon-cyan'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Tools & Technologies */}
          <GlassCard className="hover-lift">
            <h2 className="text-2xl font-bold text-glow-purple mb-6 text-center">
              🛠️ Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={tool}
                  variant="outline" 
                  className="glass hover-glow transition-all duration-300 text-sm py-2 px-4"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </GlassCard>

          {/* Certifications or Learning */}
          <div className="mt-12 text-center">
            <GlassCard className="hover-lift">
              <h2 className="text-2xl font-bold text-glow-cyan mb-4">
                🎓 Continuous Learning
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I believe in staying current with the latest technologies and best practices. 
                Currently exploring WebAssembly, advanced AI/ML models, and emerging web 
                technologies to deliver cutting-edge solutions.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen px-4 py-20">
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
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <GlassCard className="hover-lift max-w-md mx-auto">
            <div className="text-6xl mb-6">📖</div>
            <h1 className="text-4xl font-bold text-glow-cyan mb-4">Blog</h1>
            <p className="text-muted-foreground mb-6">
              Technical insights and thoughts on the latest in web development and machine learning
            </p>
            <Badge variant="outline" className="glass">Coming Soon...</Badge>
          </GlassCard>
        </div>
      </section>

      {/* RESUME SECTION */}
      <section id="resume" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <GlassCard className="hover-lift max-w-md mx-auto">
            <div className="text-6xl mb-6">📄</div>
            <h1 className="text-4xl font-bold text-glow-purple mb-4">Resume</h1>
            <p className="text-muted-foreground mb-6">
              Download my comprehensive resume showcasing my experience and achievements
            </p>
            <Button size="lg" className="glow-cyan hover-lift">
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
          </GlassCard>
        </div>
      </section>

      {/* INTERNSHIPS SECTION */}
      <section id="internships" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <GlassCard className="hover-lift max-w-md mx-auto">
            <div className="text-6xl mb-6">💼</div>
            <h1 className="text-4xl font-bold text-glow-cyan mb-4">Internships</h1>
            <p className="text-muted-foreground mb-6">
              Professional experience and internships that shaped my career journey
            </p>
            <Badge variant="outline" className="glass">Coming Soon...</Badge>
          </GlassCard>
        </div>
      </section>

      {/* ACE CLUB SECTION */}
      <section id="ace-club" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <GlassCard className="hover-lift max-w-md mx-auto">
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-4xl font-bold text-glow-purple mb-4">ACE Club EBM</h1>
            <p className="text-muted-foreground mb-6">
              Executive Board Member activities and contributions to the Association of Computer Engineers Club
            </p>
            <Badge variant="outline" className="glass">Coming Soon...</Badge>
          </GlassCard>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-glow-purple mb-4">
              ✉️ Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on something amazing? Let's talk!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassCard className="space-y-6 hover-lift">
              <h2 className="text-2xl font-bold text-glow-cyan mb-4">
                Send me a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass border-glass-border/30 focus:border-primary transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass border-glass-border/30 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass border-glass-border/30 focus:border-primary transition-colors"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-glass-border/30 focus:border-primary transition-colors min-h-[120px]"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full glow-cyan hover-lift text-lg py-6"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </GlassCard>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <GlassCard className="space-y-6 hover-lift">
                <h2 className="text-2xl font-bold text-glow-cyan mb-4">
                  Get in touch
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center glow-purple">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Social Links */}
              <GlassCard className="hover-lift">
                <h2 className="text-2xl font-bold text-glow-purple mb-6">
                  Follow me
                </h2>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 rounded-full glass flex items-center justify-center hover-lift glow-cyan transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </GlassCard>

              {/* Availability */}
              <GlassCard className="hover-lift">
                <h2 className="text-2xl font-bold text-glow-cyan mb-4">
                  Availability
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-foreground">Available for freelance work</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-foreground">Open to full-time opportunities</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;