import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlert } from "../../utils/ToastAlert"
import { Navigate, Outlet } from "react-router-dom"


interface PrivateRouteProps {
    rolesPermitidas: string[]
}

export function PrivateRoute ({ rolesPermitidas }: PrivateRouteProps) {
    const { usuario, isLoading} = useContext(AuthContext)

    if(isLoading){
        return <div>Carregando...</div>
    }

    if(!usuario.token){
        ToastAlert("Você precisa estar logado para acessar essa página.", "erro");
        return <Navigate to="/login" replace />
    }

    if(rolesPermitidas && !rolesPermitidas.includes(usuario.tipo)){
        ToastAlert("Você não tem permissão para acessar essa página.", "erro");
        return <Navigate to="/" replace />
    }

    return <Outlet />
}