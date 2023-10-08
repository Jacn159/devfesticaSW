import React from "react";
import TarjetasHorario from "../../components/Calendario/TarjetasHorario";
import "./Calendario.css";

const Calendario = () => {
  // Objeto JSON con los datos que deseas enviar
  const datosTarjeta = {
    inicio: "09:00",
    final: "09:15",
    imagen: "https://github.com/aalvaropc.png",
    nombre: "Alvaro Peña",
    oficio: "Fullstack Senior, Gerente de Google",
    titulo: "Como iniciar tu StartUp",
  };
  return (
    <div className="calendario">
      <h1 className="calendario__titulo">Agenda</h1>
      <div className="calendario__container">
        {/* Pasa los datos como una prop llamada 'datos' */}
        <TarjetasHorario datos={datosTarjeta}></TarjetasHorario>
        <TarjetasHorario
          cantidad={2}
          datos={datosTarjeta}
          datos2={datosTarjeta}
          datos3={datosTarjeta}
        ></TarjetasHorario>
        <TarjetasHorario
          cantidad={1}
          datos2={datosTarjeta}
          datos={datosTarjeta}
        ></TarjetasHorario>
        <TarjetasHorario datos={datosTarjeta}></TarjetasHorario>
        <TarjetasHorario datos={datosTarjeta}></TarjetasHorario>
        <TarjetasHorario datos={datosTarjeta}></TarjetasHorario>
        <TarjetasHorario datos={datosTarjeta}></TarjetasHorario>
      </div>
    </div>
  );
};
export default Calendario;
