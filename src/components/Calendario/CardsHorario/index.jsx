import React from "react";
import "./CardsHorario.css";
const CardsHorario = ({ titulo, imagen, nombre, oficio }) => {
  return (
    <div className="cardsHorario">
      <h1 className="cardsHorario__titulo">{titulo}</h1>
      <div className="cardsHorario__tarjeta">
        <img src={imagen} alt="" className="cardsHorario__tarjeta__imagen" />
        <div className="cardsHorario__tarjeta__contenedor">
          <h2 className="cardsHorario__tarjeta__contenedor__speaker">
            {nombre}
          </h2>
          <p className="cardsHorario__tarjeta__contenedor__oficio">{oficio}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsHorario;
