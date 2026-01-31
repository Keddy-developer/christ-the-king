import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesComponent from "@/components/Services";
import { HelpCircle, ChevronRight, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "What should I wear?",
        answer: "Come as you are! Some people dress up in their Sunday best, and others prefer casual attire. We want you to feel comfortable and welcome.",
    },
    {
        question: "Is there parking available?",
        answer: "Yes, we have a secure parking area within the church compound with assistants to help you find a spot.",
    },
    {
        question: "Do you have programs for children?",
        answer: "Absolutely! We have a vibrant Children's Church (Sunday School) that runs concurrently with our main services, where kids learn about God in a fun and age-appropriate way.",
    },
    {
        question: "How long are the services?",
        answer: "Our Sunday services typically last about 1 hour and 45 minutes, filled with worship, prayer, and a practical biblically-based message.",
    },
];

const Services = () => {
    return (
        <div className="min-h-screen bg-background pt-20">
            <Header />

            {/* Page Hero */}
            <section className="bg-church-red py-20 text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold mb-4">Worship With Us</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Join our community for powerful worship, fellowship, and the life-changing Word of God.
                    </p>
                </div>
            </section>

            <ServicesComponent />

            {/* Visitor FAQ */}
            <section className="py-24 bg-church-cream">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-church-red-light rounded-full mb-6">
                            <HelpCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Common Questions</span>
                        </div>
                        <h2 className="font-serif text-4xl font-bold text-foreground">New Here?</h2>
                        <p className="text-muted-foreground mt-4">Everything you need to know before your first visit.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-xl px-6 border border-border shadow-card">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Stay Connected CTA */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-church-warm rounded-3xl p-12 shadow-soft border border-border max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl font-bold mb-6">Can't Make it in Person?</h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Follow our social media pages to join our live streams and stay updated with sermons and announcements.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all">
                                <MessageCircle size={20} /> Join WhatsApp Group
                            </button>
                            <button className="bg-foreground text-background px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all">
                                Watch Live on YouTube <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
