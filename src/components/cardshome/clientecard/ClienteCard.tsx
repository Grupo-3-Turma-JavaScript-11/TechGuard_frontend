import React, { useState } from 'react';
import { Star, CheckCircle, Quotes } from "@phosphor-icons/react";

interface ClienteProps {
  nome: string;
  texto: string;
  avatar: string;
  desde: string;
}

export function ClienteCard({ nome, texto, avatar, desde }: ClienteProps) {
  return (
    <div className="group bg-slate-700 p-8 rounded-3xl border border-white/5 relative overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:bg-slate-600">
      
      {/* Estrelas com Phosphor */}
      <div className="flex text-[#D4AF37] mb-4 text-xl">
        {[...Array(5)].map((_, i) => (
          <Star key={i} weight="fill" />
        ))}
      </div>

      {/* Aspas decorativas no fundo */}
      <Quotes 
        size={120} 
        weight="fill" 
        className="absolute -right-4 -bottom-4 text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-[#10B981]/10" 
      />

      <p className="italic text-slate-200 mb-8 relative z-10 leading-relaxed">
        "{texto}"
      </p>

      <div className="flex items-center relative z-10">
        <div className="w-14 h-14 rounded-full mr-4 p-0.5 bg-gradient-to-tr from-[#10B981] to-[#D4AF37]">
          <img 
            src={avatar} 
            className="w-full h-full rounded-full border-2 border-slate-700 object-cover" 
            alt={nome} 
          />
        </div>
        <div>
          <p className="font-bold text-white flex items-center">
            {nome} 
            <CheckCircle size={16} weight="fill" className="text-blue-400 ml-2" />
          </p>
          <p className="text-xs text-[#10B981] font-medium uppercase tracking-wider">
            Cliente desde {desde}
          </p>
        </div>
      </div>
    </div>
  );
}