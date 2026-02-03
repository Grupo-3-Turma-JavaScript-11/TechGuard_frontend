import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlert } from "../../../utils/ToastAlert";
import { NotepadIcon, ShieldIcon } from "@phosphor-icons/react";

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

    function atualizarEstado(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
        <div className="flex items-center justify-center mx-auto bg-gray-900 w-full pb-20 h-200">
        <div className="absolute w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full -top-10 -left-10 animate-pulse"></div>
  <div className="absolute w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full bottom-0 right-0 animate-pulse"></div>

            <div className="relative w-[95%] max-w-2xl rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-white">
        <h1 className="text-3xl font-semibold mb-2">{id === undefined ? 'Cadastrar categoria' : 'Editar categoria'}</h1>
        <p className="text-white/80 mb-6">
          Cadastre uma nova categoria de seguro 
        </p>
        <form onSubmit={gerarNovaCategoria}>
        <div className="relative mb-4 ">
            <ShieldIcon size={28} color="#2d9a62" className="absolute top-5 left-2 " />
           
          <input
            type="text"
            id="nomeCategoria"
            name="nomeCategoria"
            placeholder="Digite o nome da categoria"
            value={categoria.nomeCategoria}
            className="w-full mt-2 focus:border-none pl-10 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 resize-none
                        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                        transition-all duration-300"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>


        <div className="relative mb-4">
        <NotepadIcon size={28} color="#2d9a62" className="absolute top-3 left-2 " />
        
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Descreva o que essa categoria cobre..."
            value={categoria.descricao}
            onChange={atualizarEstado}
            rows={4}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                        transition-all duration-300"
            />
        </div>

        <button 
          type="submit"
          className="w-full mt-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-400 to-emerald-900 hover:opacity-90 transition hover:bg-gradient-to-br hover:from-[#D1D5DB] hover:to-[#6B7280]">
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