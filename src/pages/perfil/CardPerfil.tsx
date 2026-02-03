import type Usuario from '../../models/usuario'

interface CardPerfilProps {
  usuario: Usuario
}

function CardPerfil({ usuario }: CardPerfilProps) {
  return (
    <div className="w-full bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-700 transition-all duration-300 hover:shadow-emerald-500/10">
      
      {/* Header: Gradiente Prata */}
      <div className="h-32 bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] relative">
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          {/* Avatar com detalhe Dourado */}
          <div className="p-1 bg-[#d6a935] rounded-full shadow-xl">
            <div className="w-24 h-24 rounded-full border-4 border-gray-800 bg-gray-700 flex items-center justify-center overflow-hidden">
               {/* Iniciais do usuário caso não tenha foto */}
              <span className="text-2xl font-bold text-white uppercase">
                {usuario.nome?.slice(0, 2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pt-16 pb-10 text-center">
        {/* Informações Básicas */}
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          {usuario.nome}
        </h1>
        <p className="text-emerald-500 font-medium text-sm mt-1">
          {usuario.email}
        </p>

        {/* Seção de Seguros */}
        <div className="mt-8 pt-6 border-t border-gray-700/50 text-left">
          <h2 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
            Meus Seguros Ativos
          </h2>

          <div className="space-y-3">
            {usuario.seguros && usuario.seguros.length > 0 ? (
              usuario.seguros.map(seguro => (
                <div 
                  key={seguro.id} 
                  className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-700 rounded-2xl hover:border-emerald-500/50 transition-colors"
                >
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {seguro.nomeSeguro}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Categoria: <span className="text-emerald-400">{seguro.categoria.descricao}</span>
                    </p>
                  </div>
                  {/* Badge de Status Fake para design */}
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 bg-gray-900/30 rounded-2xl border border-dashed border-gray-700">
                <p className="text-slate-500 text-sm italic">Nenhum seguro cadastrado</p>
              </div>
            )}
          </div>
        </div>

        {/* Rodapé do Card */}
        <div className="mt-8 flex justify-center">
             <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                Membro Vitalício FarmaSaúde
             </span>
        </div>
      </div>
    </div>
  )
}

export default CardPerfil