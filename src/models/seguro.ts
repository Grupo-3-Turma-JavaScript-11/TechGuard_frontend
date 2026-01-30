import type Categoria from "./categoria"
import type  Usuario  from "./usuario"

export default interface Seguro {
  id: number
  tipo: string
  valor: number
  vencimento: string
  nomeSeguro: string
  descricao: string
  cobertura: string
  valorSeguro: number
  anoDispositivo:number 
  dataContratacao: Date
  categoria: Categoria
  usuario: Usuario[]
}