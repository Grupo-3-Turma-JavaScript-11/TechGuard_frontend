import { useContext, useEffect, useState, type FormEvent, type  ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { cadastrar } from "../../../service/Service"; // Ajuste o caminho do Service!
import { ToastAlert } from "../../../utils/ToastAlert";
import type Seguro from "../../../models/seguro";

function FormContratacao() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const location = useLocation();
  
  // Pegamos o plano que veio pelo botão "Contratar" da Home
  const planoEscolhido = location.state as Seguro; 

  const [seguro, setSeguro] = useState<Seguro>({
    id: 0,
    nomeSeguro: usuario.nome,
    descricao: "",
    cobertura: "",
    valorSeguro: 0,
    anoDispositivo: 2024,
    dataContratacao: new Date().toISOString().split('T')[0],
    categoria: null, 
    usuario: null
  });

  useEffect(() => {
    // Se veio um plano da Home, preenchemos os campos fixos
    if (planoEscolhido) {
      setSeguro({
        ...seguro,
        descricao: planoEscolhido.descricao, // Fixo
        cobertura: planoEscolhido.cobertura, // Fixo
        valorSeguro: planoEscolhido.valorSeguro, // Fixo
        categoria: planoEscolhido.categoria, // Fixo
        nomeSeguro: usuario.nome // Garante que é o nome do cliente
      });
    }
  }, [planoEscolhido, usuario.nome]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setSeguro({
      ...seguro,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarContrato(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Montamos o objeto final para enviar pro Back
    // O Back vai esperar o ID do usuario para vincular
    const contratoFinal = {
        ...seguro,
        usuario: { id: usuario.id } // VINCULO CRUCIAL
    };

    try {
      await cadastrar(`/seguros`, contratoFinal, setSeguro, {
        Authorization: usuario.token,
      });
      ToastAlert("Seguro Contratado com Sucesso!", "sucesso");
      navigate("/meus-seguros");
    } catch (error) {
      ToastAlert("Erro ao contratar seguro.", "erro");
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-8">
      <h1 className="text-4xl font-bold text-emerald-600 mb-8 uppercase">
        Finalizar Contratação
      </h1>

      <form onSubmit={gerarContrato} className="w-1/2 flex flex-col gap-4">
        
        {/* === CAMPOS EDITÁVEIS PELO CLIENTE === */}
        
        <div className="flex flex-col gap-2">
          <label className="font-bold text-gray-700">Titular do Seguro (Você)</label>
          <input
            type="text"
            name="nomeSeguro"
            value={seguro.nomeSeguro}
            onChange={atualizarEstado}
            className="border-2 border-emerald-500 rounded p-2 bg-white"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-700">Ano do Dispositivo</label>
            <input
                type="number"
                name="anoDispositivo"
                placeholder="Ex: 2023"
                value={seguro.anoDispositivo}
                onChange={atualizarEstado}
                className="border-2 border-emerald-500 rounded p-2"
                required
            />
        </div>

        <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-700">Data de Início</label>
            <input
                type="date"
                name="dataContratacao"
                value={seguro.dataContratacao}
                onChange={atualizarEstado}
                className="border-2 border-emerald-500 rounded p-2"
                required
            />
        </div>

        {/* === CAMPOS TRAVADOS (READ-ONLY) === */}
        <div className="p-4 bg-gray-100 rounded-lg border border-gray-300 mt-4">
            <h3 className="text-lg font-bold text-gray-500 mb-4 border-b pb-2">Detalhes do Plano (Fixo)</h3>
            
            <div className="grid grid-cols-2 gap-4 opacity-70">
                <div>
                    <label className="text-sm font-bold text-gray-500">Valor Mensal</label>
                    <input 
                        value={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(seguro.valorSeguro)}
                        disabled 
                        className="w-full bg-transparent font-bold text-emerald-600 text-xl"
                    />
                </div>
                <div>
                    <label className="text-sm font-bold text-gray-500">Cobertura</label>
                    <input value={seguro.cobertura} disabled className="w-full bg-transparent font-bold" />
                </div>
                <div className="col-span-2">
                    <label className="text-sm font-bold text-gray-500">Descrição</label>
                    <input value={seguro.descricao} disabled className="w-full bg-transparent" />
                </div>
            </div>
        </div>

        <button
          type="submit"
          className="rounded text-slate-100 bg-emerald-600 hover:bg-emerald-700 w-1/2 py-3 mx-auto flex justify-center font-bold text-xl mt-4 shadow-lg transition-all hover:scale-105"
        >
          Confirmar Contratação
        </button>
      </form>
    </div>
  );
}

export default FormContratacao;