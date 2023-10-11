import CardSponsor from "../../components/Sponsors/CardSponsor";
import sponsorsData from "../../data/sponsors.json";
import "./Sponsors.css";
const Sponsors = () => {
  const sponsorsToDisplay = sponsorsData.sponsors.filter((sponsor) => {
    return true;
  });
  return (
    <>
      <div className="sponsors">
        <h1 className="sponsors__titulo">Sponsors</h1>
        <p className="sponsors__texto">
          {/* Estas maravillosas organizaciones donaron más allá para ayudarnos a
          alcanzar nuestros objetivos de donación. */}
        </p>
        <div className="sponsors__container">
          {sponsorsToDisplay.map((sponsors) => (
            <CardSponsor
              key={sponsors.name}
              name={sponsors.name}
              link={sponsors.link}
              imagen={sponsors.image}
            ></CardSponsor>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
