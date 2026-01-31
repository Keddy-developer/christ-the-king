import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background pt-20">
            <Header />

            {/* Page Hero */}
            <section className="bg-church-red py-20 text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        We're here to listen, pray, and help you find your way home to Christ The King Fellowship.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="font-serif text-4xl font-bold mb-8">Reach Out Directly</h2>
                            <p className="text-muted-foreground text-lg mb-12">
                                Whether you have a question about our services, want to request prayer, or need guidance,
                                our team is ready to support you.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                <div className="p-6 bg-church-cream rounded-2xl border border-border">
                                    <Phone className="text-primary mb-4" />
                                    <h3 className="font-bold text-lg mb-2">Call Us</h3>
                                    <p className="text-muted-foreground text-sm">+254 700 000 000</p>
                                    <p className="text-muted-foreground text-sm">+254 711 000 000</p>
                                </div>
                                <div className="p-6 bg-church-cream rounded-2xl border border-border">
                                    <Mail className="text-primary mb-4" />
                                    <h3 className="font-bold text-lg mb-2">Email Us</h3>
                                    <p className="text-muted-foreground text-sm">info@ckipf-malindi.org</p>
                                    <p className="text-muted-foreground text-sm">prayer@ckipf-malindi.org</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Our Location</h4>
                                        <p className="text-muted-foreground">Christ The King International Pentecostal Fellowship, Malindi, Kilifi County, Kenya</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Office Hours</h4>
                                        <p className="text-muted-foreground">Monday — Friday: 9:00 AM – 5:00 PM</p>
                                        <p className="text-muted-foreground">Saturday: 10:00 AM – 1:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold gap-2">
                                    <MessageCircle size={20} /> Chat on WhatsApp
                                </Button>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bg-church-warm p-8 md:p-12 rounded-3xl border border-border shadow-soft">
                            <h3 className="font-serif text-3xl font-bold mb-8">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Full Name</label>
                                        <Input placeholder="John Doe" className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email Address</label>
                                        <Input type="email" placeholder="john@example.com" className="bg-background" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Subject</label>
                                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option>General Inquiry</option>
                                        <option>Prayer Request</option>
                                        <option>Testimony</option>
                                        <option>Counseling Request</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Your Message</label>
                                    <Textarea placeholder="How can we help you?" className="bg-background min-h-[150px]" />
                                </div>
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg">
                                    Send Message <Send size={20} className="ml-2" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-muted relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-background p-6 rounded-2xl shadow-soft text-center max-w-sm">
                        <MapPin className="text-primary w-12 h-12 mx-auto mb-4" />
                        <h4 className="font-bold text-xl mb-2">Malindi Branch</h4>
                        <p className="text-sm text-muted-foreground mb-4">You'll find us near the town center. Map directions available below.</p>
                        <Button variant="outline" className="w-full">Open in Google Maps</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
