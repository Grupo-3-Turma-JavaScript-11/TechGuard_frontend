import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-black text-emerald-600 tracking-tighter">
          TECH<span className="text-white font-bold">GUARD</span>
        </Link>

        {/* LINKS DE NAVEGAÇÃO */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-white/80 uppercase tracking-wide">
          
          {/* MENU SEGUROS (Mapeado para /produtos no App.tsx) */}
          <div className="relative group">
            <button className="flex items-center hover:text-emerald-500 transition-colors uppercase py-2">
              Seguros
              <i className="fas fa-chevron-down ml-2 text-[10px] group-hover:rotate-180 transition-transform"></i>
            </button>
            <div className="absolute left-0 top-full w-56 bg-slate-900 border-t-2 border-emerald-500 shadow-xl rounded-b-xl hidden group-hover:block">
              <Link to="/seguros" className="block px-4 py-3 text-white hover:bg-emerald-500 transition-colors normal-case font-medium">
                <i className="fas fa-list mr-2 text-emerald-500"></i> Meus Seguros
              </Link>
              <Link to="/cadastrarseguro" className="block px-4 py-3 text-white hover:bg-emerald-500 transition-colors last:rounded-b-xl normal-case font-medium">
                <i className="fas fa-plus-circle mr-2 text-emerald-500"></i> Cadastrar Seguro
              </Link>
            </div>
          </div>

          {/* MENU CATEGORIAS */}
          <div className="relative group">
            <button className="flex items-center hover:text-emerald-500 transition-colors uppercase py-2">
              Categorias
              <i className="fas fa-chevron-down ml-2 text-[10px] group-hover:rotate-180 transition-transform"></i>
            </button>
            <div className="absolute left-0 top-full w-64 bg-slate-900 border-t-2 border-[#D4AF37] shadow-xl rounded-b-xl hidden group-hover:block">
              <Link to="/categorias" className="block px-4 py-3 text-white hover:bg-[#D4AF37] hover:text-slate-900 transition-colors normal-case font-medium">
                <i className="fas fa-tags mr-2 text-[#D4AF37]"></i> Categorias de Seguro
              </Link>
              <Link to="/cadastrarcategoria" className="block px-4 py-3 text-white hover:bg-[#D4AF37] hover:text-slate-900 transition-colors last:rounded-b-xl normal-case font-medium">
                <i className="fas fa-folder-plus mr-2 text-[#D4AF37]"></i> Cadastrar Categoria
              </Link>
            </div>
          </div>

          <Link to="/sobrenos" className="hover:text-emerald-500 transition-colors uppercase">Sobre Nós</Link>
          <a href="#planos" className="hover:text-emerald-500 transition-colors uppercase">Planos</a>
          <a href="#faq" className="hover:text-emerald-500 transition-colors uppercase">Dúvidas</a>
          
          <span className="h-4 w-px bg-slate-700"></span>
          
          <a href="#" className="text-red-500 hover:text-red-600 transition-colors flex items-center">
            <i className="fas fa-exclamation-triangle mr-2 text-xs"></i>Sinistro
          </a>
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="flex items-center space-x-6">
          <Link to="/corretor" className="hidden lg:block text-xs font-black text-emerald-500 uppercase tracking-widest hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37]">
            <i className="fas fa-briefcase mr-1"></i> Sou Corretor
          </Link>
          <button className="bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
            Área do Cliente
          </button>
          <button className="md:hidden text-white text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;