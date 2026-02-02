import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlert } from "../../../utils/ToastAlert";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria,setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria,{
                headers: { 
                    Authorization: token
                 }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
               handleLogout()
            }
        }
    }


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias/${categoria.id}`, categoria, setCategoria,
                    {
                headers: { 
                 Authorization: token
                 }
            })
                
                ToastAlert('A categoria foi atualizado com sucesso!', 'sucesso')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlert('Erro ao atualizar a categoria', 'erro')
                }

            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria,
                    {
                headers: { 
                    Authorization: token
                 }
            })
                ToastAlert('A categoria foi cadastrado com sucesso!', 'sucesso')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                   handleLogout();
                } else {
                    ToastAlert('Erro ao cadastrar a categoria', 'erro')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto ">
        <div className=" bg-gray-200 w-1/2 p-10 flex flex-col justify-center rounded-3xl mt-30 shadow-xl/20">
            <h1 className="text-4xl text-center font-semibold">
                {id === undefined ? 'Cadastrar categoria' : 'Editar categoria'}
            </h1>

            <form className="flex flex-col gap-4 mt-5 w-full" 
                  onSubmit={gerarNovaCategoria} >
                <div className="flex flex-col gap-2">                    
                    <label htmlFor="nome" className="ml-3">Nome da categoria</label>
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        name='nomeCategoria'
                        className="border-2 border-blue-950 rounded-4xl p-2 pl-3 focus:outline-blue-700"
                        value={categoria.nomeCategoria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    
                    <label htmlFor="descricao" className="ml-3">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui a categoria"
                        name='descricao'
                        className="border-2 border-blue-950 rounded-4xl p-2 pl-3 focus:outline-blue-700"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />

                </div>
                <button
                    className="rounded-4xl text-white bg-blue-800 font-medium mt-5
                           hover:bg-blue-900 hover:text-white shadow-xl min-w-3/6 py-2 p-3 mx-auto flex justify-center"
                    type="submit">

                    { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                           <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }

                </button>
            </form>
        </div>
        </div>
    );
}

export default FormCategoria;