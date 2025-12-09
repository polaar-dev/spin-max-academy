import { Trophy, Target, TrendingUp, Shield, Clock, Zap } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "Resultados Comprovados",
    description: "Mais de $2 milhões em premiações conquistadas pelos nossos alunos em 2024.",
  },
  {
    icon: Target,
    title: "Estratégias GTO+",
    description: "Ranges e estratégias baseadas em solvers de última geração, sempre atualizados.",
  },
  {
    icon: TrendingUp,
    title: "Evolução Constante",
    description: "Conteúdo atualizado mensalmente seguindo as mudanças do meta e field.",
  },
  {
    icon: Shield,
    title: "Garantia de 30 Dias",
    description: "Devolução integral se não estiver satisfeito. Sem perguntas, sem burocracia.",
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Equipe dedicada para tirar suas dúvidas a qualquer momento do dia.",
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Começe a estudar segundos após a compra. Download instantâneo de todos os materiais.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-widest uppercase bg-primary/20 text-primary rounded-full border border-primary/30">
            Por Que Escolher a SpinGoMax
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Vantagens <span className="text-gradient-emerald">Exclusivas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que nos diferencia de qualquer outro treinamento de poker disponível.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 glass-card rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/50"
                style={{
                  animation: "fade-in-up 0.6s ease-out forwards",
                  animationDelay: `${0.1 + index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
