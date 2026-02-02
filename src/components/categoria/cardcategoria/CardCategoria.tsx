import { Link } from 'react-router-dom'
import type Categoria from '../../../models/categoria';

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({ categoria}: CardCategoriaProps) {
    return (
         <div className='bg-gray-200 flex flex-col rounded-2xl overflow-hidden justify-between transform transition duration-300 hover:scale-105 shadow-xl/20'>
            <header className='py-2 px-6 bg-blue-950 text-white text-center font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-2xl h-full text-gray-700 font-medium'>{categoria.descricao}</p>
            
            <div className="flex gap-3 p-2 mb-3">
                <Link to={`/editarcategoria/${categoria.id}`} 
                    className='w-1/2 text-white font-semibold bg-blue-500 rounded-3xl
                    hover:bg-blue-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

               <Link to={`/deletarcategoria/${categoria.id}`} 
                    className='text-white font-semibold bg-red-800 rounded-3xl
                    hover:bg-red-900 w-1/2 flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria;