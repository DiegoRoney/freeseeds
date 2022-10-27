import "../style/global.css";
import "../style/about.css";
import about from "../img/familia-plantando-juntos.jpg";
import planta from "../img/planta.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-titulo text-center">
        <h1> Quem somos</h1>
      </div>
      <div className="about-conteudo">
        <div className="about-conteudo-imagem">
          <img src={about} alt="logo" />
        </div>
        <div className="about-conteudo-texto">
          <h3 className="text-center">Vamos semear nosso futuro</h3>
          <p>
            Somos um grupo que deseja ver a cidade <span>mais verde.</span> Para
            isso organizamos eventos para doação de sementes e mudas de arvores,
            palestras e treinamentos para o plantio e preservação.
          </p>
          <p>
            Neste site você poderá acompanhar os eventos que estão acontecendo e
            eventos futuros onde ocorrerão o compartilhamento das mudas e
            sementes.
          </p>
          <p>
            <div className="content2">
              <div className="item1">
                <img src={planta} alt="logo" />
              </div>
              <div className="item2">
                
                  Cadastre seu e-mail e receba em primeira mão todas as nossas
                  novidades.
                
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
