import { useState } from "react";
import { estadosBrasileiros } from "../utils/estados";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Cadastro() {
  const [userCadastro, setUserCadastro] = useState([
    {
      nome: "",
      email: "",
      senha: "",
      telefone: "",
      cidade: "",
      estado: "",
    },
  ]);

  const navigate = useNavigate();

  async function handleOnchangeCadastro(event) {
    const { name, value } = event.target;
    setUserCadastro((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function fetchCadastro(event) {
    event.preventDefault();

    const data = {
      ...userCadastro,
      telefone: Number(userCadastro.telefone),
    };

    try {
      const response = await fetch(
        "https://dc-classificados.up.railway.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCadastro),
        }
      );
      if (response.ok) {
        toast.success("Cadastro realizado com sucesso");
        navigate("/login");
      } else {
        toast.error("Cadastro não realizado");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <img src="https://floatui.com/logo-dark.svg" width={150} />
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Start growing your business quickly
            </h3>
            <p className="text-gray-300">
              Create an account and get access to all features for 30-days, No
              credit card required.
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                Join 5.000+ users
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-[90%] max-w-md space-y-3 px-4 bg-white text-gray-600 sm:px-0">
          <div className="">
            <img
              src="https://floatui.com/logo.svg"
              width={150}
              className="lg:hidden"
            />
            <div className="mt-5 space-y-1">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Sign up
              </h3>
              <p className="">
                Already have an account?{" "}
                <a
                  href="javascript:void(0)"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={fetchCadastro} className="space-y-2">
            <div>
              <label className="font-medium">Nome</label>
              <input
                onChange={handleOnchangeCadastro}
                name="nome"
                type="text"
                value={userCadastro.nome}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                onChange={handleOnchangeCadastro}
                name="email"
                type="email"
                value={userCadastro.email}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Senha</label>
              <input
                onChange={handleOnchangeCadastro}
                name="senha"
                type="password"
                value={userCadastro.senha}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Telefone</label>
              <input
                onChange={handleOnchangeCadastro}
                name="telefone"
                type="number"
                value={userCadastro.telefone}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Cidade</label>
              <input
                onChange={handleOnchangeCadastro}
                name="cidade"
                type="text"
                value={userCadastro.cidade}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Estado</label>
              <select
                onChange={handleOnchangeCadastro}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                name="estado"
                id="estado"
                value={userCadastro.estado}
              >
                <option>Selecione seu estado</option>
                {estadosBrasileiros.map((item, index) => (
                  <option key={index} value={item.uf}>
                    {item.estado}
                  </option>
                ))}
              </select>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
