import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-hero border-primary/20 shadow-glow">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Engineering Capabilities?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can bring clarity and innovation to your 
              space engineering projects. Our team is ready to create custom solutions 
              tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="secondary" className="border-primary/30 hover:border-primary/50">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Trusted by leading organizations in aerospace, defense, and space technology
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;