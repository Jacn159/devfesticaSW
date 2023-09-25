import "./Resumen.css";
const Resumen = () => {
  return (
    <div className="resumen">
      <h1 className="resumen__titulo">Resumen del evento</h1>
      <ol className="resumen__lista">
        <li className="resumen__lista__item">Lugar: Por definir</li>
        <li className="resumen__lista__item">Fecha: 02 de Diciembre 2023 </li>
        <li className="resumen__lista__item">Hora: 09:00 am</li>
      </ol>
    </div>
  );
};

export default Resumen;
