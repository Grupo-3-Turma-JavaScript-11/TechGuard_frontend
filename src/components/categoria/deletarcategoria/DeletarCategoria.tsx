import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/categoria"
import { ClipLoader } from "react-spinners"
import { buscar, deletar } from "../../../service/Service"
import { AuthContext } from "../../../contexts/AuthContext"



function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

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
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categoria/${id}`, {
             headers: {
                    'Authorization': token
             }
            
            })


            alert('Categoria deletada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                alert('Erro ao deletar a categoria.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center pd-4 pt-3 font-medium mb-2'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-8 text-gray-500'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='flex flex-col rounded-2xl overflow-hidden justify-between bg-gray-200'>
                <header 
                    className='py-2 px-6 bg-blue-950 text-white font-bold text-2xl text-center'>
                    Categoria
                </header>
                <p className='p-8 text-2xl h-full text-gray-700 font-medium'>{categoria.descricao}</p>
                <div className="flex gap-3 p-2 mb-3">
                    <button 
                        className='text-white font-semibold bg-red-700 rounded-3xl
                    hover:bg-red-900 w-1/2 flex items-center justify-center'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-1/2 text-white font-semibold bg-blue-500 rounded-3xl
                    hover:bg-blue-900 flex items-center justify-center py-2'
                                   onClick={deletarCategoria}>

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
export default DeletarCategoria;