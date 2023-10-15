import React from "react";
import CardSpeaker from "../../components/Speakers/CardSpeaker";
import "./Speakers.css";

// Importa los datos JSON aquí
import speakersData from "../../data/speakers.json";

const Speakers = () => {
  // Filtra las sesiones que deseas mostrar en función de tus props
  const speakersToDisplay = speakersData.speakers.filter((speaker) => {
    return true; // Muestra todos los oradores
  });

  return (
    <div className="speakers">
      <h1 className="speakers__titulo">Speakers</h1>
      <div className="speakers__container">
        {speakersToDisplay.map((speaker) => (
          <CardSpeaker
            key={speaker.speaker_image}
            speaker={speaker.speaker_name}
            imagen={speaker.speaker_image}
            speaker_desc={speaker.speaker_desc}
            modality={speaker.modality}
          ></CardSpeaker>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
