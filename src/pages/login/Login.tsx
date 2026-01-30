import { KeyIcon, UserIcon } from "@phosphor-icons/react"


export default function Login() {

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

        <div className="relative mb-4 ">
           <UserIcon size={28} color="#2d9a62" className="absolute top-3 left-2 "/>
          <input
            type="text"
            placeholder="Email"
            className="w-full focus:border-none pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/40 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>


        <div className="relative mb-4">
            <KeyIcon size={28} color="#2d9a62" className="absolute top-3 left-2" />
          <input
            type="password"
            placeholder="Senha"
            className="w-full pl-12 pr-12 py-3 rounded-xl bg-transparent border border-white/40 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-white/80"
          />
        </div>

        <button className="w-full mt-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-lime-500 to-emerald-700 hover:opacity-90 transition">
          Login
        </button>

        <p className="text-center text-sm text-white/80 mt-6">
          Nâo tem uma conta?{" "}
          <span className="font-semibold text-lime-400 cursor-pointer hover:underline">
            Cadastrar
          </span>
        </p>
        
      </div>
    </div>
  )
}