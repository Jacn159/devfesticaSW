import TarjetasHorario from "../../components/Calendario/TarjetasHorario";
import "./Calendario.css";
const Calendario = () => {
  return (
    <div className="calendario">
      <h1 className="calendario__titulo">Agenda</h1>
      <div className="calendario__container">
      <TarjetasHorario></TarjetasHorario>
      <TarjetasHorario></TarjetasHorario>
      <TarjetasHorario></TarjetasHorario>
      <TarjetasHorario></TarjetasHorario>
      <TarjetasHorario></TarjetasHorario>
      <TarjetasHorario></TarjetasHorario>
      <TarjetasHorario></TarjetasHorario>
      </div>
    </div>
  );
};

export default Calendario;
