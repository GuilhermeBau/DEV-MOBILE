import { useState } from "react";

function Botao(props) {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", feita: false }
  ]);

  const [textoInput, setTextoInput] = useState("");

  function adicionar() {
    if (textoInput !== "") {
      const novaTarefa = {
        id: Math.random(),
        texto: textoInput,
        feita: false
      };

      setTarefas([...tarefas, novaTarefa]);
      setTextoInput("");
    }
  }

  function marcarFeita(idSelecionado) {
    const listaNova = tarefas.map((tarefa) => {
      if (tarefa.id === idSelecionado) {
        return { ...tarefa, feita: !tarefa.feita };
      } else {
        return tarefa;
      }
    });

    setTarefas(listaNova);
  }

  function deletar(idSelecionado) {
    const listaFiltrada = tarefas.filter((tarefa) => {
      return tarefa.id !== idSelecionado;
    });

    setTarefas(listaFiltrada);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ color: "#646cff", borderBottom: "2px solid #646cff", paddingBottom: "0.5rem" }}>
        Lista TO DO 🚀
      </h1>

      <div>
        <input
          type="text"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
        />
        <Botao onClick={adicionar}>Adicionar</Botao>
      </div>

      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>

            <input
              type="checkbox"
              checked={tarefa.feita}
              onChange={() => marcarFeita(tarefa.id)}
            />

            {tarefa.feita ? (
              <strike>{tarefa.texto}</strike>
            ) : (
              <span>{tarefa.texto}</span>
            )}

            {" "}
            <Botao onClick={() => deletar(tarefa.id)}>🗑️</Botao>

          </li>
        ))}
      </ul>
    </div>
  );
}
