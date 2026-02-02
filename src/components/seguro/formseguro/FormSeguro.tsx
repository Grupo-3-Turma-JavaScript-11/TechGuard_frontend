import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import type Categoria from "../../../models/categoria";
import type Seguro from "../../../models/seguro";
import { AuthContext } from "../../../contexts/AuthContext";

function FormSeguro() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    
    const [seguro, setSeguro] = useState<Seguro>({ } as Seguro)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarSeguroPorId(id: string) {
        try {
            await buscar(`/seguros/${id}`, setSeguro, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                // handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
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
            alert('Você precisa estar logado');
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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
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
                await atualizar(`/seguros/${seguro.id}`, seguro, setSeguro, {
                headers: { Authorization: token }
            });

                alert('Seguro atualizado com sucesso')

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    // handleLogout()
                } else {
                    alert('Erro ao atualizar o Seguro')
                }
            }

        } else {
            try {
                await cadastrar(`/seguros`, seguro, setSeguro, {
                headers: { Authorization: token }
            });

                alert('Seguro cadastrado com sucesso');

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    // handleLogout()
                } else {
                    alert('Erro ao cadastrar o Seguro');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.descricao === '';


    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                 {id !== undefined ? 'Editar Seguro' : 'Cadastrar Seguro'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovoSeguro}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nome do Seguro</label>
                    <input
                        type="text"
                        placeholder="Nome do Seguro"
                        name="nomeSeguro"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={seguro.nomeSeguro}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Descrição</label>
                    <input
                        type="text"
                        placeholder="Descricao"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={seguro.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Cobertura</label>
                    <input
                        type="text"
                        placeholder="Cobertura"
                        name="cobertura"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={seguro.cobertura}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Valor do Seguro</label>
                    <input
                        type="number"
                        placeholder="Valor"
                        name="valor"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={seguro.valor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Ano do Dispositivo</label>
                    <input
                        type="text"
                        placeholder="Ano do Dispositivo"
                        name="anoDispositivo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={seguro.anoDispositivo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}                       
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Data da Contratação</label>
                    <input
                        type="date"
                        placeholder="Data da Contratação"
                        name="dataContratacao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={seguro.dataContratacao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' 
                    onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                    <option value="" selected disabled>Selecione uma Categoria</option>
                    
                    {categorias.map((categoria) => (
                        <>
                            <option value={categoria.id} >{categoria.descricao}</option>
                        </>
                    ))}

                </select>
                </div>
                <button 
                    type='submit' 
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
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
    
    );
}

export default FormSeguro;