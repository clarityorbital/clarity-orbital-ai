import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, Database, Zap, Target, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & LLM Solutions",
    description: "Advanced artificial intelligence and large language models tailored for your engineering workflows and technical documentation.",
  },
  {
    icon: Database,
    title: "RAG Systems",
    description: "Retrieval-Augmented Generation systems that provide contextual, accurate knowledge from your technical repositories.",
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    description: "AI-driven tools to accelerate product development cycles and enhance engineering decision-making processes.",
  },
  {
    icon: Zap,
    title: "Production Enhancement",
    description: "Optimize manufacturing processes and quality control with intelligent automation and predictive analytics.",
  },
  {
    icon: Target,
    title: "Business Capture",
    description: "Leverage AI insights to identify opportunities, streamline proposals, and accelerate business development.",
  },
  {
    icon: TrendingUp,
    title: "Knowledge Systems",
    description: "Transform organizational knowledge into actionable intelligence for improved operational efficiency.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering engineering organizations with cutting-edge AI technologies 
            designed specifically for the space, electrical, optical, and infrared sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;