import "./Redes.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
const Redes = () => {
  return (
    <div className="redes">
      <h1 className="redes__titulo">Nuestras redes sociales</h1>
      <div className="redes__container">
        <a
          href="https://www.instagram.com/gdgica/?hl=es"
          className="redes__container__item"
        >
          <AiFillInstagram color="white"></AiFillInstagram>
        </a>
        <a
          href="https://www.facebook.com/gdgica/"
          className="redes__container__item"
        >
          <AiFillFacebook color="white"></AiFillFacebook>
        </a>
        <a
          href="https://www.linkedin.com/company/gdg-ica/"
          className="redes__container__item"
        >
          <AiFillLinkedin color="white"></AiFillLinkedin>
        </a>
        <a href="" className="redes__container__item">
          <FaSquareXTwitter color="white"></FaSquareXTwitter>
        </a>
      </div>
    </div>
  );
};

export default Redes;
