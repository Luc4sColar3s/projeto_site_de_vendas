import { useEffect, useState } from "react";

export default function ListaDeAnuncios({ titulo }) {
  const [anunciosList, setAnunciosList] = useState([]);
  const [meusAnuncios, setMeusAnuncios] = useState([]);
  async function handleDataAnuncios() {
    try {
      const response = await fetch(
        "https://dc-classificados.up.railway.app/api/anuncios/getAllAnuncios",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setAnunciosList(data);
      } else {
        console.error();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDataMyAnuncios() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/getAllMyAnuncios?userId=${userId}&token=${token}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setMeusAnuncios(data);
      } else {
        console.error();
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    handleDataAnuncios();
    handleDataMyAnuncios();
  }, []);
  console.log(anunciosList);

  return (
    <>
      {titulo === "Ofertas para você" ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className=" w-170 text-[24px] font-bold">{titulo}</h1>
          <ul>
            {anunciosList.map((item, index) => (
              <li key={index}>
                {" "}
                <div className="bg-gray-50 w-170 h-65 flex items-center justify-center rounded-3xl ">
                  <div className=" w-160 flex items-start justify-between gap-5">
                    <div className=" w-60 h-60 overflow-hidden rounded-4xl">
                      <img
                        className="w-full h-full object-contain"
                        src={item.imagem}
                        alt=""
                      />
                    </div>
                    <div className=" w-100  h- flex justify-between flex-col">
                      <h1 className="text-[24px] font-bold">{item.titulo}</h1>
                      <hr className=" border-gray-200" />
                      <p className="text-[18px] font-bold">R$: {item.preco}</p>
                      <hr className=" border-gray-200" />
                      <p className="text-[12px] text-gray-500">
                        {item.descricaoCurta}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1 className=" w-170 text-[24px] font-bold">{titulo}</h1>
          <ul>
            {meusAnuncios.map((item, index) => (
              <li key={index}>
                {" "}
                <div className="bg-gray-50 w-170 h-65 flex items-center justify-center rounded-3xl ">
                  <div className=" w-160 flex items-start justify-between gap-5">
                    <div className=" w-60 h-60 overflow-hidden rounded-4xl">
                      <img
                        className="w-full h-full object-contain"
                        src={item.imagem}
                        alt=""
                      />
                    </div>
                    <div className=" w-100  h- flex justify-between flex-col">
                      <h1 className="text-[24px] font-bold">{item.titulo}</h1>
                      <hr className=" border-gray-200" />
                      <p className="text-[18px] font-bold">{item.preco}</p>
                      <hr className=" border-gray-200" />
                      <p className="text-[12px] text-gray-500">
                        {item.descricaoCurta}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
