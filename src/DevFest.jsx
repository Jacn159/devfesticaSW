import Footer from "./Views/Footer";
import Principal from "./Views/Principal";
import Speakers from "./Views/Speakers";
import Sponsors from "./Views/Sponsors";
import Acerca from "./Views/Acerca";
import Ubicanos from "./Views/Ubicanos";
import Calendario from "./Views/Calendario";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Inicializas AOS
    Aos.init({
      // Configuras la opción 'once' para que las animaciones solo se ejecuten una vez
      once: true,
      duration: 1500, // values from 0 to 3000, with step 50ms
    });
  }, []);
  const componentes = [
    { id: "acerca", componente: <Acerca /> },
    { id: "speakers", componente: <Speakers /> },

    { id: "calendario", componente: <Calendario /> },
    { id: "sponsors", componente: <Sponsors /> },
    { id: "lugar", componente: <Ubicanos /> },
  ];

  return (
    <>
      <Principal />
      {componentes.map((item, index) => {
        return (
          <div
            data-aos="fade-right"
            key={item.id}
            id={item.id}
            className="contenedor__efecto"
          >
            {item.componente}
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default App;
