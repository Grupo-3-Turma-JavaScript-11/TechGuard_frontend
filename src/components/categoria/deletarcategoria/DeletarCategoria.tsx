import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/categoria"
import { ClipLoader } from "react-spinners"
import { buscar, deletar } from "../../../service/Service"
import { AuthContext } from "../../../contexts/AuthContext"
import { ToastAlert } from "../../../utils/ToastAlert"
import { ShieldCheckIcon} from "@phosphor-icons/react"



function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        nomeCategoria: ''
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)
    

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { 
                    Authorization: token
                 }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlert('Você precisa estar logado', 'erro')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
                headers: {'Authorization': token}            
            })


            ToastAlert('Categoria deletada com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlert('Erro ao deletar a categoria.', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }
    
    return (

        <div className="w-full bg-gray-900 h-screen flex flex-col p-20 items-center  ">
            <h1 className='text-4xl text-center pd-4 pt-3 font-medium mb-2 text-white'>Deletar categoria</h1>
            <p className='text-center font-semibold  text-gray-400 mb-20'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>

             <div className="group flex-none max-w-3xl mx-auto backdrop-blur-md flex rounded-2xl overflow-hidden justify-between items-center bg-gray-700
                transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border shadow-emerald-500/20 border-white pr-4">

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
    <div className="flex gap-3 p-3 mb-3 mx-3 w-full">
        <button onClick={retornar}
          className="w-full text-white font-semibold bg-red-700 rounded-2xl
                     hover:bg-red-800 hover:scale-[1.03] active:scale-95
                     transition-all duration-200 flex items-center justify-center py-2 shadow-md"
        >
          Cancelar
        </button>
    
        <button onClick={deletarCategoria}
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
export default DeletarCategoria;