import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/KULDEEP_PHOTO.jpeg";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full blur-3xl animate-floating" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-secondary-accent/20 to-accent/20 rounded-full blur-3xl floating-delayed" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-floating" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Hey there! I am</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">Kuldeep Patidar</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Passionate about building <span className="text-primary font-semibold">scalable</span> and <span className="text-accent font-semibold">impactful</span> tech solutions
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Final-year B.Tech student in Electronics & Electrical Engineering at IIT Guwahati, 
              with expertise in full-stack development, machine learning, and problem-solving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-6"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className="text-lg px-8 py-6"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-floating" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-accent rounded-full floating-delayed" />
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-secondary-accent rounded-full animate-floating" />
              
              {/* Profile picture with glassmorphism frame */}
              <div className="relative glass-card p-4 rounded-3xl hover-lift">
                <img
                  src={profileImage}
                  alt="Kuldeep Patidar"
                  className="w-80 h-96 md:w-96 md:h-[28rem] object-cover rounded-2xl"
                />
                
                {/* Floating skill tags */}
                <div className="absolute -top-6 left-8 glass-card px-3 py-1 rounded-full text-sm font-medium text-primary">
                  React.js
                </div>
                <div className="absolute top-12 -right-8 glass-card px-3 py-1 rounded-full text-sm font-medium text-accent">
                  Node.js
                </div>
                <div className="absolute bottom-8 -left-6 glass-card px-3 py-1 rounded-full text-sm font-medium text-secondary-accent">
                  ML
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}