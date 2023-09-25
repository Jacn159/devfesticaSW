import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const lista = [
    { nombre: "Inicio", direccion: "#inicio" },
    { nombre: "Speakers", direccion: "#speakers" },
    { nombre: "Calendario", direccion: "#calendario" },
    { nombre: "Organizadores", direccion: "#organizadores" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Función para manejar el evento de scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agregar el evento de scroll cuando se monta el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento cuando se desmonta el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navegador ${
          !isScrolled
            ? "navegador__efect--active"
            : "navegador__efect--desactive"
        }`}
      >
        <img src="./img/logo.svg" alt="" className="navegador__logo" />
        <ul className="navegador__lista">
          {lista.map((dato, index) => {
            return (
              <li key={index} className="navegador__lista__item">
                <a href={dato.direccion} className="navegador__lista__item__a">
                  {dato.nombre}
                </a>
              </li>
            );
          })}
          <li className="navegador__lista__item--active">Sponsors</li>
        </ul>
      </nav>
      {isScrolled ? (
        <div className="filtro__header--active"></div>
      ) : (
        <div className="filtro__header--desactive"></div>
      )}
    </>
  );
};

export default Header;
