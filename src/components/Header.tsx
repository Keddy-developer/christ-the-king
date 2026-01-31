import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import churchLogo from "@/assets/church-logo.jpg";
import PlanVisitModal from "./modals/PlanVisitModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Ministries", href: "/ministries" },
    { name: "Events", href: "/events" },
    { name: "Give", href: "/giving" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-soft group-hover:shadow-warm transition-all duration-300">
              <img src={churchLogo} alt="Church Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-tight text-gradient-red">CKIPF</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Malindi Branch</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.href)
                  ? "text-primary bg-primary/5 shadow-sm"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full shadow-warm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              onClick={() => setIsPlanModalOpen(true)}
            >
              Join Us Sunday
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-screen border-t" : "max-h-0"
          }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-lg font-medium py-2 transition-colors ${isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-2xl mt-4"
            onClick={() => {
              setIsPlanModalOpen(true);
              setIsMenuOpen(false);
            }}
          >
            Join Us Sunday
          </Button>
        </div>
      </div>

      <PlanVisitModal isOpen={isPlanModalOpen} onOpenChange={setIsPlanModalOpen} />
    </header>
  );
};

export default Header;
