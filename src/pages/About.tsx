import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const highlights = [
    "Full Stack Development",
    "Machine Learning",
    "Cloud Computing",
    "DevOps",
    "Data Science",
    "AI Research"
  ];

  return (
    <section className="min-h-screen px-4 py-20">
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
  );
};