import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong" | "hover";
}

export const GlassCard = ({ 
  children, 
  className, 
  variant = "default" 
}: GlassCardProps) => {
  const baseClasses = "glass rounded-xl p-6 transition-all duration-300";
  
  const variantClasses = {
    default: "",
    strong: "glass-strong",
    hover: "hover-lift hover-glow cursor-pointer"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
};