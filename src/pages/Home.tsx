import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/satwika-profile.jpg";

export const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
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
              <Link to="/projects">
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="hover-glow">
              <Link to="/resume">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Link>
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
  );
};