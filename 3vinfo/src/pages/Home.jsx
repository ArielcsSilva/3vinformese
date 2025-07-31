import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <section
        id="inicio"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./assets/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-center px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Bem-vindo ao _<strong className="text-purple-500">3VINFO</strong>rme_se!
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            Mantenha-se informado, acesse materiais exclusivos para você e mais!
          </p>
        </div>
      </section>

      <section id="integrantes" className="min-h-screen bg-gray-800 text-gray-100 px-8 py-20">
        <h3 className="text-4xl font-bold mb-6 text-center">Integrantes</h3>
      </section>

      <section id="galeria" className="min-h-screen bg-gray-900 text-gray-100 px-8 py-20">
        <h3 className="text-4xl font-bold mb-12 text-center">Galeria</h3>
      </section>

      <section id="materiais" className="min-h-screen bg-gray-800 text-gray-100 px-8 py-20">
        <h3 className="text-4xl font-bold mb-12 text-center">Materiais</h3>
      </section>

      <section id="mural" className="min-h-screen bg-gray-900 text-gray-100 px-8 py-20">
        <h3 className="text-4xl font-bold mb-12 text-center">Mural de Avisos</h3>
      </section>
    </>
  );
}
