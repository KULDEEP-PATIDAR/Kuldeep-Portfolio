import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kuldeep@example.com",
      href: "mailto:kuldeep@example.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXXXXXXX",
      href: "tel:+91XXXXXXXXXX",
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kuldeep",
      href: "https://github.com/kuldeep",
      color: "text-secondary-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kuldeep",
      href: "https://linkedin.com/in/kuldeep",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-gradient-to-br from-accent/10 to-secondary-accent/10 rounded-full blur-3xl floating-delayed" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, or just having 
                a chat about technology. Whether you're looking for a dedicated developer, have a 
                project idea, or want to collaborate, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={item.label}
                    className="glass-card hover-lift border-0 group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <a 
                        href={item.href}
                        className="flex items-center gap-4 text-inherit no-underline"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className={`p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">IIT Guwahati, Assam, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-0 animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Enter your name"
                      className="glass-card border-card-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="glass-card border-card-border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What's this about?"
                    className="glass-card border-card-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project or just say hi!"
                    rows={6}
                    className="glass-card border-card-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            Built with ❤️ by Kuldeep Patidar • © 2024 All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}