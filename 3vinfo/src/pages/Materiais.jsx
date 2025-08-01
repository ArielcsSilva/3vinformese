import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Materiais(){

  return(
   <div className="bg-gray-900 min-h-screen">
    <Header/>
    <main class="pt-32 px-6 max-w-7xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-10 text-center gradient bg-clip-text text-transparent">
        Materiais da Turma
      </h1>

      <div class="mb-6 max-w-md mx-auto">
        <select name="materias" id="materias" class="border border-gray-700 bg-gray-800 text-gray-200 rounded px-4 py-2 w-full">
          <option value="">Selecione uma disciplina</option>
          <option value="programacao_banco_dados">Programação com Acesso a Banco de Dados</option>
          <option value="quimica_1">Química I</option>
          <option value="autoria_web">Autoria Web</option>
          <option value="matematica_3">Matemática III</option>
          <option value="biologia_1">Biologia I</option>
          <option value="sociologia_3">Sociologia III</option>
          <option value="filosofia_3">Filosofia III</option>
          <option value="arquitetura_redes">Arquitetura de Redes</option>
          <option value="historia_1">História I</option>
          <option value="organizacao_manutencao_computadores">Organização e Manutenção</option>
          <option value="portugues_3">Língua Portuguesa e Literatura III</option>
        </select>
      </div>

      <div class="text-center space-x-4 mb-8">
        <button id="btn-sumario" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">Sumário</button>
        <button id="btn-apostilas" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">Apostilas</button>
        <button id="btn-quiz" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">Questionário</button>
      </div>

      <section id="content-display" class="max-w-3xl mx-auto bg-gray-800 text-gray-100 rounded-xl shadow-lg p-6 min-h-[200px]">
      </section>
    </main>
    <Footer/>
    </div>
  );



}
