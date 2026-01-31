import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GivingComponent from "@/components/Giving";
import { ShieldCheck, Gift, Globe, HandHeart } from "lucide-react";

const impacts = [
    {
        icon: Globe,
        title: "Global Evangelism",
        detail: "Your support helps us reach unreached communities with the Word of God through missions.",
    },
    {
        icon: HandHeart,
        title: "Local Charity",
        detail: "We provide monthly food baskets to over 50 families in need within the Malindi area.",
    },
    {
        icon: Gift,
        title: "Community Programs",
        detail: "Funding for free medical camps, youth seminars, and widow empowerment programs.",
    },
];

const Giving = () => {
    return (
        <div className="min-h-screen bg-background pt-20">
            <Header />

            {/* Page Hero */}
            <section className="bg-church-red py-20 text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold mb-4">Generosity & Stewardship</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Investing in the Kingdom of God and making a tangible difference in our community.
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
                                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600&h=400&auto=format&fit=crop"
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
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                                        <ShieldCheck size={14} />
                                    </div>
                                    <p className="text-foreground font-medium">Safe & Secure Transactions</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                                        <ShieldCheck size={14} />
                                    </div>
                                    <p className="text-foreground font-medium">Transparent Financial Accountability</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Statistics */}
            <section className="py-24 bg-church-warm border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl font-bold text-foreground">See the Impact</h2>
                        <p className="text-muted-foreground mt-4">Your contributions go directly into building lives and restoring hope.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {impacts.map((impact) => (
                            <div key={impact.title} className="bg-background p-8 rounded-2xl shadow-card text-center hover:scale-105 transition-transform">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                                    <impact.icon size={32} />
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-4">{impact.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{impact.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Giving;
