import "./CardSpeaker.css";
import { FaXTwitter } from "react-icons/fa6";
const CardSpeaker = ({
  speaker = "Speaker",
  imagen = "https://github.com/aalvaropc.png",
}) => {
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
          <FaXTwitter color="white"></FaXTwitter>
        </span>
      </div>

      <div className="cardspeaker__texto">
        <h1 className="cardspeaker__texto__nombre">{speaker}</h1>
        <h2 className="cardspeaker__texto__puesto">Desarrollador</h2>
        <p className="cardspeaker__texto__descripcion">
          Ministry of Digital Transformation of Ukraine
        </p>
      </div>
    </div>
  );
};

export default CardSpeaker;
