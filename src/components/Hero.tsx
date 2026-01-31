import { Button } from "@/components/ui/button";
import { ChevronDown, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-church-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Subtle Cross Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 0v28H0v4h28v28h4V32h28v-4H32V0h-4z' fill='%23DC2626' fill-opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-church-red-light rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Welcome to Our Church Family</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Experience God's{" "}
            <span className="text-gradient-red">Love</span>
            <br />
            Transform Your Life
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join us at Christ The King International Pentecostal Fellowship – Malindi,
            where faith meets community and every soul finds purpose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-warm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Plan Your Visit
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold px-8 py-6 text-lg group w-full sm:w-auto"
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                Watch Online
              </Button>
            </Link>
          </div>

          {/* Service Times Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { day: "Sunday", time: "9:00 AM & 11:00 AM", label: "Worship Service" },
              { day: "Wednesday", time: "6:30 PM", label: "Bible Study" },
              { day: "Friday", time: "7:00 PM", label: "Youth Fellowship" },
            ].map((service) => (
              <div
                key={service.day}
                className="bg-background/60 backdrop-blur-sm rounded-xl p-5 shadow-card border border-border/50 hover:shadow-soft transition-all duration-300"
              >
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">{service.day}</p>
                <p className="font-serif text-xl font-bold text-foreground mt-1">{service.time}</p>
                <p className="text-muted-foreground text-sm mt-1">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link to="/about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium uppercase tracking-widest">Discover More</span>
          <ChevronDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
