import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import type Usuario from "../../models/usuario"
import { buscar } from "../../service/Service"
import CardPerfil from "./CardPerfil"
// Importe seu contexto de autenticação aqui se tiver um, 
// ou pegue o token do localStorage como no exemplo abaixo:

function Perfil() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>()
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  // Recuperando o token (ajuste conforme a chave que você usa no seu projeto)
  const token = localStorage.getItem('token') 

  async function buscarUsuario() {
    try {
      // Passando a URL, a função de estado e o objeto de Header
      await buscar(`/usuarios/${id}`, setUsuario, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error: any) {
      if (error.toString().includes('403') || error.toString().includes('401')) {
        alert('Sessão expirada, por favor logue novamente.')
        navigate('/login')
      }
    }
  }

  useEffect(() => {
    // Proteção básica: se não tiver token, nem tenta buscar
    if (token === '') {
      alert('Você precisa estar logado')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id) {
      buscarUsuario()
    }
  }, [id])

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 flex justify-center items-start">
      <div className="w-full max-w-md">
        {usuario.id ? (
          <CardPerfil usuario={usuario} />
        ) : (
          <div className="flex flex-col items-center gap-4 mt-20">
             <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
             <p className="text-slate-400 font-medium">Carregando perfil de {id}...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Perfil