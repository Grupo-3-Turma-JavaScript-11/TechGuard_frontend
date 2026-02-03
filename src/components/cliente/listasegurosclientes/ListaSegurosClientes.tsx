import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";
import { ToastAlert } from "../../../utils/ToastAlert";
import type Seguro from "../../../models/seguro";

function ListaSegurosCliente() {
  const [seguros, setSeguros] = useState<Seguro[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  async function buscarMeusSeguros() {
    if (!usuario.token) return;

    try {
      // Passamos o Header como 3º argumento
      await buscar("/seguros", (dados: Seguro[]) => {
        // FILTRO: Usa '==' para comparar ID 4 (number) com ID "4" (string)
        const meus = dados.filter(item => 
            item.usuario && item.usuario.id == usuario.id
        );
        setSeguros(meus);
      }, {
        headers: { Authorization: usuario.token }
      });
    } catch (error: any) {
      if (error.toString().includes('401')) {
          ToastAlert("Sessão expirada", "info");
          handleLogout();
      } else {
          ToastAlert("Erro ao buscar seguros", "erro");
      }
    }
  }

  useEffect(() => {
    buscarMeusSeguros();
  }, [usuario.token]); // Executa quando o token mudar/existir

  return (
    <div className="container mx-auto my-12 px-4">
       <h1 className="text-3xl font-bold text-emerald-600 mb-8">MEUS SEGUROS</h1>

       {seguros.length === 0 ? (
           <p className="text-gray-500">Nenhum seguro encontrado. Contrate um agora!</p>
       ) : (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {seguros.map(seguro => (
                   <div key={seguro.id} className="border p-4 rounded shadow-lg border-l-4 border-emerald-500">
                       <h3 className="text-xl font-bold">{seguro.nomeSeguro}</h3>
                       <p className="text-sm text-gray-600">{seguro.categoria?.nomeCategoria}</p>
                       <p className="mt-2 font-bold text-emerald-700">
                         {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(seguro.valorSeguro)}
                       </p>
                       <p>Dispositivo: {seguro.anoDispositivo}</p>
                   </div>
               ))}
           </div>
       )}
    </div>
  );
}

export default ListaSegurosCliente;