import Footer from "../components/Footer";
import Header from "../components/Header";
import ListaDeAnuncios from "../components/ListaDeAnuncios";

export default function MeusAnuncios() {
  return (
    <div>
      <Header titulo={"Meus anúncios"} />
      <ListaDeAnuncios titulo={"Meus anúncios"}/>
      <Footer />
    </div>
  );
}
