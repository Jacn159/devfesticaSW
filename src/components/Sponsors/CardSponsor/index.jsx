import "./CardSponsor.css";
const CardSponsor = () => {
  return (
    <div className="cardsponsor">
      <a
        href="https://developers.google.com/community/gdg?hl=es-419"
        className="cardsponsor__click"
        target="_blank"
      >
        <img src="./img/descargar.svg" alt="" className="cardsponsor__imagen" />
      </a>
      <div className="cardsponsor__type">General</div>
    </div>
  );
};

export default CardSponsor;
