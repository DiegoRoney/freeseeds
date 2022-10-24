import "../style/global.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import * as ReactDOM from "react-dom";

function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Você deixou algum campo vazio");
      return;
    }

    const templateParams = {
      from_name: name,
      //   message: message,
      email: email,
    };
    emailjs
      .send(
        "service_c61rw18",
        "template_lo19lh4",
        templateParams,
        "74u9PELDF69X2hsHk"
      )
      .then(
        (response) => {
          const root = ReactDOM.createRoot(
            document.getElementById("mensagemenviada")
          );
          const element = <h3>E-mail cadastrado!</h3>;
          root.render(element);

          setName("");
          setEmail("");
          //   setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }
  return (
    <div id="contato" className="hero">
      <div className="hero-conteudo">
        <div className="hero-titulos">
          <h1 className="title">Free Seeds</h1>
          <h2>Compartilhe e receba mudas e sementes!</h2>
        </div>

        <div className="containerForm">
          <form className="form" onSubmit={sendEmail}>
            <p>cadastre-se</p>

            <input
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="input"
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            {/* <textarea
              className="textarea"
              rows="5"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            /> */}

            <input className="button" type="submit" value="Enviar" />

            <div id="mensagemenviada" className="msg-send text-center"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
