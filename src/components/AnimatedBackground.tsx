import { useEffect, useState } from "react";

const FloatingCard = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = ["A", "K", "Q", "J", "10"];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const isRed = randomSuit === "♥" || randomSuit === "♦";

  return (
    <div
      className="absolute text-4xl font-bold opacity-10 animate-float pointer-events-none select-none"
      style={{
        left: `${x}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        color: isRed ? "hsl(0, 70%, 50%)" : "hsl(var(--foreground))",
      }}
    >
      <div className="flex flex-col items-center">
        <span>{randomValue}</span>
        <span>{randomSuit}</span>
      </div>
    </div>
  );
};

const Particle = ({ index }: { index: number }) => {
  const x = Math.random() * 100;
  const delay = Math.random() * 10;
  const duration = 10 + Math.random() * 10;
  const size = 2 + Math.random() * 4;

  return (
    <div
      className="particle"
      style={{
        left: `${x}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export const AnimatedBackground = () => {
  const [cards, setCards] = useState<{ id: number; delay: number; x: number; duration: number }[]>([]);

  useEffect(() => {
    const newCards = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      x: Math.random() * 90 + 5,
      duration: 8 + Math.random() * 6,
    }));
    setCards(newCards);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald/5 blur-3xl" />
      
      {/* Floating cards */}
      {cards.map((card) => (
        <FloatingCard key={card.id} delay={card.delay} x={card.x} duration={card.duration} />
      ))}

      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 30 }, (_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};
