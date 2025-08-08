import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Titulo from "../components/Titulo";

export default function Mural() {
  const [aviso, setAviso] = useState(""); 
  const [avisos, setAvisos] = useState([]); 

  function handleSubmit(e) {
    e.preventDefault(); 

    if (aviso.trim() === "") return; 

    setAvisos([...avisos, aviso]);

    setAviso("");
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main className="pt-28 pb-16 px-4 max-w-md mx-auto">
        <Titulo titulo="Mural de Avisos" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 p-4 rounded-xl mt-4">
          <label className="text-white">Escreva um aviso:</label>
          <input
            type="text"
            value={aviso}
            onChange={(e) => setAviso(e.target.value)}
            placeholder="Ex: Reunião amanhã"
            className="p-2 rounded"
          />
          <button type="submit" className="bg-purple-600 text-white py-2 rounded">
            Adicionar
          </button>
        </form>

        <ul className="mt-6 text-white">
          {avisos.map((item, index) => (
            <li key={index} className="border-b border-gray-600 py-2">
              {item}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
