import React from "react";
import "./Text.css";

const Text = () => {
  return (
    <div>
      <div className="textos">
        <h3 className="custom__text">
          DevFest Ica - Uniendo a los Entusiastas de la Tecnología
        </h3>
        <p className="custom__text__opacity">
          Únete a nosotros el 2 de diciembre para un día de inspiración,
          innovación y colaboración. DevFest Ica reúne a entusiastas de la
          tecnología de todo el mundo para celebrar la tecnología y compartir
          conocimientos.
        </p>
      </div>
      <div className="mt__8 textos">
        <h3 className="custom__text">
          Celebrando la Tecnología y la Comunidad Global
        </h3>
        <p className="custom__text__opacity">
          En DevFest Ica, celebramos la pasión por la tecnología y la
          colaboración global. Únete a esta experiencia única y sé parte de una
          comunidad global de entusiastas de la tecnología.
        </p>
      </div>
    </div>
  );
};

export default Text;
