import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";
import { ToastAlert } from "../../../utils/ToastAlert";
import type Seguro from "../../../models/seguro";

function ListaSegurosCliente() {
  const [seguros, setSeguros] = useState<Seguro[]>([]);
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  async function buscarMeusSeguros() {
    try {
      // Buscamos TODOS (backend padrão)
      await buscar("/seguros", (dados: Seguro[]) => {
        const meusSeguros = dados.filter(item => item.usuario?.id === usuario.id);
        setSeguros(meusSeguros);
      }, {
        Authorization: usuario.token,
      });
    } catch (error) {
      ToastAlert("Erro ao buscar seguros", "erro");
    }
  }

  useEffect(() => {
    buscarMeusSeguros();
  }, [seguros.length]);

  return (
    <div className="container mx-auto my-12 px-4">
       <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-black text-emerald-600 uppercase">Meus Seguros Contratados</h1>
            <button onClick={() => navigate('/home')} className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700">
                Novo Seguro
            </button>
       </div>

       {seguros.length === 0 && (
           <div className="text-center text-gray-500 text-xl">
               Você ainda não possui seguros. Que tal contratar um?
           </div>
       )}

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {seguros.map(seguro => (
               <div key={seguro.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-emerald-500 hover:shadow-2xl transition-shadow">
                   <div className="p-6">
                       <div className="flex justify-between items-start mb-4">
                           <div>
                                <h3 className="text-xl font-bold text-gray-800">{seguro.nomeSeguro}</h3>
                                <p className="text-sm text-gray-500">Contratado em: {new Date(seguro.dataContratacao).toLocaleDateString()}</p>
                           </div>
                           <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Ativo</span>
                       </div>
                       
                       <div className="space-y-3 mb-6">
                           <div className="flex justify-between border-b border-gray-100 pb-2">
                               <span className="text-gray-600">Dispositivo</span>
                               <span className="font-bold text-gray-800">{seguro.anoDispositivo}</span>
                           </div>
                           <div className="flex justify-between border-b border-gray-100 pb-2">
                               <span className="text-gray-600">Cobertura</span>
                               <span className="font-bold text-gray-800">{seguro.cobertura}</span>
                           </div>
                           <div className="flex justify-between items-center pt-2">
                               <span className="text-gray-600">Valor Mensal</span>
                               <span className="text-2xl font-black text-emerald-600">
                                   {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(seguro.valorSeguro)}
                               </span>
                           </div>
                       </div>
                   </div>
               </div>
           ))}
       </div>
    </div>
  );
}

export default ListaSegurosCliente;