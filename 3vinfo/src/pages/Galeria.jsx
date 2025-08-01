import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Galeria(){
  return(
    <div class="pt-28 pb-16 px-4">
        <h1 class="text-3xl font-bold text-center mb-10">Galeria</h1>

        <div>
          <p>Volte no tempo e recorde-se dos melhores momentos!</p>
          <div>
            <select name="" id="selectSection">
              <option value="jp">João Pessoa</option>
              <option value="katu">Katu</option>
              <option value="mostradanca">Mostra de Dança</option>
              <option value="mostrateatro">Mostra de Teatro</option>
              <option value="salaaula">Sala de Aula</option>
            </select>
          <div/>
        </div>
        
        <div class="mb-16">
          <h2 class="text-2xl font-semibold text-center mb-6">2023</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img src="img/info0123.jpg" alt="info0123" class="rounded-xl w-full h-64 object-cover"/>
            <img src="img/info0223.jpg" alt="info0223" class="rounded-xl w-full h-64 object-cover"/>
            <img src="img/info0323.jpeg" alt="info0323" class="rounded-xl w-full h-64 object-cover"/>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-2xl font-semibold text-center mb-6">2024</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img src="img/info0124.jpeg" alt="info0124" class="rounded-xl w-full h-64 object-cover"/>
            <img src="img/info0224.jpg" alt="info0224" class="rounded-xl w-full h-64 object-cover"/>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-2xl font-semibold text-center mb-6">2025</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img src="img/info0125.jpeg" alt="info0125" class="rounded-xl w-full h-64 object-cover"/>
          </div>
        </div>
     </div>
    </div>
  );


}