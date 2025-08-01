export default function Header(){
    return(
        <header class="fixed w-full z-30 top-0 left-0">
            <div class="flex justify-between items-center px-8 py-4 bg-black bg-opacity-70 backdrop-blur-md">
                <h1 class="text-xl font-bold">
                <span class="text-purple-500">3VINFO</span>rme_se(Materias)
                </h1>
                <nav class="flex items-center space-x-6 text-gray-200">
                <a href="" class="hover:text-purple-400 transition">Início</a>
                <a href="" class="hover:text-purple-400 transition">Integrantes</a>
                <div class="relative">
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center gap-2 hover:text-purple-400 transition">
                    Galeria
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l4 4 4-4"/>
                    </svg>
                    </button>
                    <div id="dropdownNavbar" class="z-50 hidden absolute mt-2 right-0 bg-black bg-opacity-70 backdrop-blur-md divide-y divide-gray-600 rounded-lg w-52 border border-gray-700">
                    <ul class="py-2 text-sm text-gray-300" aria-labelledby="dropdownNavbarLink">
                        <li><a href="" class="block px-4 py-2 hover:bg-purple-700 rounded">João Pessoa</a></li>
                        <li><a href="" class="block px-4 py-2 hover:bg-purple-700 rounded">Katu</a></li>
                        <li><a href="" class="block px-4 py-2 hover:bg-purple-700 rounded">Mostra de Dança</a></li>
                        <li><a href="" class="block px-4 py-2 hover:bg-purple-700 rounded">Mostra de Teatro</a></li>
                        <li><a href="l" class="block px-4 py-2 hover:bg-purple-700 rounded">Sala de Aula</a></li>
                    </ul>
                    </div>
                </div>
                <a href="" class="hover:text-purple-400 transition">Materiais</a>
                <a href="" class="hover:text-purple-400 transition">Pódio</a>
                <a href="" class="hover:text-purple-400 transition">Mural</a>
                </nav>
            </div>
        </header>        
    );
}