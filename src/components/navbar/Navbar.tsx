import { Link } from "react-router-dom";

 function Navbar() {
    return (
            <nav className="bg-slate-950/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-4 border-emerald-500">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-black text-emerald-600 tracking-tighter">
                    TECH<span className="text-white font-bold">GUARD</span>
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-white/80 uppercase tracking-wide">
                    <a href="#dispositivos" className="hover:text-emerald-500 transition-colors">Dispositivos</a>
                    <a href="#coberturas" className="hover:text-emerald-500 transition-colors">Coberturas</a>
                    <a href="#planos" className="hover:text-emerald-500 transition-colors">Planos</a>
                    <a href="#faq" className="hover:text-emerald-500 transition-colors">Dúvidas</a>
                    <span className="h-4 w-px bg-slate-700"></span>
                    <a href="#" className="text-red-500 hover:text-red-600 transition-colors flex items-center">
                    <i className="fas fa-exclamation-triangle mr-2 text-xs"></i>Sinistro
                    </a>
                </div>

                <div className="flex items-center space-x-6">
                    <a href="#" className="hidden lg:block text-xs font-black text-emerald-500 uppercase tracking-widest hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37]">
                    <i className="fas fa-briefcase mr-1"></i> Sou Corretor
                    </a>
                    <button className="bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-amber-200 transition-all duration-300">
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