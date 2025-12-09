import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, BarChart3, School } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import coursePreview from "@/assets/course-preview.jpg";
import mentorImage from "@/assets/mentor.jpg";
import rangesPreview from "@/assets/ranges-preview.jpg";
import schoolPreview from "@/assets/school-preview.jpg";

const products = [
  {
    id: 1,
    title: "E-Book SpinGoMax",
    subtitle: "Fundamentos Completos",
    description: "Guia definitivo com 250+ páginas sobre estratégias avançadas de Spin & Go. ICM, ranges, exploits e muito mais.",
    price: "R$ 197",
    originalPrice: "R$ 347",
    image: ebookCover,
    icon: BookOpen,
    badge: "Mais Vendido",
    features: ["250+ Páginas", "Atualizações Grátis", "Suporte VIP"],
  },
  {
    id: 2,
    title: "Curso Completo",
    subtitle: "Do Zero ao Profissional",
    description: "80+ horas de conteúdo em vídeo. Aprenda do básico ao avançado com análises de mãos reais e sessões ao vivo.",
    price: "R$ 997",
    originalPrice: "R$ 1.497",
    image: coursePreview,
    icon: GraduationCap,
    badge: "Premium",
    features: ["80+ Horas", "Certificado", "Grupo Exclusivo"],
  },
  {
    id: 3,
    title: "Mentoria Elite",
    subtitle: "Acompanhamento 1:1",
    description: "3 meses de mentoria individual com coach profissional. Análise de sessões, desenvolvimento de estratégia personalizada.",
    price: "R$ 2.997",
    originalPrice: "R$ 4.997",
    image: mentorImage,
    icon: Users,
    badge: "Limitado",
    features: ["12 Sessões", "WhatsApp Direto", "HUD Incluso"],
  },
  {
    id: 4,
    title: "Ranges Premium",
    subtitle: "Pack Completo de Ranges",
    description: "Todos os ranges otimizados por solver para cada stack size e posição. Atualizações mensais baseadas no meta atual.",
    price: "R$ 497",
    originalPrice: "R$ 797",
    image: rangesPreview,
    icon: BarChart3,
    badge: "Novo",
    features: ["500+ Ranges", "Formato GTO+", "Updates Mensais"],
  },
  {
    id: 5,
    title: "Acesso à Escola",
    subtitle: "Assinatura Anual",
    description: "Acesso completo a todos os cursos, ranges, comunidade e novos conteúdos. O pacote mais completo do mercado.",
    price: "R$ 1.997/ano",
    originalPrice: "R$ 3.997/ano",
    image: schoolPreview,
    icon: School,
    badge: "Melhor Valor",
    features: ["Tudo Incluso", "Comunidade", "Eventos ao Vivo"],
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const Icon = product.icon;
  
  return (
    <div 
      className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-primary/50"
      style={{ 
        opacity: 0,
        animation: "fade-in-up 0.6s ease-out forwards",
        animationDelay: `${0.2 + index * 0.1}s`
      }}
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full">
          {product.badge}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-primary font-medium uppercase tracking-wider mb-1">{product.subtitle}</p>
        <h3 className="text-2xl font-display font-bold text-foreground mb-3">{product.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((feature, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 mb-4">
          <span className="text-3xl font-display font-bold text-gradient-gold">{product.price}</span>
          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
        </div>

        <Button variant="gold" className="w-full" size="lg">
          Quero Este
        </Button>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>
    </div>
  );
};

export const ProductsSection = () => {
  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-widest uppercase bg-secondary/20 text-secondary rounded-full border border-secondary/30">
            Produtos Exclusivos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Escolha Seu <span className="text-gradient-gold">Caminho</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Do iniciante ao profissional, temos a solução perfeita para elevar seu jogo ao próximo nível.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {products.slice(3).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};
