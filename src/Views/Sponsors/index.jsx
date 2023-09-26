import CardSponsor from "../../components/Sponsors/CardSponsor";
import "./Sponsors.css";
const Sponsors = () => {
  return (
    <>
      <div className="sponsors">
        <h1 className="sponsors__titulo">Sponsors</h1>
        <p className="sponsors__texto">
          These wonderful organizations donated above and beyond to help us
          reach our donation goals
        </p>
        <div className="sponsors__container">
          <CardSponsor></CardSponsor>
          <CardSponsor></CardSponsor>
          <CardSponsor></CardSponsor>
          <CardSponsor></CardSponsor>
          <CardSponsor></CardSponsor>
          <CardSponsor></CardSponsor>
          <CardSponsor></CardSponsor>
          <CardSponsor></CardSponsor>
          <CardSponsor></CardSponsor>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
