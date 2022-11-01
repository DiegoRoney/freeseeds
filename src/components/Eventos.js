import "../style/global.css";
import "../style/eventos.css";
import mapa from "../img/mapa.png";


function Eventos() {
  return (
    <div id="eventos" className="eventos text-center">
      <div className="eventos-titulo">
        <h1> Eventos </h1>
      </div>
      <div className="eventos-conteudo">
        
        <div className="eventos-conteudo-texto">
          <h3 className="text-center">Veja nossa agenda</h3>

         

          <ul>
            <li className="done">01/10/2022 - Jacaraci -BA</li>
            <li className="done">11/10/2022 - Mortugaba -BA</li>
            <li className="">01/12/2022 - Condeúba -BA</li>
            <li className="">03/03/2023 - Cordeiros -BA</li>
            <li className="">06/06/2023 - Piripá -BA</li>
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
