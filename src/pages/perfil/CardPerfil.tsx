import type Usuario from '../../models/usuario'

interface CardPerfilProps {
  usuario: Usuario
}

function CardPerfil({ usuario }: CardPerfilProps) {
  return (
    <div className="w-full space-y-6">
      {/* Seção de Seguros */}
      <div className="bg-gray-900/50 rounded-3xl p-6 border border-gray-700">
        <h2 className="text-emerald-500 font-bold uppercase text-xs tracking-[0.2em] mb-4">
          Seguros Contratados
        </h2>

        {usuario.seguros && usuario.seguros.length > 0 ? (
          <div className="space-y-3">
            {usuario.seguros.map((seguro) => (
              <div 
                key={seguro.id} 
                className="flex items-center justify-between p-4 bg-gray-800 rounded-2xl border border-transparent hover:border-emerald-500/30 transition-all group"
              >
                <div>
                  <p className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                    {seguro.nomeSeguro}
                  </p>
                  <p className="text-slate-500 text-xs">
                    Categoria: <span className="text-slate-300">{seguro.categoria.descricao}</span>
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center border border-gray-700 text-emerald-500">
                  ✓
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-sm italic py-4 text-center border border-dashed border-gray-700 rounded-2xl">
            Nenhum seguro ativo no momento.
          </p>
        )}
      </div>

      {/* Grid de Informações Rápidas */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900/50 p-4 rounded-2xl border border-gray-700">
          <span className="text-slate-500 text-[10px] font-bold uppercase block">ID Cliente</span>
          <span className="text-white font-mono">#00{usuario.id}</span>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-2xl border border-gray-700">
          <span className="text-slate-500 text-[10px] font-bold uppercase block">Tipo de Conta</span>
          <span className="text-white">{usuario.tipo}</span>
        </div>
      </div>
    </div>
  )
}

export default CardPerfil