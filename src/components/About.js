import "../style/global.css";
import "../style/about.css";
import about from "../img/familia-plantando-juntos.png";
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
            Somos um grupo comprometido em tornar nossa cidade <span>mais verde e
            sustentável.</span> Através da organização de eventos, buscamos promover a
            doação de sementes e mudas de árvores, além de oferecer palestras e
            treinamentos sobre plantio e preservação.
          </p>
          <p>
           
            Em nosso site, você encontrará informações sobre os eventos que
            estão acontecendo no momento e também ficará por dentro dos eventos
            futuros, nos quais ocorrerá a distribuição das mudas e sementes.
            Queremos incentivar a participação de todos na construção de um
            ambiente<span> mais saudável e consciente.</span>
          </p>
          <p>
            Acompanhe as novidades em nosso site e junte-se a nós nessa missão
            de tornar nossa cidade mais verde, repleta de vida e bem-estar para
            todos.<span>Vamos fazer a diferença juntos!</span>
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
