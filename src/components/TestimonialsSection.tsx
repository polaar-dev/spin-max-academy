import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Mendes",
    role: "Reg de Spin $15-$60",
    avatar: "LM",
    content: "Sai do breakeven para um ROI de 8% em 3 meses. O conteúdo de ICM mudou completamente minha visão do jogo.",
    rating: 5,
    profit: "+$12.500",
  },
  {
    name: "Rafael Costa",
    role: "Profissional $100+",
    avatar: "RC",
    content: "A mentoria foi o melhor investimento da minha carreira. Coach muito técnico e didático. Indico demais!",
    rating: 5,
    profit: "+$45.000",
  },
  {
    name: "Pedro Oliveira",
    role: "Iniciante",
    avatar: "PO",
    content: "Comecei do zero e em 6 meses já estava jogando $7 com win rate consistente. Material muito bem organizado.",
    rating: 5,
    profit: "+$3.200",
  },
  {
    name: "Bruno Silva",
    role: "Reg de Spin $30",
    avatar: "BS",
    content: "Os ranges do pack são perfeitos. Economizei meses de estudo e já chegou tudo pronto pra implementar.",
    rating: 5,
    profit: "+$8.700",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 z-10 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-widest uppercase bg-secondary/20 text-secondary rounded-full border border-secondary/30">
            Depoimentos Reais
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            O Que Nossos <span className="text-gradient-gold">Alunos</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de jogadores que transformaram suas carreiras com a SpinGoMax.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 glass-card rounded-2xl transition-all duration-500 hover:border-secondary/50"
              style={{
                animation: "fade-in-up 0.6s ease-out forwards",
                animationDelay: `${0.1 + index * 0.15}s`,
                opacity: 0,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold text-background shrink-0">
                  {testimonial.avatar}
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-display font-bold text-gradient-gold">{testimonial.profit}</span>
                      <p className="text-xs text-muted-foreground">Lucro</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
