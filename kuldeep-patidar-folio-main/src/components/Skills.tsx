import { Code2, Database, Brain, Server, Globe, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-primary",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
      description: "Building responsive and interactive user interfaces"
    },
    {
      title: "Backend Development", 
      icon: Server,
      color: "text-accent",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
      description: "Creating robust server-side applications"
    },
    {
      title: "Database Management",
      icon: Database,
      color: "text-secondary-accent",
      skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
      description: "Designing and managing efficient data storage"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "text-primary",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Data Analysis"],
      description: "Building intelligent data-driven solutions"
    },
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-accent",
      skills: ["C++", "Python", "JavaScript", "Problem Solving"],
      description: "Strong foundation in algorithmic thinking"
    },
    {
      title: "Core Areas",
      icon: Cpu,
      color: "text-secondary-accent",
      skills: ["Software Development", "Data Science", "System Design", "DSA"],
      description: "Comprehensive technical expertise"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="glass-card hover-lift border-0 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-hero group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Proficiency */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Proficiency Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Frontend", percentage: 90 },
              { label: "Backend", percentage: 85 },
              { label: "Database", percentage: 80 },
              { label: "ML/AI", percentage: 75 }
            ].map((item, index) => (
              <div key={item.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <svg className="transform -rotate-90 w-24 h-24">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-muted/20"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.percentage / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">{item.percentage}%</span>
                  </div>
                </div>
                <p className="font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}