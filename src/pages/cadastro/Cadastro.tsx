import { AddressBookIcon, EnvelopeSimpleIcon, ImageIcon, KeyIcon, UserIcon } from "@phosphor-icons/react"
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import type Usuario from "../../models/usuario"
import { ToastAlert } from "../../utils/ToastAlert"
import { cadastrarUsuario } from "../../service/Service";
import { ClipLoader } from "react-spinners"


export default function Cadastro() {
    const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const[confirmarSenha, setConfirmarSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    foto: ''
  })
  
  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/')
  }


  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario, 
      [e.target.name]: e.target.value 
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmarSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        await cadastrarUsuario(`/usuarios`, usuario, setUsuario)
        ToastAlert('Usuário cadastrado com sucesso!', 'sucesso')
      }catch(error){
        ToastAlert('Erro ao cadastrar o usuário!', 'erro')
      }
    }else{
      ToastAlert('Dados do usuário inconsistentes! Verifique as informações do cadastro.', 'erro')
      setUsuario({...usuario, senha: ''})
      setConfirmarSenha('')
    }

    setIsLoading(false)
  }
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/fundo3.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-[95%] max-w-2xl rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-white">
        <h1 className="text-3xl font-semibold mb-2">Cadastro</h1>
        <p className="text-white/80 mb-6">
          Insira as suas credenciais 
        </p>
      <form  onSubmit={cadastrarNovoUsuario}>
        <div className="relative mb-4 ">
           <UserIcon size={28} color="#2d9a62" className="absolute top-3 left-2 "/>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
            value = {usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="relative mb-4 ">
           <EnvelopeSimpleIcon size={32} color="#2d9a62" className="absolute top-3 left-2" />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
            value = {usuario.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="relative mb-4 ">
           <AddressBookIcon size={32} color="#2d9a62" className="absolute top-3 left-2" />
          <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Tipo"
            className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
            value = {usuario.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
         <div className="relative mb-4 ">
           <ImageIcon size={32} color="#2d9a62" className="absolute top-3 left-2" />
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
            value = {usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="relative mb-4">
            <KeyIcon size={28} color="#2d9a62" className="absolute top-3 left-2" />
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="w-full pl-12 pr-12 py-3 rounded-xl bg-transparent border border-white/40 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-white/80"
            value = {usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="relative mb-4">
            <KeyIcon size={28} color="#2d9a62" className="absolute top-3 left-2" />
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            className="w-full pl-12 pr-12 py-3 rounded-xl bg-transparent border border-white/40 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-white/80"
            value={confirmarSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
          />
        </div>

        <button type="submit" className="w-full mt-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-lime-500 to-emerald-700 hover:opacity-90 transition">
          Cadastrar
        </button>
        </form>
      </div>
    </div>
  )
}