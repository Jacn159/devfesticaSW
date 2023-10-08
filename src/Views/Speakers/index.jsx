import CardSpeaker from "../../components/Speakers/CardSpeaker";
import "./Speakers.css";
const Speakers = () => {
  return (
    <div className="speakers">
      <h1 className="speakers__titulo">Speakers</h1>
      <div className="speakers__container">
        <CardSpeaker speaker={"Pepe Lucho"} imagen={"https://github.com/Jacn159.png"}></CardSpeaker>
        <CardSpeaker speaker={"Pepe Lucho"} ></CardSpeaker>
        <CardSpeaker speaker={"Pepe Lucho"}></CardSpeaker>
        <CardSpeaker ></CardSpeaker>
      </div>
    </div>
  );
};

export default Speakers;
