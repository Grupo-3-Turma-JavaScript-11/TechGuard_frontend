import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Usuario from "../../models/usuario"
import { buscar, deletar } from "../../service/Service"


function DeletarPerfil() {

  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const token = localStorage.getItem("token")

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  async function buscarUsuario() {
    await buscar(`/usuarios/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    })
  }

  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado!")
      navigate("/login")
    } else {
      buscarUsuario()
    }
  }, [id])

  async function deletarConta() {
    await deletar(`/usuarios/${id}`, {
      headers: {
        Authorization: token,
      },
    })

    alert("Conta deletada com sucesso!")
    localStorage.clear()
    navigate("/")
  }

  return (
    <div className="container mx-auto my-10 flex justify-center">
      <div className="bg-gray-200 flex flex-col rounded-2xl overflow-hidden shadow-xl/20 w-full max-w-lg">

        <header className="py-2 px-6 bg-red-900 text-white text-center font-bold text-2xl">
          Deletar Perfil
        </header>

        <div className="p-6 text-gray-700 font-medium text-center">
          <p className="text-lg mb-2">
            Tem certeza que deseja deletar este usuário?
          </p>

          <p className="text-xl font-bold text-red-700">
            {usuario.nome}
          </p>

          <p className="text-md text-gray-600">
            {usuario.email}
          </p>
        </div>

        <div className="flex gap-3 p-3">
          <button 
            onClick={() => navigate("/perfil")}
            className="w-1/2 text-white font-semibold bg-gray-600 rounded-3xl
            hover:bg-gray-800 flex items-center justify-center py-2"
          >
            Cancelar
          </button>

          <button 
            onClick={deletarConta}
            className="w-1/2 text-white font-semibold bg-red-800 rounded-3xl
            hover:bg-red-900 flex items-center justify-center py-2"
          >
            Deletar
          </button>
        </div>

      </div>
    </div>
  )
}

export default DeletarPerfil
