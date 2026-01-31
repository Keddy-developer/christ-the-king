import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      date: "Feb 2",
      month: "2025",
      title: "Sunday Worship Celebration",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for a powerful time of worship and an inspiring message.",
      type: "Weekly",
    },
    {
      date: "Feb 14",
      month: "2025",
      title: "Valentine's Couples Dinner",
      time: "6:00 PM",
      description: "A special evening celebrating love and marriage in Christ.",
      type: "Special",
    },
    {
      date: "Feb 21",
      month: "2025",
      title: "Youth Conference 2025",
      time: "10:00 AM - 4:00 PM",
      description: "A day of worship, teaching, and fellowship for young people.",
      type: "Conference",
    },
    {
      date: "Mar 1",
      month: "2025",
      title: "Community Outreach Day",
      time: "8:00 AM",
      description: "Serving our Malindi community with love and practical support.",
      type: "Outreach",
    },
  ];

  const announcements = [
    {
      title: "New Member Class",
      content: "Interested in becoming a member? Join our next class starting February 9th.",
    },
    {
      title: "Choir Auditions",
      content: "The worship team is looking for new voices. Auditions are open every Saturday.",
    },
    {
      title: "Building Fund Update",
      content: "We've reached 75% of our goal for the new sanctuary. Thank you for your generosity!",
    },
  ];

  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Events Column */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-church-red-light rounded-full mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Upcoming Events</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              What's <span className="text-gradient-red">Happening</span>
            </h2>

            <div className="space-y-4">
              {events.map((event) => (
                <div 
                  key={event.title}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5 flex gap-6 border border-border group"
                >
                  {/* Date Box */}
                  <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground">
                    <span className="text-2xl font-bold">{event.date.split(" ")[0]}</span>
                    <span className="text-xs uppercase tracking-wider opacity-80">{event.date.split(" ")[1]}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-church-warm text-xs font-medium text-foreground rounded">
                        {event.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{event.time}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex-shrink-0 flex items-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="outline"
              className="mt-8 border-2"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Announcements Column */}
          <div>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border sticky top-28">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                📢 Announcements
              </h3>
              
              <div className="space-y-6">
                {announcements.map((announcement, index) => (
                  <div 
                    key={announcement.title}
                    className={`pb-6 ${index < announcements.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <h4 className="font-semibold text-foreground mb-2">{announcement.title}</h4>
                    <p className="text-sm text-muted-foreground">{announcement.content}</p>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
