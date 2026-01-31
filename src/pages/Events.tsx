import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventsComponent from "@/components/Events";
import {
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    Camera,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SubscriptionModal from "@/components/modals/SubscriptionModal";

const upcomingEvents = [
    {
        title: "Annual Youth Conference",
        date: "March 15-17, 2025",
        time: "8:00 AM - 5:00 PM",
        location: "Main Sanctuary",
        desc: "A life-changing 3-day experience for young people across the coast region."
    },
    {
        title: "Couples Dinner Night",
        date: "February 14, 2025",
        time: "6:00 PM - 9:00 PM",
        location: "Church Hall",
        desc: "Strengthening marriages through fellowship, food, and God's word."
    },
    {
        title: "Community Outreach",
        date: "February 22, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "Malindi Sub-county",
        desc: "Spreading love through medical camps and food distribution."
    }
];

const Events = () => {
    const [isSubModalOpen, setIsSubModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<string | undefined>(undefined);

    const handleReminderClick = (title: string) => {
        setSelectedEvent(title);
        setIsSubModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-background pt-20">
            <Header />

            {/* Page Hero */}
            <section className="bg-church-red py-20 text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold mb-4">Church Life & Events</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Be part of what God is doing. Join us in our upcoming gatherings and celebrations.
                    </p>
                </div>
            </section>

            <EventsComponent />

            {/* Featured Highlights */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="font-serif text-4xl font-bold mb-4">Upcoming Highlights</h2>
                            <p className="text-muted-foreground">Detailed view of what's coming soon to Christ The King Malindi.</p>
                        </div>
                        <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5">
                            View Calendar
                        </Button>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, idx) => (
                            <div key={idx} className="group bg-church-warm rounded-[2.5rem] p-8 border border-border hover:shadow-warm transition-all duration-500 overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <CalendarIcon size={120} />
                                </div>

                                <div className="relative z-10">
                                    <div className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-6">
                                        Featured Event
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{event.title}</h3>

                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <CalendarIcon size={16} className="text-primary" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <Clock size={16} className="text-primary" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <MapPin size={16} className="text-primary" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                                        {event.desc}
                                    </p>

                                    <Button
                                        variant="outline"
                                        className="w-full rounded-2xl border-primary/20 hover:bg-primary hover:text-primary-foreground group-hover:border-primary transition-all font-bold"
                                        onClick={() => handleReminderClick(event.title)}
                                    >
                                        Get Reminder
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Placeholder */}
            <section className="py-24 bg-church-cream">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto mb-16">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                            <Camera />
                        </div>
                        <h2 className="font-serif text-4xl font-bold mb-4">Capturing Church Moments</h2>
                        <p className="text-muted-foreground">A glimpse into our worship, fellowship, and community activities.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="aspect-square bg-background rounded-2xl border border-border overflow-hidden group relative">
                                <img
                                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400&h=400`}
                                    alt="Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <Button size="lg" className="bg-foreground text-background hover:bg-primary transition-colors font-bold rounded-2xl px-10">
                            Follow Us on Instagram <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
            <SubscriptionModal
                isOpen={isSubModalOpen}
                onOpenChange={setIsSubModalOpen}
                eventTitle={selectedEvent}
            />
        </div>
    );
};

export default Events;
