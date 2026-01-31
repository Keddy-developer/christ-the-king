import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MinistriesComponent from "@/components/Ministries";
import { Handshake, Heart, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const additionalDepts = [
    { title: "Ushering & Protocol", lead: "Brother James L.", contact: "protocol@ctkpf-malindi.org" },
    { title: "Hospitality Team", lead: "Sister Martha K.", contact: "hospitality@ctkpf-malindi.org" },
    { title: "Media & Tech", lead: "Brother Kevin O.", contact: "media@ctkpf-malindi.org" },
    { title: "Intercessory Prayer", lead: "Elder Joseph M.", contact: "prayer@ctkpf-malindi.org" },
];

const Ministries = () => {
    return (
        <div className="min-h-screen bg-background pt-20">
            <Header />

            {/* Page Hero */}
            <section className="bg-church-red py-20 text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold mb-4">Our Ministries</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Discover where you belong and how you can serve in our vibrant church community.
                    </p>
                </div>
            </section>

            <MinistriesComponent />

            {/* Volunteer Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="font-serif text-4xl font-bold mb-8">Ready to Make an Impact?</h2>
                    <p className="text-lg text-muted-foreground mb-12">
                        Serving is one of the most fulfilling ways to grow in your faith and build relationships within the church.
                        We have several departments looking for passionate volunteers.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
                        {additionalDepts.map((dept) => (
                            <div key={dept.title} className="p-6 bg-church-cream rounded-2xl border border-border flex items-center gap-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Handshake size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">{dept.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-1">Lead: <span className="font-medium text-foreground">{dept.lead}</span></p>
                                    <p className="text-xs text-primary underline">{dept.contact}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-primary p-10 rounded-3xl text-primary-foreground">
                        <h3 className="font-serif text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                            <Heart className="fill-current" /> God Loves a Cheerful Servant
                        </h3>
                        <p className="mb-8 opacity-90">
                            Not sure where to start? Click the button below to fill out a simple form and our ministry coordinator will get in touch.
                        </p>
                        <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-bold px-10">
                            Apply to Volunteer
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20 bg-church-warm border-y border-border">
                <div className="container mx-auto px-4 text-center">
                    <MessageSquare className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                    <blockquote className="max-w-3xl mx-auto">
                        <p className="font-serif text-2xl md:text-3xl italic text-foreground mb-8">
                            "Joining the worship team didn't just give me a place to sing; it gave me a family.
                            My faith has grown so much more through serving others."
                        </p>
                        <cite className="font-bold text-lg">— David Musyoka, Worship Team Member</cite>
                    </blockquote>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Ministries;
