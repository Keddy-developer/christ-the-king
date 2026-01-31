import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import churchLogo from "@/assets/church-logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                <span className="text-sm font-medium text-primary">Get in Touch</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                We'd Love to <span className="text-primary">Hear</span> From You
              </h2>

              <p className="text-background/70 text-lg mb-10">
                Have questions about our church, need prayer, or want to learn more?
                Reach out to us – we're here for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-background mb-1">Location</h4>
                    <p className="text-background/70">Malindi, Kilifi County, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-background mb-1">Phone</h4>
                    <p className="text-background/70">+254 700 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-background mb-1">Email</h4>
                    <p className="text-background/70">info@ckipf-malindi.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-background mb-1">Office Hours</h4>
                    <p className="text-background/70">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <p className="text-sm text-background/50 mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Youtube, label: "YouTube" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background/5 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-background mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 resize-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={churchLogo}
                alt="Christ The King International Pentecostal Fellowship"
                className="h-10 w-10 object-contain bg-background rounded-full p-1"
              />
              <div>
                <p className="font-serif font-semibold text-background">Christ The King</p>
                <p className="text-xs text-background/50">International Pentecostal Fellowship – Malindi</p>
              </div>
            </div>

            <p className="text-sm text-background/50 text-center">
              © {new Date().getFullYear()} Christ The King International Pentecostal Fellowship. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-background/50">
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
