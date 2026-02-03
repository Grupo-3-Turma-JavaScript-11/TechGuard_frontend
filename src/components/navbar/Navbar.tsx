import { Link, useNavigate } from "react-router-dom";
import LogoIcon from '../../assets/img/logoicon.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlert } from "../../utils/ToastAlert";

function Navbar() {

  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [menuAberto, setMenuAberto] = useState(false);

  function logout() {
    handleLogout();
    ToastAlert("Você saiu com sucesso!", "sucesso");
    navigate("/login");
    setMenuAberto(false);
  }

  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <nav className="bg-slate-950/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 text-2xl font-black text-emerald-600 tracking-tighter">
          <img
            src={LogoIcon}
            alt="TechGuard Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
          />
          <div>
            TECH<span className="text-white font-bold">GUARD</span>
          </div>
        </Link>

        {/* LINKS DE NAVEGAÇÃO */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-white/80 uppercase tracking-wide">

          {/* Lógica do Corretor (Dropdowns) */}
          {usuario.tipo === 'corretor' ? (
            <>
              {/* DROPDOWN SEGUROS */}
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

              {/* DROPDOWN CATEGORIAS */}
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
            </>
          ) : (
            // Lógica Cliente/Visitante
            <Link to={usuario.tipo === 'cliente' ? "/meus-seguros" : "/home"} className="text-sm font-bold text-gray-200 uppercase tracking-wide hover:text-emerald-400 transition-all duration-300 hover:scale-105">
              Seguros
            </Link>
          )}

          {/* Links Comuns */}
          <Link to="/sobrenos" className="text-sm font-bold text-gray-200 uppercase tracking-wide hover:text-emerald-400 transition-all duration-300 hover:scale-105">Sobre Nós</Link>
          <Link to="/planos" className="text-sm font-bold text-gray-200 uppercase tracking-wide hover:text-emerald-400 transition-all duration-300 hover:scale-105">Planos</Link>
          <Link to="/faq" className="text-sm font-bold text-gray-200 uppercase tracking-wide hover:text-emerald-400 transition-all duration-300 hover:scale-105">Dúvidas</Link>

          {/* Sinistro (Vermelho Neon) */}
          {usuario.tipo !== 'corretor' && (
            <Link to="/sinistro" className="text-sm font-bold text-red-500 uppercase tracking-wide hover:text-red-400 transition-all duration-300 flex items-center gap-2 hover:scale-105 drop-shadow-[0_0_5px_rgba(239,68,68,0.4)]">
              <i className="fas fa-exclamation-triangle"></i> Sinistro
            </Link>
          )}
        </div>

        {/* ================= LADO DIREITO (LOGIN / PERFIL) ================= */}
        <div className="flex items-center gap-6">

          {!usuario.token ? (
            <div className="flex items-center space-x-6">
              <Link to="/login" className="hidden lg:block text-xs font-black text-emerald-500 uppercase tracking-widest hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37]">
                <i className="fas fa-briefcase mr-1"></i> Sou Corretor
              </Link>
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                Área do Cliente
              </button>
              <button className="md:hidden text-white text-2xl">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          ) : (

            /* ===== PERFIL COM ANIMAÇÃO ===== */
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="flex items-center gap-3 group focus:outline-none"
              >
                {/* Texto do Perfil */}
                <div className="text-right hidden md:block transition-all duration-300 group-hover:translate-x-[-5px]">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none mb-1">Olá,</p>
                  <p className="text-sm font-bold text-white uppercase tracking-wide leading-none group-hover:text-emerald-400 transition-colors">
                    {usuario.nome.split(' ')[0]}
                  </p>
                </div>

                {/* Avatar / Foto */}
                <div className="relative">
                  <div className="w-11 h-11 rounded-full border-2 border-emerald-500 p-0.5 bg-black/50 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                      {usuario.foto ? (
                        <img src={usuario.foto} alt="Perfil" className="w-full h-full object-cover" />
                      ) : (
                        <i className="fas fa-user text-emerald-500 text-lg"></i>
                      )}
                    </div>
                  </div>
                  {/* Bolinha de Status Online */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#050a14] rounded-full"></div>
                </div>

                <i className={`fas fa-chevron-down text-xs text-emerald-500 transition-transform duration-300 ${menuAberto ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown do Perfil */}
              {menuAberto && (
                <div className="absolute right-0 mt-5 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-fade-in-down origin-top-right z-50">
                  <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Conta Conectada</p>
                    <p className="text-sm font-bold text-gray-800 truncate">{usuario.email}</p>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold uppercase mt-1 inline-block">
                      {usuario.tipo}
                    </span>
                  </div>

                  <Link to="/perfil" className="flex items-center px-5 py-3 text-sm font-bold text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors uppercase">
                    <i className="fas fa-id-card w-6 text-center mr-2"></i> Ver Perfil
                  </Link>

                  <div className="h-px bg-gray-100 my-1"></div>

                  <button
                    onClick={logout}
                    className="w-full flex items-center px-5 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors uppercase"
                  >
                    <i className="fas fa-sign-out-alt w-6 text-center mr-2"></i> Sair
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;