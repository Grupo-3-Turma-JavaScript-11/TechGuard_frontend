import type UsuarioLogin from '../../models/usuarioLogin'

interface CardPerfilProps {
  // Como usamos os dados do Contexto, o tipo aqui é UsuarioLogin
  usuario: UsuarioLogin 
}

function CardPerfil({ usuario }: CardPerfilProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      
      {/* Card: ID do Cliente */}
      <div className="bg-[#111827]/50 p-6 rounded-2xl border border-gray-700 flex flex-col items-center justify-center gap-1">
        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">ID do Cliente</span>
        <span className="text-white font-mono text-xl">#00{usuario.id}</span>
      </div>

      {/* Card: Tipo de Perfil */}
      <div className="bg-[#111827]/50 p-6 rounded-2xl border border-gray-700 flex flex-col items-center justify-center gap-1">
        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Nível de Acesso</span>
        <span className="text-emerald-500 font-bold text-lg uppercase">
          {usuario.tipo || 'Cliente'}
        </span>
      </div>

      {/* Card Largo: Status */}
      <div className="md:col-span-2 bg-[#111827]/50 p-4 rounded-2xl border border-gray-700 flex items-center justify-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
        <span className="text-slate-300 text-sm font-medium tracking-wide">
          Conta verificada e ativa no sistema
        </span>
      </div>

    </div>
  )
}

export default CardPerfil