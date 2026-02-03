import { useNavigate } from "react-router-dom";
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

            <div
                className="min-h-screen flex flex-col items-center bg-cover bg-center relative"
                style={{
                    backgroundImage:"url('/fundo3.jpg')",
                    }}
            >
            <div className="absolute inset-0 bg-black/40" />

            <button className=" mt-10 mb-6 self-center rounded-2xl text-xl text-white font-semibold px-8 py-3 bg-emerald-500 hover:bg-emerald-600 transition" onClick={() => navigate('/cadastrarseguro')}>Cadastrar novo Seguro</button>
            
            <div className="relative w-[95%] max-w-2xl rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-white">

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && seguro.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhum Seguro foi encontrado!
                            </span>
                    )}

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-white/20 rounded-lg overflow-hidden">

                            {/* Cabeçalho */}
                            <thead className="bg-emerald-600 text-white rounded-xl">
                                <tr>
                                    <th className="px-4 py-3 text-left">ID</th>
                                    <th className="px-4 py-3 text-left">Nome</th>
                                    <th className="px-4 py-3 text-left">Descrição</th>
                                    <th className="px-4 py-3 text-left">Cobertura</th>
                                    <th className="px-4 py-3 text-left">Valor</th>
                                    <th className="px-4 py-3 text-left">Ano do Dispositivo</th>
                                    <th className="px-4 py-3 text-left">Data de Contratação</th>
                                    <th className="px-4 py-3 text-center">Categoria</th>
                                </tr>
                            </thead>

                            {/* Corpo */}
                            <tbody className="bg-white/10 backdrop-blur-md">

                                {seguro.map((seguro) => (
                                    <tr 
                                     key={seguro.id}
                                     className="border-b border-white/20 hover:bg-white/10 transition"
                                    >
                                        <td className="px-4 py-3">{seguro.id}</td>
                                        <td className="px-4 py-3">{seguro.nomeSeguro}</td>
                                        <td className="px-4 py-3">{seguro.descricao}</td>
                                        <td className="px-4 py-3">{seguro.cobertura}</td>
                                        <td className="px-4 py-3">R$ {seguro.valorSeguro}</td>
                                        <td className="px-4 py-3">{seguro.anoDispositivo}</td>
                                        <td className="px-4 py-3">{seguro.dataContratacao}</td>
                                        <td className="px-4 py-3">{seguro.Categoria}</td>
          
                                        <td className="px-4 py-3 flex gap-2 justify-center">
                                        <button 
                                        className="bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded-lg"
                                        >
                                        Editar
                                        </button>

                                        <button 
                                        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg"
                                        >
                                        Excluir
                                        </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ListaSeguros;