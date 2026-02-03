import { KeyIcon, UserIcon } from "@phosphor-icons/react"
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import type UsuarioLogin from "../../models/usuarioLogin";
import { ClipLoader } from "react-spinners";


function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    useEffect(() => {
        if (usuario.token !== "") {
        if (usuario.tipo === "corretor" || usuario.tipo === "admin") {
          navigate('/home'); 
      } else {
          navigate('/home'); 
    }
  }
}, [usuario, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
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
        <h1 className="text-3xl font-semibold mb-2">Login</h1>
        <p className="text-white/80 mb-6">
          Insira as suas credenciais 
        </p>
        <form onSubmit={login}>
        <div className="relative mb-4 ">
           <UserIcon size={28} color="#2d9a62" className="absolute top-3 left-2 "/>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
            value = {usuarioLogin.email}
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
            value = {usuarioLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button 
          type="submit"
          className="w-full mt-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-400 to-emerald-700 hover:opacity-90 transition">
          { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                            <span>Entrar</span>
                        }
        </button>

        <p className="text-center text-sm text-white/80 mt-6">
          Nâo tem uma conta?{" "}
            <Link to="/cadastro" className="ont-semibold text-lime-400 cursor-pointer hover:underline">
                            Cadastre-se
            </Link>
        </p>
        </form>
      </div>
    </div>
  )
}

export default Login