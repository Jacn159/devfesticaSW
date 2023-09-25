import Header from "../../components/Principal/Header";
import Banner from "../../components/Principal/Banner";
import "./Principal.css";
function Principal() {
  return (
    <>
      <div className="principal__filtro"></div>
      <div className="principal__fondo"></div>
      <div className="principal__contenedor" id="inicio">
        <Header></Header>
        <Banner></Banner>
      </div>
    </>
  );
}

export default Principal;
