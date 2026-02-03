import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type Usuario from "../../models/usuario"
import { buscar } from "../../service/Service"
import CardPerfil from "./CardPerfil"


function Perfil() {

  const { id } = useParams<{ id: string }>()
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  async function buscarUsuario() {
    await buscar(`/usuarios/${id}`, setUsuario)
  }

  useEffect(() => {
    buscarUsuario()
  }, [id])

  return (
    <div className="container mx-auto my-10 flex justify-center">
      <div className="w-full max-w-lg">
        <CardPerfil usuario={usuario} />
      </div>
    </div>
  )
}

export default Perfil
