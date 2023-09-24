import "./Header.css";
const Header = () => {
  const lista = ["Inicio", "Speakers", "Calendario", "Organizadores"];
  return (
    <nav className="navegador">
      <img src="./img/logo.svg" alt="" className="navegador__logo" />
      <ul className="navegador__lista">
        {lista.map((dato, index) => {
          return (
            <li key={index} className="navegador__lista__item">
              {dato}
            </li>
          );
        })}
        <li className="navegador__lista__item--active">Sponsors</li>
      </ul>
    </nav>
  );
};

export default Header;
