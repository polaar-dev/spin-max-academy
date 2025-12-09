import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Background card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/20 rounded-3xl blur-xl" />
          
          <div className="relative glass-card rounded-3xl p-12 md:p-16 text-center border-primary/30">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-amber-400 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              <Sparkles className="w-10 h-10 text-background" />
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Pronto Para <span className="text-gradient-gold">Dominar</span> os Spins?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Junte-se a milhares de jogadores que já transformaram suas carreiras. 
              Não perca mais tempo, comece sua evolução agora.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="xl" className="group">
                Acessar Agora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="lg">
                Falar com Consultor
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Garantia 30 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
