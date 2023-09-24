import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">DevFest for Ica</h1>
      <p className="banner__text">
        Learn from speakers that shape the future of Android, Web and AI.
        DevFest is over. Thank you for joining the cause!
      </p>
      <div className="banner__buttons">
        <span className="banner__buttons__item--first">online</span>
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
