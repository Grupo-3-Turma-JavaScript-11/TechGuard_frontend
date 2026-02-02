import type Seguro  from "./seguro"

export default interface Categoria {
  id: number
  descricao: string
  nomeCategoria: string

  seguros?: Seguro[]
}