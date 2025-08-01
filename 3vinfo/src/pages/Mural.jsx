import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Mural(){
  return(
    <div className="bg-gray-900 min-h-screen">
    <Header/>
      <main class="pt-28 pb-16 px-4 max-w-md mx-auto">

        <div class="flex flex-col items-center ">
          <h1 class="text-4xl font-extrabold mb-4 gradient bg-clip-text text-transparent">Mural de Avisos</h1>  
        </div>

        <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-purple-700">
          <form action="../../../bck/mural.php" method="POST" id="formAviso" class="flex flex-col gap-4">
            <label for="inputAviso" class="text-gray-300 font-medium">Informe aos colegas:</label>

            <input
              type="text"
              id="inputAviso"
              placeholder="Adicione um aviso"
              class="bg-gray-900 text-gray-200 border border-purple-600 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />

            <div>
              <label for="dataInicio" class="block text-xs text-purple-400">Data inicial:</label>
              <input
                type="date"
                id="dataInicio"
                class="mt-1 text-sm bg-gray-900 text-gray-200 border border-purple-600 rounded-lg px-3 py-1.5 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label for="dataFinal" class="block text-xs text-purple-400">Data final:</label>
              <input
                type="date"
                id="dataFinal"
                class="mt-1 text-sm bg-gray-900 text-gray-200 border border-purple-600 rounded-lg px-3 py-1.5 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              class="bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 transition-all px-4 py-2 rounded-lg text-white font-bold shadow-md"
            >
              Adicionar
            </button>
          </form>
        </div>

        <ul id="listaAvisos" class="mt-10 flex flex-col gap-4"></ul>
      </main>
      <Footer/>
    </div>
  );
}