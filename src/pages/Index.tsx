import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <section id="produtos">
          <ProductsSection />
        </section>
        <section id="beneficios">
          <BenefitsSection />
        </section>
        <section id="depoimentos">
          <TestimonialsSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
