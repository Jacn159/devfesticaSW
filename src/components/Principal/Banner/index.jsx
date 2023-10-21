import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">DevFest for Ica</h1>
      <p className="banner__text">
        ¡El festival de desarrolladores organizado por desarrolladores! Todo
        sobre Mobile, Web y Cloud presentado por expertos de todo el mundo
        para una de las conferencias tecnológicas más grandes.
      </p>
      <div className="banner__buttons">
        <span className="banner__buttons__item--first">Live</span>
        <span className="banner__buttons__item--second">Tecnología</span>
        <div className="banner__buttons__item__efect">
          <span className="banner__buttons__item__efect--third">
            <a href="https://www.eventbrite.com/e/entradas-devfest-ica-718100236137" target="_blank">
              Regístrate
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
