import "../style/global.css";
import "../style/about.css";
import about from "../img/familia-plantando-juntos.jpg";
import planta from "../img/planta.png";

function About() {
  return (
    <div className="about">
      <div className="about-titulo">
        <h1> Quem somos</h1>
      </div>
      <div className="about-conteudo">
        <div className="about-conteudo-imagem">
           
            <img src={about} alt="logo"/>
        </div>
        <div className="about-conteudo-texto">
       <h3>Vamos semear nosso futuro</h3>
       <p>
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate;
       </p>
       <img src={planta} alt="logo"/>
       
        </div>
      </div>
    </div>
  );
}

export default About;
