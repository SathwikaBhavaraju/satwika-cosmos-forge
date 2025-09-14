import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
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

  return (
    <section className="min-h-screen px-4 py-20">
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
  );
};