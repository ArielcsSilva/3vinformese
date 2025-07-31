export default function Footer(){
    return(
        <footer class="bg-black bg-opacity-70 border-t border-gray-700 py-6 mt-20">
            <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
                <p>© 2025 3VINFOrme-se</p>
                <div class="flex gap-6 mt-4 md:mt-0">
                <a href="#" class="hover:text-purple-400 transition">Contato</a>
                <a href="#" class="hover:text-purple-400 transition">Sobre</a>
                <a href="#" class="hover:text-purple-400 transition">Redes</a>
                </div>
            </div>
        </footer>
    );
}