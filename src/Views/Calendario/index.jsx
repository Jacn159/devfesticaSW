import React from "react";
import TarjetasHorario from "../../components/Calendario/TarjetasHorario";
import "./Calendario.css";
import calendarioData from "../../data/sessions.json"; // Asegúrate de proporcionar la ruta correcta al archivo JSON

const Calendario = () => {
  const transformedSessions = calendarioData.sessions.map((session) => {
    // Aquí realizas la transformación de cada sesión
    const inicio = session.session_start_time;
    const final = `${session.session_total_time}`;
    const imagen = session.speaker_image;
    const nombre = session.speaker_name;
    const oficio = session.speaker_desc;
    const titulo = session.session_title;

    // Devuelves la sesión transformada en la estructura deseada
    return {
      inicio,
      final,
      imagen,
      nombre,
      oficio,
      titulo,
    };
  });

  return (
    <div className="calendario">
      <h1 className="calendario__titulo">Agenda</h1>
      <div className="calendario__container">
        {/* Utiliza .map() para crear TarjetasHorario para cada sesión transformada */}
        {transformedSessions.map((session, index) => (
          <TarjetasHorario key={index} datos={session} />
        ))}
      </div>
    </div>
  );
};

export default Calendario;
