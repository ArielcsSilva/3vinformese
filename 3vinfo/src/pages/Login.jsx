<div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex flex-col m-6 space-y-8 bg-gray-800 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent p-4">
            Login
          </span>

          <form
            action=""
            method="POST"
            className="flex flex-col"
          >
            <div className="py-4">
              <label className="mb-2 block text-md text-white" htmlFor="matricula">
                Matrícula
              </label>
              <input
                type="text"
                id="matricula"
                name="matricula"
                className="text-white w-full p-2 border bg-gray-900 border-purple-600 rounded-md placeholder:font-light placeholder:text-gray-400"
                placeholder="Digite sua matrícula"
                autoComplete="username"
                required
              />
            </div>

            <div className="py-4">
              <label className="mb-2 block text-md text-white" htmlFor="email">
                E-mail Escolar
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-white w-full p-2 border bg-gray-900 border-purple-600 rounded-md placeholder:font-light placeholder:text-gray-400"
                placeholder="Digite seu e-mail escolar"
                autoComplete="email"
                required
              />
            </div>

            <div className="py-4">
              <label className="mb-2 block text-md text-white" htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="text-white w-full p-2 border bg-gray-900 border-purple-600 rounded-md placeholder:font-light placeholder:text-gray-400"
                placeholder="Digite sua senha"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="flex justify-between items-center py-4 text-gray-200">
              <label className="flex items-center text-md" htmlFor="ch">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                Permanecer conectado por 30 dias
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 border-black text-white p-2 rounded-lg mb-4 hover:bg-purple-800 hover:border-purple-800"
            >
              Entrar
            </button>

            <div className="text-center text-gray-400 p-4">
              Não tem uma conta?{" "}
              <a href="/signup" className="font-bold text-white underline cursor-pointer">
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>