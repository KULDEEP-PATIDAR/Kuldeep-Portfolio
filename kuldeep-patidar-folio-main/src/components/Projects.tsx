import { ExternalLink, Github, Database, Globe, Brain, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "HMC Election Portal",
      description: "A comprehensive digital voting system for IIT Guwahati with secure authentication and real-time results. Features include SSO integration, vote verification, and an intuitive admin dashboard.",
      icon: Globe,
      color: "text-primary",
      image: "🗳️",
      technologies: ["React.js", "Tailwind CSS", "SSO Integration", "Authentication"],
      features: ["Secure Voting", "Real-time Results", "Admin Dashboard", "Mobile Responsive"],
      status: "Completed",
      category: "Web Development"
    },
    {
      title: "Loan Application Predictor",
      description: "An intelligent machine learning model that predicts loan approval likelihood using advanced preprocessing and classification algorithms with high accuracy rates.",
      icon: Brain,
      color: "text-accent",
      image: "🏦",
      technologies: ["Python", "Scikit-learn", "Pandas", "Random Forest"],
      features: ["Data Preprocessing", "Feature Engineering", "Model Comparison", "Prediction API"],
      status: "Completed",
      category: "Machine Learning"
    },
    {
      title: "Mini URL Shortener",
      description: "A full-stack URL shortening service with analytics dashboard, click tracking, and custom short link generation. Built with modern web technologies.",
      icon: Database,
      color: "text-secondary-accent",
      image: "🔗",
      technologies: ["Node.js", "Express.js", "EJS", "MongoDB"],
      features: ["Custom URLs", "Click Analytics", "Dashboard", "API Access"],
      status: "Completed",
      category: "Full Stack"
    },
    {
      title: "Automatic Wiper System",
      description: "An IoT-based automotive solution that automatically activates wipers based on rainfall intensity using advanced sensor technology and microcontroller programming.",
      icon: Zap,
      color: "text-primary",
      image: "🚗",
      technologies: ["Arduino", "Sensors", "C++", "Hardware Integration"],
      features: ["Rain Detection", "Auto Activation", "Intensity Control", "Energy Efficient"],
      status: "Completed",
      category: "IoT & Hardware"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-1/3 left-20 w-96 h-96 bg-gradient-to-br from-accent/10 to-secondary-accent/10 rounded-full blur-3xl floating-delayed" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities across different domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title}
                className="glass-card hover-lift border-0 group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="mt-1">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {project.image}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="default" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="text-center">
          <Card className="glass-card border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Project Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Code Commits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Domains</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}