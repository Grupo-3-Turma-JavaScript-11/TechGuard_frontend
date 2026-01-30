import { createContext, type ReactNode, useState } from "react"
import type UsuarioLogin from "../models/usuarioLogin"
import { login } from "../service/Service"
import { ToastAlert } from "../utils/ToastAlert"


interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({} as UsuarioLogin)

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            ToastAlert("Usuário foi autenticado com sucesso!", "sucesso")
        } catch (error) {
            ToastAlert("Os Dados do usuário estão inconsistentes!", "erro")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({} as UsuarioLogin)
        ToastAlert("Usuário deslogado com sucesso!", "sucesso")
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}