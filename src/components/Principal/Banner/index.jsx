import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">DevFest for Ica</h1>
      <p className="banner__text">
        ¡El festival de desarrolladores organizado por desarrolladores! Todo
        sobre Mobile, IoT, Web y Cloud presentado por expertos de todo el mundo
        para una de las conferencias técnicas más grandes.
      </p>
      <div className="banner__buttons">
        <span className="banner__buttons__item--first">Live</span>
        <span className="banner__buttons__item--second">Tecnología</span>
        <div className="banner__buttons__item__efect">
          <span className="banner__buttons__item__efect--third">
            Mira como es
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
