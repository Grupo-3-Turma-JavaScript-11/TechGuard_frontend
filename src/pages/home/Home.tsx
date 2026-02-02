import React from 'react';

function Home() {
  return (
    <div className="bg-white font-sans text-gray-900">
      

      {/* HEADER */}
      <header className="relative h-[500px] bg-gray-900 overflow-hidden text-white">
        
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover opacity-50" alt="Banner" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start">
          <span className="bg-[#D4AF37] px-3 py-1 rounded text-sm font-bold mb-4">NOVIDADE</span>
          <h1 className="text-5xl font-black mb-4">TechGuard</h1>
          <p className="text-xl max-w-lg mb-8 text-gray-200">Inteligência na gestão, confiança na proteção.</p>
          <button className="bg-green-500 text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">Contratar Agora</button>
        </div>

        <div className="absolute bottom-6 w-full flex justify-center space-x-2">
          <div className="w-12 h-1 bg-blue-600"></div>
          <div className="w-12 h-1 bg-white/30"></div>
          <div className="w-12 h-1 bg-white/30"></div>
        </div>
      </header>

      {/* COBERTURAS */}
      <section id="coberturas" className="py-20 bg-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest text-emerald-500">O que protegemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] hover:from-emerald-500 hover:to-emerald-700 transition-all duration-500 cursor-pointer shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-hand-holding-usd text-3xl"></i>
                </div>
                <h3 className="font-bold text-xl mb-2">Roubo e Furto</h3>
                <p className="text-slate-800 text-sm">Proteção contra ataques e invasões mediante arrombamento.</p>
              </div>
            </div>

            <div className="group p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] hover:from-emerald-500 hover:to-emerald-700 transition-all duration-500 cursor-pointer shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <i className="fas fa-hammer text-3xl"></i>
                </div>
                <h3 className="font-bold text-xl mb-2">Danos Materiais</h3>
                <p className="text-slate-800 text-sm">Quedas acidentais que danificam o funcionamento do aparelho.</p>
              </div>

            </div>
            <div className="group p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] hover:from-emerald-500 hover:to-emerald-700 transition-all duration-500 cursor-pointer shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <i className="fas fa-tint text-3xl"></i>
                </div>
                <h3 className="font-bold text-xl mb-2">Líquidos</h3>
                <p className="text-slate-800 text-sm">Seu café caiu no notebook? Nós resolvemos o reparo.</p>
              </div>
            </div>

            <div className="group p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] hover:from-emerald-500 hover:to-emerald-700 transition-all duration-500 cursor-pointer shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <i className="fas fa-bolt text-3xl"></i>
                </div>
                <h3 className="font-bold text-xl mb-2">Danos Elétricos</h3>
                <p className="text-slate-800 text-sm">Descargas elétricas durante o carregamento do dispositivo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="bg-gray-800 w-full py-2">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </div>

      {/* ECOSSISTEMA DIGITAL */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-black text-emerald-500 mb-4">Proteção para todo o seu ecossistema digital</h2>
              <p className="text-emerald-200 text-lg">Não importa a marca ou o modelo, temos um plano sob medida para o eletrônico que você não vive sem.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-emerald-500 font-bold border-b-2 border-blue-600">Marcas parceiras e homologadas</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#d6a935] to-[#fad394] hover:from-emerald-500 hover:to-emerald-700 transition-all duration-500 cursor-pointer shadow-lg">
              <i className="fas fa-mobile-alt text-4xl text-emerald-600 group-hover:text-white mb-6"></i>
              <h3 className="font-bold text-xl group-hover:text-white">Smartphones</h3>
              <p className="text-sm text-slate-900 group-hover:text-blue-100 mt-2">iOS, Android e dobráveis.</p>
            </div>
            <div className="group p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#d6a935] to-[#fad394] hover:from-emerald-500 hover:to-emerald-700 transition-all duration-500 cursor-pointer shadow-lg">
              <i className="fas fa-laptop text-4xl text-emerald-600 group-hover:text-white mb-6"></i>
              <h3 className="font-bold text-xl group-hover:text-white">Notebooks</h3>
              <p className="text-sm text-slate-900 group-hover:text-blue-100 mt-2">Laptops, Macbooks e Workstations.</p>
            </div>
            <div className="group p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#d6a935] to-[#fad394] hover:from-emerald-500 hover:to-emerald-700 transition-all duration-500 cursor-pointer shadow-lg">
              <i className="fas fa-tablet-alt text-4xl text-emerald-600 group-hover:text-white mb-6"></i>
              <h3 className="font-bold text-xl group-hover:text-white">Tablets</h3>
              <p className="text-sm text-slate-900 group-hover:text-blue-100 mt-2">iPads e tablets de alta performance.</p>
            </div>
            <div className="group p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#d6a935] to-[#fad394] hover:from-emerald-500 hover:to-emerald-700 transition-all duration-500 cursor-pointer shadow-lg">
              <i className="fas fa-watch text-4xl text-emerald-600 group-hover:text-white mb-6"></i>
              <h3 className="font-bold text-xl group-hover:text-white">Smartwatches</h3>
              <p className="text-sm text-slate-900 group-hover:text-blue-100 mt-2">Relógios inteligentes e wearables.</p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <i className="fab fa-apple text-3xl text-white"></i>
            <i className="fab fa-android text-3xl text-white"></i>
            <i className="fab fa-windows text-3xl text-white"></i>
            <span className="font-bold text-xl italic text-white font-serif underline decoration-white">SAMSUNG</span>
            <span className="font-bold text-xl italic text-white font-sans">DELL</span>
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="bg-gray-800 w-full py-2">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </div>

      {/* PLANOS */}
      <section id="planos" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-emerald-500 mb-4">Planos que cabem no seu bolso</h2>
            <p className="text-slate-400">Escolha o nível de proteção ideal para o seu estilo de vida.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Essencial</h3>
              <p className="text-emerald-600 font-bold text-4xl mb-6">R$ 19,90<span className="text-sm text-gray-400">/mês</span></p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-slate-600"><i className="fas fa-check text-emerald-500 mr-2"></i> Roubo e Furto Qualificado</li>
                <li className="flex items-center text-gray-400"><i className="fas fa-times mr-2"></i> Danos por Líquidos</li>
              </ul>
              <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-bold hover:bg-emerald-50 transition">Escolher Essencial</button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-emerald-600 transform scale-105 flex flex-col relative transition-all duration-300 hover:-translate-y-4 hover:scale-[1.08] hover:shadow-2xl hover:shadow-emerald-500/20 cursor-pointer z-10">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Mais Escolhido</span>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Smart Pro</h3>
              <p className="text-emerald-600 font-bold text-4xl mb-6">R$ 34,90<span className="text-sm text-gray-400">/mês</span></p>
              <ul className="space-y-4 mb-8 flex-1 font-medium">
                <li className="flex items-center text-slate-700"><i className="fas fa-check text-emerald-500 mr-2"></i> Roubo e Furto Qualificado</li>
                <li className="flex items-center text-slate-700"><i className="fas fa-check text-emerald-500 mr-2"></i> Quebra de Tela</li>
                <li className="flex items-center text-slate-700"><i className="fas fa-check text-emerald-500 mr-2"></i> Danos por Líquidos</li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">Proteger Agora</button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Global Plus</h3>
              <p className="text-emerald-600 font-bold text-4xl mb-6">R$ 59,90<span className="text-sm text-gray-400">/mês</span></p>
              <ul className="space-y-4 mb-8 flex-1 text-sm">
                <li className="flex items-center font-bold text-slate-700"><i className="fas fa-globe-americas text-emerald-500 mr-2"></i> Cobertura Internacional</li>
                <li className="flex items-center text-slate-600"><i className="fas fa-check text-emerald-500 mr-2"></i> Tudo do plano Smart Pro</li>
                <li className="flex items-center text-slate-600"><i className="fas fa-check text-emerald-500 mr-2"></i> Aparelho Reserva</li>
              </ul>
              <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] relative overflow-hidden group">
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></span>
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </div>

      {/* CLIENTES */}
      <section className="py-20 bg-gray-800 w-full text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-emerald-500">O que nossos clientes dizem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-600 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
              <div className="flex text-amber-400/70 mb-4 text-xl">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <i className="fas fa-quote-right absolute -right-4 -bottom-4 text-slate-700 text-9xl transition-transform group-hover:scale-110"></i>
              <p className="italic text-slate-200 mb-6">"Acionei o seguro após derrubar meu celular na piscina. Em 4 dias meu aparelho foi reparado e devolvido. Experiência incrível!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Ricardo" className="w-full h-full rounded-full border-2 border-emerald-500 bg-emerald-50" alt="Avatar" />
                </div>
                <div>
                  <p className="font-bold">Ricardo Alvez <i className="fas fa-check-circle text-blue-400 ml-2 text-xs" title="Seguro Verificado"></i></p>
                  <p className="text-xs text-emerald-500">Cliente desde 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-600 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
              <div className="flex text-amber-400/70 mb-4 text-xl">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <i className="fas fa-quote-right absolute -right-4 -bottom-4 text-slate-700 text-9xl transition-transform group-hover:scale-110"></i>
              <p className="italic text-slate-200 mb-6">"Processo de contratação super rápido. Fiz tudo pelo celular e a vistoria foi aprovada em minutos."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo" className="w-full h-full rounded-full border-2 border-emerald-500 bg-emerald-50" alt="Avatar" />
                </div>
                <div>
                  <p className="font-bold">Mariana Costa<i className="fas fa-check-circle text-blue-400 ml-2 text-xs" title="Seguro Verificado"></i></p>
                  <p className="text-xs text-emerald-500">Cliente desde 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="bg-gray-800 w-full py-2">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </div>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            <details className="group bg-emerald-600 rounded-xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                Qual é o período de carência?
                <i className="fas fa-plus text-[#d4af37] transition-transform duration-300"></i>
              </summary>
              <div className="px-6 pb-6 text-gray-100">
                Após a aprovação da vistoria digital do seu aparelho, a cobertura é imediata para roubo e danos acidentais.
              </div>
            </details>
            <details className="group bg-emerald-600 rounded-xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                Preciso da Nota Fiscal do aparelho?
                <i className="fas fa-plus text-[#d4af37] transition-transform"></i>
              </summary>
              <div className="px-6 pb-6 text-gray-100">
                Sim, a Nota Fiscal é indispensável para comprovar o valor e a propriedade do seu eletrônico no momento do sinistro.
              </div>
            </details>
            <details className="group bg-emerald-600 rounded-xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                Como funciona a franquia?
                <i className="fas fa-plus text-[#d4af37] transition-transform"></i>
              </summary>
              <div className="px-6 pb-6 text-gray-100">
                A franquia é um valor fixo pago apenas em caso de sinistro aprovado, variando conforme o plano e modelo do aparelho selecionado.
              </div>
            </details>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Home;