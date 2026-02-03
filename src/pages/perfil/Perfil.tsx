import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlert } from "../../utils/ToastAlert"
import CardPerfil from "./CardPerfil"

function Perfil() {
  const navigate = useNavigate()
  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlert("Você precisa estar logado", 'info')
      navigate("/")
    }
  }, [usuario.token])

  const fotoPadrao = "https://i.imgur.com/8RK9k6o.png"

  return (
    <div className="min-h-screen bg-[#111827] py-12 px-4 flex justify-center items-start">
      <div className="max-w-2xl w-full bg-[#1f2937] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-700">
        
        {/* Capa Prata */}
        <div className="h-48 w-full bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] relative shadow-inner">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Foto Dinâmica com Borda Dourada */}
        <div className="relative flex justify-center -mt-20 z-10">
          <div className="p-1 bg-[#d6a935] rounded-full shadow-2xl transform transition hover:scale-105 duration-300">
            <img
              className="rounded-full w-40 h-40 object-cover border-8 border-[#1f2937] bg-gray-700 shadow-lg"
              src={usuario.foto && usuario.foto.trim() !== "" ? usuario.foto : fotoPadrao}
              alt={`Foto de ${usuario.nome}`}
            />
          </div>
        </div>

        {/* Conteúdo do Perfil */}
        <div className="px-8 pt-6 pb-12 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            {usuario.nome}
          </h1>
          <p className="text-slate-400 text-lg mt-1">{usuario.email}</p>

          <div className="w-full h-px bg-gray-700 my-8"></div>

          {/* Componente com os detalhes técnicos */}
          <CardPerfil usuario={usuario} />

          {/* Botão de Ação Principal */}
          <div className="mt-10">
            <button className="w-full bg-[#10b981] hover:bg-[#059669] text-gray-900 font-bold py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]">
              Acessar Painel de Seguros
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil