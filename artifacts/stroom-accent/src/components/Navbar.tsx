import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Diensten", href: "#diensten" },
    { name: "Over Ons", href: "#over-ons" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Stroom Accent Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-2xl font-display font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Stroom Accent
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0681775168"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>06 8177 5168</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0681775168"
                className="flex justify-center items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-bold shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>06 8177 5168</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
