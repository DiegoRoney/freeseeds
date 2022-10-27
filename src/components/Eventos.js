import "../style/global.css";
import "../style/eventos.css";
import mapa from "../img/mapa.jpg";


function Eventos() {
  return (
    <div id="eventos" className="eventos text-center">
      <div className="eventos-titulo">
        <h1> Eventos </h1>
      </div>
      <div className="eventos-conteudo">
        
        <div className="eventos-conteudo-texto">
          <h3 className="text-center">Aconteceendo agora</h3>

          <p>
           item item item
          </p>

          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          
          
         
        </div>


        <div className="eventos-conteudo-imagem">
          <img src={mapa} alt="mapa" />
        </div>

      </div>
    </div>
  );
}

export default Eventos;
