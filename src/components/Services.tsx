import { Clock, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      day: "Sunday",
      title: "Sunday Worship Service",
      times: ["9:00 AM - First Service", "11:00 AM - Second Service"],
      description: "Join us for powerful praise, worship, and an inspiring message from God's Word.",
      featured: true,
    },
    {
      day: "Wednesday",
      title: "Midweek Bible Study",
      times: ["6:30 PM"],
      description: "Dive deeper into Scripture with interactive teaching and group discussion.",
      featured: false,
    },
    {
      day: "Friday",
      title: "Youth Fellowship",
      times: ["7:00 PM"],
      description: "Dynamic gatherings for young people with worship, games, and relevant teachings.",
      featured: false,
    },
    {
      day: "Saturday",
      title: "Prayer Meeting",
      times: ["6:00 AM"],
      description: "Start your weekend with powerful intercessory prayer and spiritual renewal.",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-church-red-light rounded-full mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Service Times</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Us in <span className="text-gradient-red">Worship</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We gather throughout the week to worship, learn, and grow together. 
            Find a service that fits your schedule and come experience God's presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service) => (
            <div 
              key={service.day}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                service.featured 
                  ? 'bg-primary text-primary-foreground shadow-warm' 
                  : 'bg-card border border-border shadow-card hover:shadow-soft'
              }`}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${
                service.featured ? 'bg-primary-foreground/20' : 'bg-church-red-light'
              }`}>
                <Calendar className={`w-4 h-4 ${service.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                <span className={`text-sm font-medium ${service.featured ? 'text-primary-foreground' : 'text-primary'}`}>
                  {service.day}
                </span>
              </div>
              
              <h3 className={`font-serif text-2xl font-bold mb-3 ${
                service.featured ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {service.title}
              </h3>
              
              <div className="mb-4">
                {service.times.map((time) => (
                  <p key={time} className={`text-lg font-semibold ${
                    service.featured ? 'text-primary-foreground/90' : 'text-primary'
                  }`}>
                    {time}
                  </p>
                ))}
              </div>
              
              <p className={service.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Location Card */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-church-red-light rounded-full mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Location</span>
              </div>
              
              <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                Find Us in Malindi
              </h3>
              
              <p className="text-muted-foreground mb-6">
                We're located in the heart of Malindi, Kenya. Our doors are always open, 
                and we look forward to welcoming you to our church family.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Church Address</p>
                    <p className="text-muted-foreground">Malindi, Kilifi County, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Contact</p>
                    <p className="text-muted-foreground">+254 700 000 000</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-church-warm rounded-xl p-8 text-center">
              <p className="font-serif text-2xl font-bold text-foreground mb-4">
                "Come as you are"
              </p>
              <p className="text-muted-foreground mb-6">
                No matter your background or where you are in your faith journey, 
                there's a place for you here.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
