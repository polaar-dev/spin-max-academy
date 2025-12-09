import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-widest uppercase bg-primary/20 text-primary rounded-full border border-primary/30">
            A Evolução do Spin & Go
          </span>
        </div>

        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="text-foreground">SPIN</span>
          <span className="text-gradient-gold">GO</span>
          <span className="text-foreground">MAX</span>
        </h1>

        <p 
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
        >
          Domine a modalidade mais lucrativa do poker online. 
          <span className="text-primary font-semibold"> Estratégias exclusivas</span>, 
          <span className="text-secondary font-semibold"> ranges otimizados</span> e 
          <span className="text-foreground font-semibold"> mentoria de elite</span>.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
        >
          <Button variant="hero" size="xl">
            Começar Agora
          </Button>
          <Button variant="glass" size="lg">
            Ver Produtos
          </Button>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">5000+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Alunos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-emerald">$2M+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Premiações</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};
