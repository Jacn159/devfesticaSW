import React from "react";
import "./Mapa.css";

const Mapa = () => {
  return (
    <div className="mapa__component md:md__margin lg:lg__width md:md__height lg:lg__height">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=400%25&amp;height=200&amp;hl=es&amp;q=Universidad%20Nacional%20San%20Luis%20Gonzaga+(Universidad%20Nacional%20San%20Luis%20Gonzaga)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a>
        </iframe>
      
    </div>
  );
};

export default Mapa;
