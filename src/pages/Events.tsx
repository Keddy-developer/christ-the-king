import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventsComponent from "@/components/Events";
import { Camera, Image, Video } from "lucide-react";

const gallery = [
    { url: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=400&h=300&auto=format&fit=crop", title: "Sunday Worship" },
    { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=400&h=300&auto=format&fit=crop", title: "Youth Hangout" },
    { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&h=300&auto=format&fit=crop", title: "Community Outreach" },
    { url: "https://images.unsplash.com/photo-1467307983825-619715426c70?q=80&w=400&h=300&auto=format&fit=crop", title: "Prayer Meeting" },
    { url: "https://images.unsplash.com/photo-1523580494863-6f30312248f5?q=80&w=400&h=300&auto=format&fit=crop", title: "Leadership Seminar" },
    { url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=400&h=300&auto=format&fit=crop", title: "Annual Picnic" },
];

const Events = () => {
    return (
        <div className="min-h-screen bg-background pt-20">
            <Header />

            {/* Page Hero */}
            <section className="bg-church-red py-20 text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold mb-4">Events & Calendar</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Stay up to date with everything happening at Christ The King Malindi.
                    </p>
                </div>
            </section>

            <EventsComponent />

            {/* Gallery Section */}
            <section className="py-24 bg-church-cream">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-church-red-light rounded-full mb-6">
                                <Camera className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Recent Highlights</span>
                            </div>
                            <h2 className="font-serif text-4xl font-bold text-foreground">Church Life in Pictures</h2>
                            <p className="text-muted-foreground mt-4">A glimpse into the joy and community we share during our gatherings and outreach events.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="p-3 bg-background rounded-xl shadow-card hover:bg-primary hover:text-primary-foreground transition-all">
                                <Image size={24} />
                            </button>
                            <button className="p-3 bg-background rounded-xl shadow-card hover:bg-primary hover:text-primary-foreground transition-all">
                                <Video size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {gallery.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-card">
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-serif text-xl font-bold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submit an Event Idea */}
            <section className="py-20 bg-background border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-serif text-3xl font-bold mb-6">Have an Idea for an Event?</h2>
                        <p className="text-muted-foreground mb-8">
                            We're always open to suggestions for new ways to build community and reach out to our neighbors.
                            Contact the church office or speak with one of the ministry leaders.
                        </p>
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl font-bold shadow-warm transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Events;
