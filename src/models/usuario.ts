import type  Seguro from "./seguro"

export default interface Usuario {
  id: number
  nome: string
  email: string
  senha: string
  tipo?: string
  foto?: string

  seguros?: Seguro[]
  
}