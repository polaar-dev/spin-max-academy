import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="text-2xl font-display font-bold">
            <span className="text-foreground">SPIN</span>
            <span className="text-gradient-gold">GO</span>
            <span className="text-foreground">MAX</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#produtos" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Produtos
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Depoimentos
            </a>
            <Button variant="gold" size="default">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 p-6">
            <div className="flex flex-col gap-4">
              <a href="#produtos" className="text-foreground font-medium py-2">Produtos</a>
              <a href="#beneficios" className="text-foreground font-medium py-2">Benefícios</a>
              <a href="#depoimentos" className="text-foreground font-medium py-2">Depoimentos</a>
              <Button variant="gold" size="lg" className="mt-4">
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
