import { Users, Baby, Music, Handshake, BookHeart, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Ministries = () => {
  const ministries = [
    {
      icon: Users,
      title: "Youth Fellowship",
      description: "Empowering young people to discover their purpose and grow in faith through dynamic programs, mentorship, and community.",
      color: "bg-primary",
    },
    {
      icon: Baby,
      title: "Children's Ministry",
      description: "Nurturing the next generation with age-appropriate Bible teaching, creative activities, and loving care.",
      color: "bg-church-gold",
    },
    {
      icon: Music,
      title: "Worship & Arts",
      description: "Leading the congregation in spirit-filled worship through music, dance, and creative expression.",
      color: "bg-primary",
    },
    {
      icon: Handshake,
      title: "Men's Ministry",
      description: "Building strong, godly men through fellowship, accountability, and leadership development.",
      color: "bg-church-gold",
    },
    {
      icon: BookHeart,
      title: "Women's Ministry",
      description: "Supporting women in their spiritual journey through Bible study, prayer groups, and sisterhood.",
      color: "bg-primary",
    },
    {
      icon: HeartHandshake,
      title: "Outreach & Missions",
      description: "Extending God's love to our community and beyond through charitable works and evangelism.",
      color: "bg-church-gold",
    },
  ];

  return (
    <section id="ministries" className="py-24 bg-church-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-church-red-light rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Ministries</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Your <span className="text-gradient-red">Place</span> to Serve
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We believe everyone has a unique calling. Discover the ministry where you can 
            use your gifts to make a difference and grow in your faith.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ministries.map((ministry) => (
            <div 
              key={ministry.title}
              className="bg-background rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 ${ministry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ministry.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {ministry.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
          >
            Join a Ministry
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
