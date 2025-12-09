import { Instagram, Youtube, Send, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-display font-bold mb-4">
              <span className="text-foreground">SPIN</span>
              <span className="text-gradient-gold">GO</span>
              <span className="text-foreground">MAX</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              A maior escola de Spin & Go do Brasil. Transformando jogadores amadores em profissionais desde 2019.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Produtos</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">E-Book</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Curso Completo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentoria</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ranges</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Escola</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Suporte</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Reembolso</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 SpinGoMax. Todos os direitos reservados.</p>
          <p>Jogue com responsabilidade. +18</p>
        </div>
      </div>
    </footer>
  );
};
