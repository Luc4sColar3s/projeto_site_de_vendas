export default function Login() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Entre na sua conta
            </h3>
            <p className="">
              Não tem uma conta?{" "}
              <a
                href="javascript:void(0)"
                className="font-medium text-[#6E0AD6] hover:text-[#45028b]"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Senha</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-[#6E0AD6] hover:text-[#45028b] active:bg-indigo-600 rounded-lg duration-150">
            Entrar
          </button>
          <div className="text-center">
            <a href="javascript:void(0)" className="hover:text-[#45028b]">
              Esqueceu sua senha?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
