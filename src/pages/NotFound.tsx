import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <div className="text-8xl font-bold text-gradient mb-4">404</div>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
        </div>
        <h1 className="text-3xl font-bold font-poppins mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-neural transition-all duration-300 hover:scale-105"
        >
          Return to Portfolio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
