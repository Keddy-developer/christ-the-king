import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GivingComponent from "@/components/Giving";
import {
    Heart,
    Target,
    Lightbulb,
    ArrowRight,
    ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import GivingModal from "@/components/modals/GivingModal";

const Giving = () => {
    const [isGivingModalOpen, setIsGivingModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background pt-20">
            <Header />

            {/* Page Hero */}
            <section className="bg-church-red py-20 text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold mb-4">Grateful Giving</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Your generosity fuels our mission to spread God's love and serve our community.
                    </p>
                </div>
            </section>

            <GivingComponent />

            {/* Why We Give */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                                alt="Giving"
                                className="rounded-3xl shadow-warm object-cover w-full aspect-[4/3]"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-soft hidden md:block">
                                <p className="font-serif text-3xl font-bold italic">"Honor the Lord with your wealth"</p>
                                <p className="mt-2 opacity-80">— Proverbs 3:9</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-serif text-4xl font-bold mb-6">The Theology of Giving</h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                We believe that giving is an act of worship. It's not about the amount, but about the heart of stewardship and
                                gratitude for all that God has provided in our lives.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Safe & Secure Transactions",
                                    "Transparent Financial Accountability",
                                    "Monthly Impact Reports",
                                    "Tax-deductible Contributions"
                                ].map((item) => (
                                    <li key={item} className="flex gap-4">
                                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                                            <ShieldCheck size={14} />
                                        </div>
                                        <p className="text-foreground font-medium">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-church-cream">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-serif text-4xl font-bold mb-6">Where Your Seeds Go</h2>
                        <p className="text-lg text-muted-foreground">
                            Every coin given at Christ The King International Pentecostal Fellowship – Malindi
                            is directed towards spreading the Gospel and uplifting the less fortunate.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: <Target className="text-primary" />,
                                title: "Church Growth",
                                desc: "Support for our building projects and venue enhancements."
                            },
                            {
                                icon: <Heart className="text-primary" />,
                                title: "Community Outreach",
                                desc: "Feeding programs, medical camps, and local mission work."
                            },
                            {
                                icon: <Lightbulb className="text-primary" />,
                                title: "Kingdom Education",
                                desc: "Children's ministry resources and leadership training."
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-background p-8 rounded-3xl shadow-card border border-border">
                                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-foreground text-background p-12 rounded-[3rem] text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

                        <div className="relative z-10">
                            <h3 className="font-serif text-3xl font-bold mb-6 italic">"Each of you should give what you have decided in your heart to give."</h3>
                            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                                2 Corinthians 9:7 — Join us in building the Kingdom of God here in Malindi and beyond.
                            </p>
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-8 text-xl rounded-2xl group"
                                onClick={() => setIsGivingModalOpen(true)}
                            >
                                Give Online Now
                                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-background border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Families Supported", value: "500+" },
                            { label: "Mission Projects", value: "12" },
                            { label: "Lives Impacted", value: "5,000+" },
                            { label: "Community Events", value: "24/yr" },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <GivingModal isOpen={isGivingModalOpen} onOpenChange={setIsGivingModalOpen} />
        </div>
    );
};

export default Giving;
