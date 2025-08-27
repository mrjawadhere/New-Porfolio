import React, { useState, useEffect } from 'react';
import { Brain, Code, Zap } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { icon: Brain, text: "Initializing AI Systems" },
    { icon: Code, text: "Loading Neural Networks" },
    { icon: Zap, text: "Optimizing Performance" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        
        const newProgress = prev + Math.random() * 15;
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
        
        return Math.min(newProgress, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo/Brand */}
        <h1 className="text-4xl font-bold font-poppins text-gradient mb-8">
          Jawad Ahmad
        </h1>

        {/* Current Step */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
            {React.createElement(loadingSteps[currentStep].icon, {
              className: "w-8 h-8 text-white"
            })}
          </div>
          <p className="text-muted-foreground font-jetbrains text-sm">
            {loadingSteps[currentStep].text}...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent to-white/20"></div>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground font-jetbrains">
          {Math.round(progress)}% Complete
        </p>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;