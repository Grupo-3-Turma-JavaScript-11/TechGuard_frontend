import { useContext, useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/categoria";
import { buscar } from "../../../service/Service";
import { useNavigate } from "react-router-dom";
import CardCategoria from "../cardcategoria/CardCategoria";
import { AuthContext } from "../../../contexts/AuthContext";


function ListaCategorias() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setTemas] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
    
    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])

    async function buscarCategorias() {
        try {

            setIsLoading(true)

            await buscar('/categorias', setTemas,
                {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
               handleLogout()
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>


            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#09265e"
                        size={32}
                    />
                </div>
            )}
            <div className="w-full h-screen flex flex-col p-20 items-center ">
           <button className="bg-gradient-to-r from-blue-800 to-blue-400 mb-30 rounded-2xl text-3xl text-white font-semibold h-15 w-120 self-center hover:bg-blue-900" onClick={() => navigate('/cadastrarcategoria')}>Cadastrar nova categoria</button>

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && categorias.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhuma categoria foi encontrada!
                            </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                categorias.map((categoria) => (
                                    <CardCategoria key={categoria.id} categoria={categoria}/>
                                ))
                            }
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default ListaCategorias;