import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education Card */}
          <Card className="glass-card hover-lift border-0 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-hero rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">B.Tech in Electronics & Electrical Engineering</p>
                    <p className="text-sm text-muted-foreground">Indian Institute of Technology Guwahati</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <p className="text-sm text-muted-foreground">Final Year Student (2021-2025)</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary-accent" />
                  <p className="text-sm text-muted-foreground">Guwahati, Assam, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold">My Journey</h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Final-year B.Tech student at IIT Guwahati, specializing in Electronics and Electrical Engineering. Skilled in full-stack development and machine learning, with experience building responsive web interfaces, robust backend systems, and end-to-end applications. Passionate about leveraging technology to solve real-world problems through clean, scalable, and efficient code, while continuously learning emerging technologies and best practices.
              </p>
              
              {/* <p>
                With a strong foundation in both <span className="text-accent font-semibold">frontend and backend development</span>, 
                I enjoy building end-to-end applications that solve real-world problems. My experience spans from creating 
                responsive web interfaces to developing robust server-side applications and implementing machine learning models.
              </p>
              
              <p>
                What drives me is the opportunity to leverage technology for meaningful impact. Whether it's streamlining 
                processes through web applications, analyzing data for insights, or solving complex algorithmic challenges, 
                I approach each project with <span className="text-primary font-semibold">enthusiasm and attention to detail</span>.
              </p> */}
              
              {/* <p>
                Beyond coding, I'm constantly learning about emerging technologies and best practices in software development. 
                I believe in writing clean, maintainable code and following industry standards to create solutions that are 
                not just functional, but also scalable and efficient.
              </p> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-accent">8+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}