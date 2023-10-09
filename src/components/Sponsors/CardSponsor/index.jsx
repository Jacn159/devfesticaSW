import "./CardSponsor.css";
const CardSponsor = ({name, link, imagen}) => {
  return (
    <div className="cardsponsor">
      <a
        href={link}
        className="cardsponsor__click"
        target="_blank"
      >
      <img src={imagen} alt="" className="cardsponsor__imagen" />
      </a>
      <div className="cardsponsor__type">{name}</div>
    </div>
  );
};

export default CardSponsor;
