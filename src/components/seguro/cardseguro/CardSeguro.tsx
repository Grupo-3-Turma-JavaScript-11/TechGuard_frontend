import { Link } from "react-router-dom"
import type Seguro from "../../../models/seguro"
import { PencilIcon, ShieldCheckIcon, TrashIcon } from "@phosphor-icons/react";

interface CardSegurosProps {
    seguro: Seguro
}
function CardSeguro({ seguro }: CardSegurosProps) {
    return (

        <div className="group flex-none max-w-3xl mx-auto backdrop-blur-md flex rounded-2xl overflow-hidden justify-between items-center bg-gray-700
                transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border shadow-emerald-500/20 border-white">

  <div className="relative 'bg-gradient-to-br' from-[#D1D5DB] to-[#6B7280] w-28 flex justify-center items-center h-full">
    
    
    <div className="absolute w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
    
    <ShieldCheckIcon size={80} color="#1c834c" className="relative z-10 drop-shadow-md" />
  </div>

  <div className=" w-full flex flex-col flex-wrap">
    <div className='pl-6 mt-2'>
    <p className="text-3xl text-emerald-500  font-medium leading-relaxed">
      {seguro.nomeSeguro}
    </p>

    <p className="text-xl text-gray-300 leading-relaxed">
      {seguro.descricao}
    </p>
</div>
    <div className="flex gap-3 p-3 mb-3 mx-3 w-full ">

      <Link
        to={`/editarseguro/${seguro.id}`}
        className="w-20"
      >
        <button
          className="w-full text-white font-semibold bg-blue-500 rounded-2xl
                     hover:bg-blue-700 hover:scale-[1.03] active:scale-95
                     transition-all duration-200 flex items-center justify-center py-2 shadow-md"
        >
          <PencilIcon size={26} color="#ffffff" />
        </button>
      </Link>

      <Link
        to={`/deletarseguro/${seguro.id}`}
        className="w-20"
      >
        <button
          className="w-full text-white font-semibold bg-red-700 rounded-2xl
                     hover:bg-red-800 hover:scale-[1.03] active:scale-95
                     transition-all duration-200 flex items-center justify-center py-2 shadow-md"
        >
          <TrashIcon size={26} color="#ffffff" />
        </button>
      </Link>

    </div>
  </div>
</div>
    )
}

export default CardSeguro;


//         <div className="group flex-none max-w-3xl mx-auto backdrop-blur-md flex rounded-2xl overflow-hidden justify-between items-center bg-gray-700
//                 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border shadow-emerald-500/20 border-white">       
            
//             <div className="relative bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] w-28 flex justify-center items-center h-full"></div>

//             <div className="absolute w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>



//             <div>
//                 {/* 2. O cabeçalho agora é um "pill" branco arredondado */}
//                 <div className="flex w-full bg-white py-1 px-4 items-center justify-center rounded-full mb-6">
//                     <h3 className='text-base font-bold text-[#1A234E]'>
//                        Nome do Seguro: 
//                     </h3>
//                 </div>

//                 {/* 3. Texto branco e com mais espaço entre as linhas (space-y-2) */}
//                 <div className='px-2 mb-8 text-white space-y-2 font-medium'>
//                     <p>Descrição: {seguro.descricao}</p>
//                     <p>Cobertura: {seguro.cobertura}</p>
//                     <p>Valor do Seguro: {seguro.valorSeguro}</p>
//                     <p>Ano do Dispositivo: {seguro.anoDispositivo}</p>
//                     <p>Data da Contratação: {new Intl.DateTimeFormat("pt-BR", {
//                         dateStyle: 'full',
//                         timeStyle: 'medium',
//                     }).format(new Date(seguro.dataContratacao))}</p>                    
//                     {/* Cores diferentes para Usuario e Categoria para destacar */}
//                     {/* <p className="text-blue-300 pt-2">Usuario: </p> */}
//                     <p className="text-blue-300">Categoria: {seguro.categoria?.descricao} </p>
//                     <p>Usuário: {seguro.usuario?.map(u => u.nome).join(', ')}</p>
//                 </div>
//             </div>

//             {/* 4. Botões lado a lado com margem e cantos arredondados */}
//             <div className="flex gap-3">
//                 <Link to={`/editarseguro/${seguro.id}`} className='w-full text-white bg-indigo-600 
//                     hover:bg-blue-700 flex items-center justify-center py-3 rounded-full font-bold transition-all'>
//                     <button>Editar</button>
//                 </Link>
//                 <Link to={`/deletarseguro/${seguro.id}`} className='text-white bg-red-700 
//                     hover:bg-red-900 w-full flex items-center justify-center py-3 rounded-full font-bold transition-all'>
//                     <button>Deletar</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default CardSeguro

