import { Link } from "react-router-dom"
import type Seguro from "../../../models/seguro"

interface CardSegurosProps {
    seguro: Seguro
}
function CardSeguro({ seguro }: CardSegurosProps) {
    return (
        <div className='bg-[#1A234E] flex flex-col rounded-[2.5rem] overflow-hidden p-6 w-80 shadow-2xl'>
                
            <div>
                {/* 2. O cabeçalho agora é um "pill" branco arredondado */}
                <div className="flex w-full bg-white py-1 px-4 items-center justify-center rounded-full mb-6">
                    <h3 className='text-base font-bold text-[#1A234E]'>
                       Nome do Seguro: 
                    </h3>
                </div>

                {/* 3. Texto branco e com mais espaço entre as linhas (space-y-2) */}
                <div className='px-2 mb-8 text-white space-y-2 font-medium'>
                    <p>Descrição: {seguro.descricao}</p>
                    <p>Cobertura: {seguro.cobertura}</p>
                    <p>Valor do Seguro: {seguro.valor}</p>
                    <p>Ano do Dispositivo: {seguro.anoDispositivo}</p>
                    <p>Data da Contratação: {new Intl.DateTimeFormat("pt-BR", {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(seguro.dataContratacao))}</p>                    
                    {/* Cores diferentes para Usuario e Categoria para destacar */}
                    {/* <p className="text-blue-300 pt-2">Usuario: </p> */}
                    <p className="text-blue-300">Categoria: {seguro.categoria?.descricao} </p>
                    <p>Usuário: {seguro.usuario?.map(u => u.nome).join(', ')}</p>
                </div>
            </div>

            {/* 4. Botões lado a lado com margem e cantos arredondados */}
            <div className="flex gap-3">
                <Link to={`/editarseguro/${seguro.id}`} className='w-full text-white bg-indigo-600 
                    hover:bg-blue-700 flex items-center justify-center py-3 rounded-full font-bold transition-all'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarseguro/${seguro.id}`} className='text-white bg-red-700 
                    hover:bg-red-900 w-full flex items-center justify-center py-3 rounded-full font-bold transition-all'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardSeguro

