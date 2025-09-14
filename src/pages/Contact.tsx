import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

  return (
    <section className="min-h-screen px-4 py-20">
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
  );
};