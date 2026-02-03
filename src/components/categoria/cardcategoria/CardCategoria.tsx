import { Link } from 'react-router-dom'
import type Categoria from '../../../models/categoria';
import { PencilIcon, ShieldCheckIcon, TrashIcon } from '@phosphor-icons/react';

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
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
      {categoria.nomeCategoria}
    </p>

    <p className="text-xl text-gray-300 leading-relaxed">
      {categoria.descricao}
    </p>
</div>
    <div className="flex gap-3 p-3 mb-3 mx-3 w-full ">

      <Link
        to={`/editarcategoria/${categoria.id}`}
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
        to={`/deletarcategoria/${categoria.id}`}
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

export default CardCategoria;