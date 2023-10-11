import "./CardSpeaker.css";
import { AiOutlineGoogle } from "react-icons/ai";

const CardSpeaker = ({ speaker, imagen, speaker_desc }) => {
  return (
    <div className="cardspeaker">
      <div className="cardspeaker__container">
        <div className="cardspeaker__container__imagen">
          <img
            src={imagen}
            alt="Imagen del orador"
            className="cardspeaker__container__imagen__speaker"
          />
        </div>
        <span className="cardspeaker__container__imagen__icon">
          <AiOutlineGoogle color="white"></AiOutlineGoogle>
        </span>
      </div>

      <div className="cardspeaker__texto">
        <h1 className="cardspeaker__texto__nombre">{speaker}</h1>
        <h2 className="cardspeaker__texto__puesto">{speaker_desc}</h2>
        <p className="cardspeaker__texto__descripcion"></p>
      </div>
    </div>
  );
};

export default CardSpeaker;
