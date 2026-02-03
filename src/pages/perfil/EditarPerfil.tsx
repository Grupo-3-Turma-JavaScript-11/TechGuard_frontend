import { useNavigate, useParams } from "react-router-dom"
import type Usuario from "../../models/usuario"
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { atualizar, buscar } from "../../service/Service"


function EditarPerfil() {

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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  async function salvarAlteracoes(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    await atualizar(`/usuarios/${id}`, usuario, setUsuario, {
      headers: {
        Authorization: token,
      },
    })

    alert("Perfil atualizado com sucesso!")
    navigate("/perfil")
  }

  return (
    <div className="container mx-auto my-10 flex justify-center">
      <form 
        onSubmit={salvarAlteracoes}
        className="bg-gray-200 flex flex-col rounded-2xl overflow-hidden shadow-xl/20 w-full max-w-lg"
      >

        <header className="py-2 px-6 bg-blue-950 text-white text-center font-bold text-2xl">
          Editar Perfil
        </header>

        <div className="p-6 flex flex-col gap-4 text-gray-700 font-medium">

          <div>
            <label className="block mb-1">Nome</label>
            <input
              type="text"
              name="nome"
              value={usuario.nome || ""}
              onChange={atualizarEstado}
              className="w-full px-3 py-2 rounded-lg border border-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={usuario.email || ""}
              onChange={atualizarEstado}
              className="w-full px-3 py-2 rounded-lg border border-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Senha</label>
            <input
              type="password"
              name="senha"
              value={usuario.senha || ""}
              onChange={atualizarEstado}
              className="w-full px-3 py-2 rounded-lg border border-gray-400"
              required
            />
          </div>

        </div>

        <div className="flex gap-3 p-3">
          <button 
            type="submit"
            className="w-1/2 text-white font-semibold bg-blue-500 rounded-3xl
            hover:bg-blue-800 flex items-center justify-center py-2"
          >
            Salvar
          </button>

          <button 
            type="button"
            onClick={() => navigate("/perfil")}
            className="w-1/2 text-white font-semibold bg-gray-600 rounded-3xl
            hover:bg-gray-800 flex items-center justify-center py-2"
          >
            Cancelar
          </button>
        </div>

      </form>
    </div>
  )
}

export default EditarPerfil
