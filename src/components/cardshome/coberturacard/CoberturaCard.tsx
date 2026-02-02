import React, { useState } from 'react';

// Tipagem para o TypeScript
interface CoberturaCardProps {
  title: string;
  desc: string;
  Icon: any;
}

export function CoberturaCard({ title, desc, Icon }: CoberturaCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    
    // Cálculo da inclinação (Tilt)
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    
    // Ajuste o número 10 para aumentar ou diminuir a sensibilidade da inclinação
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight({ x: 0, y: 0, opacity: 0 });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="group relative p-8 rounded-3xl border border-[#d6a935]/90 bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] overflow-hidden cursor-pointer shadow-lg"
    >
      {/* O "Glow" que segue o mouse */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(16, 185, 129, 0.4), transparent 40%)`,
          opacity: spotlight.opacity
        }}
      />

      <div className="text-center relative z-10">
        <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300">
          <Icon size={40} weight="duotone" className="text-[#1F2937] group-hover:text-white transition-colors" />
        </div>
        <h3 className="font-bold text-xl mb-2 text-[#1F2937] group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-slate-800 text-sm group-hover:text-white/90 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
}