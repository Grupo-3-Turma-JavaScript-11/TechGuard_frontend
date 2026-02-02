import { Link } from 'react-router-dom'
import type Usuario from '../../models/usuario'


interface CardPerfilProps {
  usuario: Usuario
}

function CardPerfil({ usuario }: CardPerfilProps) {
  return (
    <div className='bg-gray-200 flex flex-col rounded-2xl overflow-hidden justify-between transform transition duration-300 hover:scale-105 shadow-xl/20'>
      
      <header className='py-2 px-6 bg-blue-950 text-white text-center font-bold text-2xl'>
        Meu Perfil
      </header>

      <div className='p-6 text-gray-700 flex flex-col gap-2 text-lg font-medium'>
        <p><span className="font-bold">Nome:</span> {usuario.nome}</p>
        <p><span className="font-bold">Email:</span> {usuario.email}</p>

        <div className="mt-2">
          <p className="font-bold">Seguros:</p>

          {usuario.seguros && usuario.seguros.length > 0 ? (
            <ul className="list-disc ml-5 space-y-1">
              {usuario.seguros.map(seguro => (
                <li key={seguro.id}>
                  <span className="font-semibold">
                    {seguro.nomeSeguro}
                  </span>
                  {" "} - Categoria:{" "}
                  <span className="text-blue-800">
                    {seguro.categoria.descricao}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Nenhum seguro cadastrado</p>
          )}
        </div>
      </div>

      <div className="flex gap-3 p-2 mb-3">
        <Link 
          to={`/editarperfil/${usuario.id}`} 
          className='w-1/2 text-white font-semibold bg-blue-500 rounded-3xl
          hover:bg-blue-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>

        <Link 
          to={`/deletarperfil/${usuario.id}`} 
          className='text-white font-semibold bg-red-800 rounded-3xl
          hover:bg-red-900 w-1/2 flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>

    </div>
  )
}

export default CardPerfil
