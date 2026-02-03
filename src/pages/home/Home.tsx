import React, { useRef, useEffect, useState } from 'react';
import { 
  Handbag, Hammer, Drop, Lightning, Watch, DeviceMobile, Laptop, 
  DeviceTabletCameraIcon, 
  CaretLeft, CaretRight, Plus 
} from "@phosphor-icons/react";

// Components
import { CoberturaCard } from '../../components/cardshome/coberturacard/CoberturaCard';
import { EcossistemaCard } from '../../components/cardshome/ecossistemacard/EcossistemaCard';
import { ClienteCard } from '../../components/cardshome/clientecard/ClienteCard';
import LogoIcon from '../../assets/img/logoicon.png';
import Carrosel from '../../components/animacao/Carrosel';

// Constantes (Mantidas fora do componente para melhor performance)
const slides = [
  { url: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=1600&q=80", title: "TechGuard", sub: "Proteção Total - Inteligência na gestão para seus eletrônicos." },
  { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80", title: "TechGuard", sub: "Foco no Corretor - Ferramentas pensadas para escalar seu negócio." },
  { url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80", title: "TechGuard", sub: "Segurança Digital - O escudo que seus dispositivos precisam." }
];

const coberturas = [
  { title: "Roubo e Furto", desc: "Proteção contra ataques e invasões mediante arrombamento.", icon: Handbag },
  { title: "Danos Materiais", desc: "Quedas acidentais que danificam o funcionamento do aparelho.", icon: Hammer },
  { title: "Líquidos", desc: "Seu café caiu no notebook? Nós resolvemos o reparo.", icon: Drop },
  { title: "Danos Elétricos", desc: "Descargas elétricas durante o carregamento do dispositivo.", icon: Lightning },
];

const ecossistema = [
  { title: "Smartphones", sub: "iOS, Android e dobráveis.", icon: DeviceMobile },
  { title: "Notebooks", sub: "Laptops, Macbooks e Workstations.", icon: Laptop },
  { title: "Tablets", sub: "iPads e tablets de alta performance.", icon: DeviceTabletCameraIcon },
  { title: "Smartwatches", sub: "Relógios inteligentes e wearables.", icon: Watch },
];

const depoimentos = [
  {
    nome: "Ricardo Alvez",
    texto: "Acionei o seguro após derrubar meu celular na piscina. Em 4 dias meu aparelho foi reparado e devolvido. Experiência incrível!",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Ricardo",
    desde: "2024"
  },
  {
    nome: "Mariana Costa",
    texto: "Processo de contratação super rápido. Fiz tudo pelo celular e a vistoria foi aprovada em minutos.",
    avatar: "https://api.dicebear.com/9.x/fun-emoji/svg?eyes=closed",
    desde: "2023"
  }
];

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Lógica do Escudo Interativo
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição x real em pixels    
    // Subtraímos 0.5 para ele saber se o mouse está à esquerda ou direita do centro
    const yRotation = (x / rect.width - 0.5) * 300; 

    setRotateY(yRotation);
  };

  const handleMouseLeave = () => {
    setRotateY(0);
  };

  // Lógica do Carrossel
  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  const handleNext = () => {
    const nextIndex = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;
    scrollToSlide(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
    scrollToSlide(prevIndex);
  };

  // Lógica do Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); 

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="bg-white font-sans text-gray-900">

      {/* HEADER / CARROSSEL */}
      <header className="relative h-[600px] bg-gray-900 overflow-hidden group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-full hide-scrollbar pointer-events-none md:pointer-events-auto"
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full snap-center relative">
              <img src={slide.url} className="w-full h-full object-cover opacity-50" alt={slide.title} />
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
                <div className="bg-slate-900/60 backdrop-blur-md p-8 md:p-12 rounded-[32px] border border-white/10 shadow-2xl max-w-3xl w-full text-center">
                  
                  <h1 className="flex items-center justify-center gap-6 text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-2">
                    <div className="flex">
                      <span className="text-[#10B981]">TECH</span>
                      <span className="text-white">GUARD</span>
                    </div>

                    <div 
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      className="inline-block"
                    >
                      <img 
                        src={LogoIcon} 
                        alt="TechGuard Logo" 
                        style={{
                          transform: `perspective(2000px) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
                          transition: 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)',
                          willChange: 'transform'
                        }}
                        className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]" 
                      />
                    </div>
                  </h1>

                  <p className="text-base md:text-lg font-bold text-[#D4AF37] mb-6 italic tracking-tight">
                    Inteligência na gestão, confiança na proteção.
                  </p>

                  <div className="h-1 w-12 bg-[#10B981] mx-auto mb-6 rounded-full opacity-80"></div>
                  
                  <h2 className="text-lg md:text-xl font-medium text-gray-100 leading-relaxed mb-8">
                    {slide.sub}
                  </h2>

                  <button className="bg-[#10B981] text-white px-8 py-3.5 rounded-full font-black text-base hover:bg-[#059669] transition-all shadow-xl hover:scale-105 active:scale-95">
                    Contratar Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Setas de Controlo */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity z-20"
        >
          <CaretLeft size={32} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity z-20"
        >
          <CaretRight size={32} />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 w-full flex justify-center space-x-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className="group h-2 transition-all duration-300 relative"
            >
              <div className={`h-full rounded-full transition-all duration-500 ${activeSlide === i ? 'w-16 bg-[#10B981]' : 'w-8 bg-white/30'}`}></div>
            </button>
          ))}
        </div>
      </header>

      {/* SEÇÃO DE COBERTURAS */}
      <section id="coberturas" className="py-20 bg-gray-800 w-full overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest text-emerald-500">
            O que protegemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-900">
            {coberturas.map((item, index) => (
              <CoberturaCard 
                key={index}
                title={item.title}
                desc={item.desc}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="bg-gray-800 w-full py-2">
        <div className="w-full h-px 'bg-gradient-to-r' from-transparent via-emerald-500/50 to-transparent"></div>
      </div>

      {/* ECOSSISTEMA DIGITAL */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-black text-emerald-500 mb-4 uppercase">
                Proteção para todo o seu ecossistema digital
              </h2>
              <p className="text-emerald-200 text-lg italic">
                Não importa a marca ou o modelo, temos um plano sob medida.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-emerald-300 font-bold border-b-2 border-[#D4AF37] pb-1">
                Marcas parceiras e homologadas
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-900">
            {ecossistema.map((item, index) => (
              <EcossistemaCard 
                key={index}
                title={item.title}
                sub={item.sub}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
      {/* DIVISOR */}
      <div className="bg-gray-800 w-full py-2">
        <div className="w-full h-px -m-10 'bg-gradient-to-r' from-transparent via-emerald-500/50 to-transparent">
        <div className=' text-white -m-40'>
            <Carrosel />
          </div></div>
      </div>

      {/* PLANOS */}
      <section id="planos" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-emerald-500 mb-4">Planos que cabem no seu bolso</h2>
            <p className="text-slate-400">Escolha o nível de proteção ideal para o seu estilo de vida.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center text-gray-900">
            {/* Cards seguindo o seu estilo original */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-4 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Essencial</h3>
              <p className="text-emerald-600 font-bold text-4xl mb-6">R$ 19,90<span className="text-sm text-gray-400">/mês</span></p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-slate-600"><i className="fas fa-check text-emerald-500 mr-2"></i> Roubo e Furto Qualificado</li>
                <li className="flex items-center text-gray-400"><i className="fas fa-times mr-2"></i> Danos por Líquidos</li>
              </ul>
              <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-bold hover:bg-emerald-50 transition">Escolher Essencial</button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-emerald-600 transform scale-105 relative hover:-translate-y-4 transition-all duration-300">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Mais Escolhido</span>
              <h3 className="text-2xl font-bold mb-2">Smart Pro</h3>
              <p className="text-emerald-600 font-bold text-4xl mb-6">R$ 34,90<span className="text-sm text-gray-400">/mês</span></p>
              <ul className="space-y-4 mb-8 flex-1 font-medium">
                <li className="flex items-center text-slate-700"><i className="fas fa-check text-emerald-500 mr-2"></i> Roubo e Furto Qualificado</li>
                <li className="flex items-center text-slate-700"><i className="fas fa-check text-emerald-500 mr-2"></i> Quebra de Tela</li>
                <li className="flex items-center text-slate-700"><i className="fas fa-check text-emerald-500 mr-2"></i> Danos por Líquidos</li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg">Proteger Agora</button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:-translate-y-4 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Global Plus</h3>
              <p className="text-emerald-600 font-bold text-4xl mb-6">R$ 59,90<span className="text-sm text-gray-400">/mês</span></p>
              <ul className="space-y-4 mb-8 flex-1 text-sm">
                <li className="flex items-center font-bold text-slate-700"><i className="fas fa-globe-americas text-emerald-500 mr-2"></i> Cobertura Internacional</li>
                <li className="flex items-center text-slate-600"><i className="fas fa-check text-emerald-500 mr-2"></i> Tudo do plano Smart Pro</li>
                <li className="flex items-center text-slate-600"><i className="fas fa-check text-emerald-500 mr-2"></i> Aparelho Reserva</li>
              </ul>
              <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] relative overflow-hidden group">
                <span className="absolute top-0 -left-full w-full h-full 'bg-gradient-to-r' from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></span>
                <span className="relative flex items-center justify-center">
                  <i className="fas fa-crown mr-2 text-xs"></i> Escolher Global
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="bg-gray-800 w-full py-2">
        <div className="w-full h-px 'bg-gradient-to-r' from-transparent via-emerald-500/50 to-transparent"></div>
      </div>

      {/* CLIENTES */}
      <section className="py-20 bg-gray-800 w-full text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#10B981] uppercase tracking-widest">
              O que nossos clientes dizem
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {depoimentos.map((item, index) => (
              <ClienteCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="bg-gray-800 w-full py-2">
        <div className="w-full h-px 'bg-gradient-to-r' from-transparent via-emerald-500/50 to-transparent"></div>
      </div>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {["Qual é o período de carência?", "Preciso da Nota Fiscal?", "Como funciona a franquia?"].map((question, i) => (
              <details key={i} className="group bg-emerald-600 rounded-xl">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                  {question}
                  <Plus size={24} className="text-[#d4af37] transition-transform duration-300 group-hover:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-gray-100">
                  {i === 0 && "Após a aprovação da vistoria digital, a cobertura é imediata."}
                  {i === 1 && "Sim, a Nota Fiscal é indispensável para comprovar o valor do eletrônico."}
                  {i === 2 && "A franquia é um valor fixo pago apenas em caso de sinistro aprovado."}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;