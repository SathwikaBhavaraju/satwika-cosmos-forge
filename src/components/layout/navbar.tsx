import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GlassCard } from "../ui/glass-card";

const navItems = [
  { name: "Home", path: "#home", emoji: "🪐" },
  { name: "About", path: "#about", emoji: "🌌" },
  { name: "Skills", path: "#skills", emoji: "⚡" },
  { name: "Projects", path: "#projects", emoji: "🚀" },
  { name: "Blog", path: "#blog", emoji: "📖" },
  { name: "Resume", path: "#resume", emoji: "📄" },
  { name: "Internships", path: "#internships", emoji: "💼" },
  { name: "ACE Club", path: "#ace-club", emoji: "🎯" },
  { name: "Contact", path: "#contact", emoji: "✉️" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <GlassCard className="flex items-center justify-between px-6 py-4">
        {/* Logo & Name */}
        <a href="#home" onClick={handleNavClick} className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-neon flex items-center justify-center animate-pulse-glow">
            <span className="text-xl font-bold text-background">S</span>
          </div>
          <span className="text-xl font-bold text-glow-cyan animate-text-shimmer">
            Satwika
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={handleNavClick}
              className="px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:bg-muted/20"
            >
              <span>{item.emoji}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted/20 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </GlassCard>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <GlassCard className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={handleNavClick}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-muted/20"
              >
                <span className="text-lg">{item.emoji}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </GlassCard>
        </div>
      )}
    </nav>
  );
};