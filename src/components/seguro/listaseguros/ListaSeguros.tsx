import { useNavigate } from "react-router-dom";
import CardSeguro from "../cardseguro/CardSeguro";
import { useContext, useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Seguro from "../../../models/seguro";
import { buscar } from "../../../service/Service";
import { AuthContext } from "../../../contexts/AuthContext";

function ListaSeguros() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [seguro, setSeguro] = useState<Seguro[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarSeguro()    
    }, [seguro.length])

    async function buscarSeguro() {
        try {

            setIsLoading(true)

            await buscar('/seguros', setSeguro, {
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
                <div className="flex justify-center w-full my-8 ">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

             <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative bg-gray-500">
                
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative w-[95%] max-w-2xl rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-white">

            <button className="'bg-gradient-to-r' from-blue-800 to-blue-400 mb-30 rounded-2xl text-3xl text-white font-semibold h-15 w-120 self-center hover:bg-blue-900" onClick={() => navigate('/cadastrarproduto')}>Cadastrar novo Produto</button>

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && seguro.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhum Seguro foi encontrado!
                            </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                seguro.map((seguro) => (
                                    <CardSeguro key={seguro.id} seguro={seguro}/>
                                ))
                            }
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ListaSeguros;