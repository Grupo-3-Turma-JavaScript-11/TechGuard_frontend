import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
// import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"
import { ClipLoader } from "react-spinners"
import type Seguro from "../../../models/seguro"

function DeletarSeguro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [seguro, setSeguro] = useState<Seguro>({} as Seguro)

    const { id } = useParams<{ id: string }>()

    // const { usuario, handleLogout } = useContext(AuthContext)
    // const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/seguros/${id}`, setSeguro,)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                // handleLogout()
            }
        }
    }

    // useEffect(() => {
    //     if (token === '') {
    //         alert('Você precisa estar logado')
    //         navigate('/')
    //     }
    // }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/seguros/${id}`, )

            alert('Produto apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                // handleLogout()
            }else {
                alert('Erro ao deletar o produto.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Postagem
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{seguro.nomeSeguro}</p>
                    <p>{seguro.valor}</p>
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
                        onClick={deletarProduto}>

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

export default DeletarSeguro