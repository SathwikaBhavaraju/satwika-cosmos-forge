import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <GlassCard className="text-center space-y-6 hover-lift">
        <div className="text-8xl mb-4">🌌</div>
        <h1 className="text-6xl font-bold text-glow-purple">404</h1>
        <p className="text-xl text-muted-foreground">
          Lost in the digital cosmos
        </p>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist in this dimension.
        </p>
        <Button asChild variant="default" size="lg" className="glow-cyan hover-lift">
          <Link to="/">
            <Home className="mr-2 w-4 h-4" />
            Return to Home
          </Link>
        </Button>
      </GlassCard>
    </div>
  );
};

export default NotFound;
