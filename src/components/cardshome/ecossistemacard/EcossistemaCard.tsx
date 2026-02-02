import React, { useState } from 'react';

interface EcossistemaProps {
  title: string;
  sub: string;
  Icon: any;
}

export function EcossistemaCard({ title, sub, Icon }: EcossistemaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer overflow-hidden
        ${isHovered 
          ? 'border-[#D4AF37] bg-emerald-600 -translate-y-4 shadow-[0_20px_40px_rgba(212,175,55,0.2)]' 
          : 'border-[#D4AF37]/30 bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] shadow-lg'}
      `}
    >
      {/* Brilho interno que percorre o card no hover */}
      <div className={`
        absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent transition-opacity duration-500
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} />

      <Icon 
        size={44} 
        weight="duotone" 
        className={`mb-6 transition-all duration-500 ${isHovered ? 'text-white scale-110' : 'text-emerald-600'}`} 
      />
      
      <h3 className={`font-bold text-xl transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h3>
      
      <p className={`text-sm mt-2 transition-colors duration-500 ${isHovered ? 'text-emerald-50' : 'text-slate-800'}`}>
        {sub}
      </p>

      {/* Detalhe decorativo no canto */}
      <div className={`
        absolute -bottom-2 -right-2 w-12 h-12 bg-white/10 rounded-full blur-2xl transition-all
        ${isHovered ? 'scale-150 bg-[#D4AF37]/40' : 'scale-0'}
      `} />
    </div>
  );
}