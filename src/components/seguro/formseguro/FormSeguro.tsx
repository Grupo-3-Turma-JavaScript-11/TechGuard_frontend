import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import type Categoria from "../../../models/categoria";
import type Seguro from "../../../models/seguro";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlert } from "../../../utils/ToastAlert";
import { CalendarIcon, CalendarPlusIcon, CurrencyCircleDollarIcon, ListIcon, NotepadIcon, ShieldCheckIcon, ShieldIcon } from "@phosphor-icons/react";

function FormSeguro() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({id: 0, nomeCategoria: "", descricao: "", })
    
    const [seguro, setSeguro] = useState<Seguro>({} as Seguro)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarSeguroPorId(id: string) {
        try {
            await buscar('/seguros/', setSeguro, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/`, setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
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
            ToastAlert('Você precisa estar logado', 'sucesso');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarSeguroPorId(id)
        }
    }, [id])

    useEffect(() => {
        setSeguro({
            ...seguro,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setSeguro({
            ...seguro,
            [e.target.name]: e.target.value,
            categoria: categoria,
        });
    }

    function retornar() {
        navigate('/seguros');
    }

    async function gerarNovoSeguro(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/seguros/`, seguro, setSeguro, {
                headers: { Authorization: token }
            });

                ToastAlert('Seguro atualizado com sucesso', 'sucesso')

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlert('Erro ao atualizar o Seguro', 'erro')
                }
            }

        } else {
            try {
                await cadastrar(`/seguros`, seguro, setSeguro, {
                headers: { Authorization: token }
            });

                ToastAlert('Seguro cadastrado com sucesso', 'sucesso');

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlert('Erro ao cadastrar o Seguro', 'erro');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.descricao === '';


    return (

            <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative bg-gray-900"
    >
         <div className="absolute w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full -top-10 -left-10 animate-pulse"></div>
  <div className="absolute w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full bottom-0 right-0 animate-pulse"></div>
    
            <div className="relative w-[95%] max-w-2xl rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-white">
            <h1 className="text-3xl font-semibold mb-2">
                 {id !== undefined ? 'Editar Seguro' : 'Cadastrar Seguro'}
            </h1>
            <p className="text-white/80 mb-6">Insira as informações</p>

            <form onSubmit={gerarNovoSeguro}>
                <div className="relative mb-4">
                    <ShieldIcon size={28} color="#2d9a62" className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        // id="nomeSeguro"
                        placeholder="Nome do Cliente"
                        name="nomeSeguro"
                        required
                        className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 resize-none
                        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                        transition-all duration-300"
                        value={seguro.nomeSeguro}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                            <div className="relative mb-4">
                        <NotepadIcon size={28} color="#2d9a62" className="absolute top-3 left-2 " />
                        
                        <textarea
                            id="descricao"
                            name="descricao"
                            placeholder="Descreva o que essa categoria cobre..."
                            value={seguro.descricao}
                            onChange={atualizarEstado}
                            rows={4}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                                        transition-all duration-300"
                            />
                        </div>
                <div className="relative mb-4">
                    <ShieldCheckIcon size={28} color="#2d9a62" className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Cobertura"
                        name="cobertura"
                        required
                        className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 resize-none
                        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                        transition-all duration-300"
                        value={seguro.cobertura}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="relative mb-4">
                    <CurrencyCircleDollarIcon size={28} color="#2d9a62" className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                        type="number"
                        placeholder="Valor do Seguro (R$)"
                        name="valorSeguro"
                        required
                        className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 resize-none
                        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                        transition-all duration-300"
                        value={seguro.valorSeguro}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="relative mb-4">
                    <CalendarIcon size={28} color="#2d9a62" className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                        type="number"
                        placeholder="Ano do Dispositivo"
                        name="anoDispositivo"
                        required
                        className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 resize-none
                        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                        transition-all duration-300"
                        value={seguro.anoDispositivo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}                       
                    />
                </div>
                <div className="relative mb-4">
                    <CalendarPlusIcon size={28} color="#2d9a62" className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                        type="date"
                        placeholder="Data da Contratação"
                        name="dataContratacao"
                        required
                        className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 resize-none
                        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                        transition-all duration-300"
                        value={seguro.dataContratacao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="relative mb-4">
                    <ListIcon size={28} color="#2d9a62" className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <select name="categoria" id="categoria" className='w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40  resize-none placeholder:text-black
                        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400
                        transition-all duration-300' 
                    onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                    <option value="" selected disabled>Selecione uma Categoria</option>
                    
                    {categorias.map((categoria) => (
                        <>
                            <option value={categoria.id}>{categoria.descricao}</option>
                        </>
                    ))}

                </select>
                </div>
                <button 
                    type='submit' 
                    className="w-full py-3 rounded-xl font-semibold text-white transition
                    bg-gradient-to-r from-emerald-400 to-emerald-900
                    hover:bg-gradient-to-br hover:from-[#D1D5DB] hover:to-[#6B7280] mt-5"
                    disabled={carregandoCategoria}
                >
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

export default FormSeguro;