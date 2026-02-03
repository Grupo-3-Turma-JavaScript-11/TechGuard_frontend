import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
// import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"
import { ClipLoader } from "react-spinners"
import type Seguro from "../../../models/seguro"
import { AuthContext } from "../../../contexts/AuthContext"
import { ToastAlert } from "../../../utils/ToastAlert"
import { ShieldCheckIcon } from "@phosphor-icons/react"

function DeletarSeguro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [seguro, setSeguro] = useState<Seguro>({} as Seguro)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/seguros/${id}`, setSeguro,{
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarSeguro() {
        setIsLoading(true)

        try {
            await deletar(`/seguros/${id}`, {
                headers: { Authorization: token }
            })

            ToastAlert('Seguro deletada com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlert('Erro ao deletar o seguro.', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/seguros")
    }
    
    return (

        <div className="w-full bg-gray-900 h-screen flex flex-col p-20 items-center  ">
            <h1 className='text-4xl text-center pd-4 pt-3 font-medium mb-2 text-white'>Deletar categoria</h1>
            <p className='text-center font-semibold  text-gray-400 mb-20'>
                Você tem certeza de que deseja apagar O Seguro a seguir?</p>

<div className="group flex-none max-w-3xl mx-auto backdrop-blur-md flex rounded-2xl overflow-hidden justify-between items-center bg-gray-700
                transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border shadow-emerald-500/20 border-white pr-4">

  <div className="relative bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] w-28 flex justify-center items-center h-full">
    
    
    <div className="absolute w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
    
    <ShieldCheckIcon size={80} color="#1c834c" className="relative z-10 drop-shadow-md" />
  </div>

  <div className=" w-full flex flex-col flex-wrap">
    <div className='mt-2 w-75 justify-center items-center text-center'>
    <p className="text-3xl text-emerald-500 font-medium leading-relaxed">
      {seguro.nomeSeguro}
    </p>

    <p className="text-xl text-gray-300 leading-relaxed">
      {seguro.cobertura}
    </p>
        <p className="text-xl text-gray-300 leading-relaxed">
      {seguro.descricao}
    </p>
</div>
    <div className="flex gap-3 p-3 mb-3 mx-3 w-full">
        <button onClick={retornar}
          className="w-full text-white font-semibold bg-red-700 rounded-2xl
                     hover:bg-red-800 hover:scale-[1.03] active:scale-95
                     transition-all duration-200 flex items-center justify-center py-2 shadow-md"
        >
          Cancelar
        </button>
    
        <button onClick={deletarSeguro}
          className="w-full text-white font-semibold bg-blue-500 rounded-2xl
                     hover:bg-blue-700 hover:scale-[1.03] active:scale-95
                     transition-all duration-200 flex items-center justify-center py-2 shadow-md"
        >
           { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                            <span>Sim</span>
                        }

        </button>
      

    </div>
  </div>
</div>
</div>
    )
}
export default DeletarSeguro


{/* 
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Seguro</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o seguro a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Seguro
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{seguro.nomeSeguro}</p>
                    <p>{seguro.valorSeguro}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarSeguro}>

                        { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                            <span>Sim</span>
                        }
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarSeguro */}