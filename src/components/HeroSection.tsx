import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Satellite } from "lucide-react";
import clarityLogo from "@/assets/clarity-orbital-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-pulse delay-1500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center items-center">
            <img src={clarityLogo} alt="Clarity Orbital Inc. Logo" className="h-24 w-auto mb-4" />
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            AI-Powered Solutions
            <br />
            <span className="text-foreground">for Space Engineering</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Custom-tailored AI, LLM, and RAG solutions for engineering organizations in the 
            Electrical, Optical, and Infrared sectors. Delivering clarity and knowledge to 
            engineer products, enhance production lines, and capture new business.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group">
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary" className="border-primary/30 hover:border-primary/50">
              <Satellite className="mr-2 h-5 w-5" />
              Our NASA Experience
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">NASA PACE Mission</span>
            </div>
            <div className="flex items-center gap-2">
              <Satellite className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">OPIR II Space Force</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Nancy Grace Roman Telescope</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;