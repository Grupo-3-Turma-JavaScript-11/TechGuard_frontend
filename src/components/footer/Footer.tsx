function Footer() {


    return (
        <>
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-black text-emerald-500 tracking-tighter mb-6 uppercase">
                TECH<span className="text-white font-bold">GUARD</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Transformando a maneira como você protege seus eletrônicos com tecnologia e transparência.
              </p>
              <div className="flex space-x-4 text-white">
                <a href="#" className="hover:text-emerald-500 transition"><i className="fab fa-instagram text-xl"></i></a>
                <a href="#" className="hover:text-emerald-500 transition"><i className="fab fa-linkedin text-xl"></i></a>
                <a href="#" className="hover:text-emerald-500 transition"><i className="fab fa-whatsapp text-xl"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-emerald-500/30 pb-2 inline-block">Seguros</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition">Seguro Smartphone</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Seguro Notebook</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Seguro Tablet</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Seguro Smartwatch</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-emerald-500/30 pb-2 inline-block">Institucional</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition">Sobre a TechGuard</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-amber-500/30 pb-2 inline-block">Segurança</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition cursor-help">
                  <i className="fas fa-shield-check text-amber-500 mr-2 text-xl"></i>
                  <span className="text-[10px] font-bold text-white uppercase leading-tight">SUSEP<br />123.45</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition cursor-help">
                  <i className="fas fa-lock text-emerald-500 mr-2 text-xl"></i>
                  <span className="text-[10px] font-bold text-white uppercase leading-tight">SSL<br />SECURE</span>
                </div>
              </div>
              <div className="mt-4 p-4 border border-amber-500/20 rounded-xl bg-amber-500/5">
                <p className="text-[10px] text-amber-200/60 leading-tight">
                  <i className="fas fa-crown text-amber-500 mr-1"></i> Atendimento Diamond: Suporte prioritário para todos os planos Premium.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-[11px] leading-relaxed">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p>© 2026 TechGuard Seguros S.A. - CNPJ 00.000.000/0001-00</p>
              <p className="text-center md:text-right max-w-2xl">
                A TechGuard é uma plataforma digital de seguros. A comercialização de seguros é garantida por [Nome da Seguradora Parceira]. O registro deste plano na SUSEP não implica, por parte da autarquia, incentivo ou recomendação à sua comercialização.
              </p>
            </div>
          </div>
        </div>
      </footer>
      </>
    )
}

export default Footer;