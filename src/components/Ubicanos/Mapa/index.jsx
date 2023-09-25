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
        src="https://maps.google.com/maps?width=400%25&amp;height=200&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/car-satnav-gps/">GPS devices</a>
      </iframe>
    </div>
  );
};

export default Mapa;
