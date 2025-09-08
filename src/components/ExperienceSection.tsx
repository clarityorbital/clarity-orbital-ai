import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Satellite, Telescope, Shield } from "lucide-react";

const missions = [
  {
    icon: Satellite,
    title: "NASA PACE Mission",
    description: "Plankton, Aerosol, Cloud, ocean Ecosystem mission providing critical Earth observation data.",
    technologies: ["Data Processing", "AI Analytics", "Cloud Systems"],
    status: "Active",
  },
  {
    icon: Shield,
    title: "OPIR II Space Force",
    description: "Overhead Persistent Infrared satellite constellation for missile warning and defense.",
    technologies: ["Infrared Processing", "Real-time Analytics", "Security Systems"],
    status: "Deployed",
  },
  {
    icon: Telescope,
    title: "Nancy Grace Roman Space Telescope",
    description: "Next-generation space telescope for dark energy and exoplanet research.",
    technologies: ["Image Processing", "Deep Learning", "Astronomical Data"],
    status: "In Development",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proven <span className="bg-gradient-primary bg-clip-text text-transparent">Space Heritage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team brings deep expertise from major NASA flagship missions and Space Force programs, 
            delivering mission-critical software and AI solutions for the most demanding space applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <mission.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {mission.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-card-foreground">{mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {mission.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {mission.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">20+ years</span> of combined experience in space missions • 
            <span className="text-primary font-semibold"> Mission-critical</span> software development • 
            <span className="text-primary font-semibold"> Advanced AI</span> and machine learning expertise
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;