import React from "react";
import Horario from "../Horario";
import "./TarjetasHorario.css";
import CardsHorario from "../CardsHorario";

const TarjetasHorario = ({ cantidad = 0, datos, datos2, datos3 }) => {
  return (
    <div className="tarjetashorario">
      <Horario final={datos.final} inicio={datos.inicio}></Horario>
      <CardsHorario
        imagen={datos.imagen}
        nombre={datos.nombre}
        oficio={datos.oficio}
        titulo={datos.titulo}
      ></CardsHorario>
      {cantidad >= 1 && (
        <CardsHorario
          imagen={datos2.imagen}
          nombre={datos2.nombre}
          oficio={datos2.oficio}
          titulo={datos2.titulo}
        ></CardsHorario>
      )}
      {cantidad === 2 && (
        <CardsHorario
          imagen={datos3.imagen}
          nombre={datos3.nombre}
          oficio={datos3.oficio}
          titulo={datos3.titulo}
        ></CardsHorario>
      )}
    </div>
  );
};

export default TarjetasHorario;
