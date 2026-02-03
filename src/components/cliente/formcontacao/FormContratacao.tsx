import {  useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

import { buscar, cadastrar } from "../../../service/Service";
import { ToastAlert } from "../../../utils/ToastAlert";
import type Seguro from "../../../models/seguro";
import type Categoria from "../../../models/categoria";

function FormContratacao() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const location = useLocation();
  const planoEscolhido = location.state as Seguro;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // Estado do Formulário
  const [seguro, setSeguro] = useState<Seguro>({
    id: 0,
    nomeSeguro: usuario.nome || "", 
    descricao: "",
    cobertura: "",
    valorSeguro: 0,
    anoDispositivo: 0,
    dataContratacao: new Date().toISOString().split('T')[0], // Hoje
    categoria: null,
    usuario: null
  });

  useEffect(() => {
    if (usuario.token === "") {
        ToastAlert("Você precisa estar logado!", "info");
        navigate("/login");
        return;
    }


    buscar('/categorias', setCategorias, {
        headers: { Authorization: usuario.token }
    });

    if (planoEscolhido) {
      setSeguro(prev => ({
        ...prev,
        descricao: planoEscolhido.descricao,
        cobertura: planoEscolhido.cobertura,
        valorSeguro: planoEscolhido.valorSeguro,
        categoria: planoEscolhido.categoria, // Tenta pegar a categoria do plano, se tiver
      }));
    }
  }, [usuario.token, planoEscolhido]);

  // 2. Função para atualizar os inputs (Convertendo números)
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    // Se for ano ou valor, força virar Número
    const valorTratado = (name === "anoDispositivo" || name === "valorSeguro") ? Number(value) : value;

    setSeguro({ ...seguro, [name]: valorTratado });
  }

  // 3. Função para selecionar a Categoria no Dropdown
  function handleCategoriaChange(e: ChangeEvent<HTMLSelectElement>) {
    const idSelecionado = Number(e.target.value);
    const catEncontrada = categorias.find(c => c.id === idSelecionado);
    setSeguro({ ...seguro, categoria: catEncontrada || null });
  }

  // 4. Enviar para o Backend (O Pulo do Gato)
  async function gerarContrato(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validação Manual
    if (!seguro.categoria) {
        ToastAlert("Selecione o tipo do dispositivo!", "erro");
        return;
    }

    // Monta o objeto Limpo
    const contratoFinal = {
        nomeSeguro: seguro.nomeSeguro,
        descricao: seguro.descricao,
        cobertura: seguro.cobertura,
        valorSeguro: Number(seguro.valorSeguro),
        anoDispositivo: Number(seguro.anoDispositivo),
        dataContratacao: seguro.dataContratacao,
        usuario: { id: usuario.id }, // VINCULA AO USUÁRIO LOGADO
        categoria: { id: seguro.categoria.id } // VINCULA A CATEGORIA
    };

    try {
      await cadastrar(`/seguros`, contratoFinal, setSeguro, {
        headers: { Authorization: usuario.token } // HEADER OBRIGATÓRIO
      });
      
      ToastAlert("Seguro Contratado com Sucesso!", "sucesso");
      navigate("/meus-seguros"); // Redireciona para a lista
    } catch (error: any) {
      if (error.toString().includes('401')) {
          handleLogout();
      } else {
          console.log(error); // Ajuda a debugar
          ToastAlert("Erro ao contratar. Verifique os dados.", "erro");
      }
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-8">
      <h1 className="text-4xl font-bold text-emerald-600 mb-8">FINALIZAR CONTRATAÇÃO</h1>
      
      <form onSubmit={gerarContrato} className="w-1/2 flex flex-col gap-4">
        {/* Input Nome */}
        <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-700">Titular</label>
            <input type="text" name="nomeSeguro" value={seguro.nomeSeguro} onChange={atualizarEstado} className="border p-2 rounded" required />
        </div>

        {/* Select Categoria (Importante!) */}
        <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-700">Tipo de Dispositivo</label>
            <select name="categoria" onChange={handleCategoriaChange} className="border p-2 rounded" required defaultValue="">
                <option value="" disabled>Selecione...</option>
                {categorias.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.nomeCategoria}</option>
                ))}
            </select>
        </div>

        {/* Input Ano */}
        <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-700">Ano do Dispositivo</label>
            <input type="number" name="anoDispositivo" value={seguro.anoDispositivo} onChange={atualizarEstado} className="border p-2 rounded" required />
        </div>

        {/* Input Data */}
        <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-700">Início Vigência</label>
            <input type="date" name="dataContratacao" value={seguro.dataContratacao} onChange={atualizarEstado} className="border p-2 rounded" required />
        </div>

        {/* Resumo Fixo */}
        <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold">Resumo do Plano</h3>
            <p>Valor: R$ {seguro.valorSeguro}</p>
            <p>Cobertura: {seguro.cobertura}</p>
        </div>

        <button type="submit" className="bg-emerald-600 text-white font-bold py-3 rounded hover:bg-emerald-700">
            Confirmar Contratação
        </button>
      </form>
    </div>
  );
}

export default FormContratacao;