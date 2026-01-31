import { Heart, Building, Users, BookOpen, CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Giving = () => {
  const projects = [
    {
      icon: Building,
      title: "New Sanctuary Project",
      description: "Help us build a larger worship space to accommodate our growing congregation.",
      progress: 75,
      goal: "KES 5,000,000",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Support our programs that feed, clothe, and care for the less fortunate in Malindi.",
      progress: 60,
      goal: "KES 500,000",
    },
    {
      icon: BookOpen,
      title: "Youth Education Fund",
      description: "Sponsor scholarships and educational materials for young people in our community.",
      progress: 45,
      goal: "KES 800,000",
    },
  ];

  return (
    <section id="give" className="py-24 bg-church-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-church-red-light rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Give & Support</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Partner With Us in <span className="text-gradient-red">Kingdom Work</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your generous giving enables us to spread the Gospel, serve our community, 
              and build God's kingdom. Every contribution, big or small, makes a difference 
              in transforming lives.
            </p>

            {/* Giving Methods */}
            <div className="bg-background rounded-2xl p-8 shadow-card mb-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Ways to Give</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-church-warm">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">M-Pesa</h4>
                    <p className="text-sm text-muted-foreground">Paybill: 123456 | Account: Your Name</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-church-warm">
                  <div className="w-10 h-10 bg-church-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Bank Transfer</h4>
                    <p className="text-sm text-muted-foreground">Equity Bank | Acc: 0123456789</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Give Online Now
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic">
              "Each of you should give what you have decided in your heart to give, 
              not reluctantly or under compulsion, for God loves a cheerful giver." 
              – 2 Corinthians 9:7
            </p>
          </div>

          {/* Right - Project Cards */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Project Giving
            </h3>
            
            <div className="space-y-6">
              {projects.map((project) => (
                <div 
                  key={project.title}
                  className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-church-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{project.progress}% funded</span>
                      <span className="font-semibold text-foreground">Goal: {project.goal}</span>
                    </div>
                    <div className="h-2 bg-church-warm rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Support This Project
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Giving;
