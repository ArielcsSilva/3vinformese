import Header from "../components/Header";
import Footer from "../components/Footer"
import Titulo from "../components/Titulo";

export default function Podio(){
  return(
    <div>
      <Header/>
        <main class="pt-32 pb-16 px-4">

          <Titulo titulo="Faça os questionários e suba no pódio!"/>

          <section class="text-center max-w-4xl mx-auto mb-12">
            
            <p class="text-lg text-gray-300 mb-6">Participe da competição e veja sua posição entre os 40 participantes.</p>
            <a href="materiais.html" class="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Acessar Questionários</a>
            <div class="mt-6">
              <button class="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Participar</button>
            </div>
          </section>

          <section class="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-md p-6 mb-10">
            <h2 class="text-2xl font-bold text-center mb-6 text-gray-100">Pódio</h2>
            <div class="flex flex-col md:flex-row justify-center items-end gap-8">

              <div class="flex flex-col items-center">
                <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white"></div>
                <p class="mt-2 font-medium text-gray-300"></p>
                <div class="bg-blue-600 w-16 h-24 rounded-t-md mt-2 flex items-end justify-center text-sm font-bold text-white">2°</div>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-24 h-24 bg-purple-400 rounded-full flex items-center justify-center text-3xl font-bold text-white"></div>
                <p class="mt-2 font-medium text-white"></p>
                <div class="bg-purple-500 w-16 h-36 rounded-t-md mt-2 flex items-end justify-center text-sm font-bold text-white">1°</div>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center text-2xl font-bold text-white"></div>
                <p class="mt-2 font-medium text-gray-300"></p>
                <div class="bg-gray-700 w-16 h-20 rounded-t-md mt-2 flex items-end justify-center text-sm font-bold text-white">3°</div>
              </div>

            </div>
          </section>

          <section class="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow p-6">
            <h2 class="text-xl font-bold text-center mb-6 text-gray-100">Classificação Geral</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div class="p-4 bg-gray-700 rounded shadow flex items-center justify-between">
                <span class="font-semibold text-white">4°</span>
                <span class="text-gray-100"></span>
              </div>
              <div class="p-4 bg-gray-700 rounded shadow flex items-center justify-between">
                <span class="font-semibold text-white">5°</span>
                <span class="text-gray-100"></span>
              </div>

              <div class="p-4 bg-gray-700 rounded shadow flex items-center justify-between">
                <span class="font-semibold text-white">6°</span>
                <span class="text-gray-100"></span>
              </div>

            </div>
          </section>
        </main>
    <Footer/>
    </div>
  );
}