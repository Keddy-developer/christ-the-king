import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutComponent from "@/components/About";
import { Star, Award } from "lucide-react";

const leadership = [
    {
        name: "Rev. Dr. Samuel Mwangi",
        role: "Senior Pastor",
        bio: "With over 20 years of ministerial experience, Rev. Dr. Mwangi leads our congregation with wisdom and a passion for spiritual transformation.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
        name: "Mrs. Sarah Mwangi",
        role: "Co-Pastor & Women's Ministry Leader",
        bio: "Lady Sarah is dedicated to empowering women and nurturing the next generation through prayer and mentorship.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
        name: "John Mutua",
        role: "Youth Pastor",
        bio: "John brings energy and creativity to our youth programs, helping young people find their purpose in Christ.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    },
];

const About = () => {
    return (
        <div className="min-h-screen bg-background pt-20">
            <Header />

            {/* Page Hero */}
            <section className="bg-church-red py-20 text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold mb-4">Our Story & Mission</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Learn about our journey, our values, and the heart behind Christ The King International Pentecostal Fellowship.
                    </p>
                </div>
            </section>

            <AboutComponent />

            {/* Leadership Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Meet Our Leadership</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {leadership.map((leader) => (
                            <div key={leader.name} className="bg-church-cream rounded-2xl p-8 text-center shadow-card hover:shadow-soft transition-all duration-300">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
                                />
                                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{leader.name}</h3>
                                <p className="text-primary font-medium mb-4">{leader.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recognition/History */}
            <section className="py-24 bg-church-warm">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Journey Since 2008</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            What started as a small prayer gathering in a living room has grown into a vibrant lighthouse for the Malindi community.
                            Under the guidance of the Holy Spirit, we have witnessed thousands of lives changed, families restored, and
                            communities uplifted.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary italic">
                                    <Award size={20} />
                                </div>
                                <p className="font-medium">Founded in Malindi, 2008</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Star size={20} />
                                </div>
                                <p className="font-medium">Voted Community Partner of the Year 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary/5 rounded-3xl p-10 border border-primary/10">
                        <h3 className="font-serif text-3xl font-bold text-primary mb-4 italic text-center">"Building a Legacy of Faith"</h3>
                        <p className="text-lg italic text-muted-foreground text-center">
                            "We believe that every person has a divine destiny. Our job is to help you discover and fulfill it."
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
