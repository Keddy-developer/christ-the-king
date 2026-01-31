import { Heart, Globe, Users, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We extend Christ's love to every person, embracing all with open hearts and caring hands.",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Our mission extends beyond Malindi, reaching communities worldwide with the message of hope.",
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "We are a family united in faith, supporting one another through life's journey.",
    },
    {
      icon: BookOpen,
      title: "Biblical Truth",
      description: "We stand firmly on God's Word, teaching and living by Scripture's timeless wisdom.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-church-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-church-red-light rounded-full mb-6">
              <span className="text-sm font-medium text-primary">About Our Church</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Place Where{" "}
              <span className="text-gradient-red">Faith Grows</span>
              {" "}& Lives Transform
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Christ The King International Pentecostal Fellowship – Malindi is more than a church; 
              we are a vibrant community of believers dedicated to serving God and transforming lives 
              through the power of the Holy Spirit.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Founded on the principles of love, faith, and service, our church welcomes people from 
              all walks of life. Whether you're seeking spiritual growth, community connection, or 
              simply a place to belong, you'll find a home with us. Our dynamic worship, powerful 
              teachings, and caring fellowship create an environment where everyone can encounter God's presence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "500+", label: "Church Family" },
                { number: "15+", label: "Years Serving" },
                { number: "12", label: "Ministries" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className={`bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 ${
                    index === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <div className="w-12 h-12 bg-church-red-light rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
