import { useNavigate } from "react-router";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import FecharHeader from "../../assets/imagem-fechar-header.png";
import People from "../../assets/eu.jpg";
import Home from "../../assets/Home.png";
import Historico from "../../assets/btnHistorico.png";
import Pesquisa from "../../assets/Pesquisa.png";
import Reembolso from "../../assets/btnReembolso.png";
import Sair from "../../assets/btnsair.png";

function NavBar() {

  const navigate = useNavigate()
  const [status, setStatus] = useState("fechado")

  function click() {
      if (status === "fechado") {
          setStatus("aberto")
      }
      else {
          setStatus("fechado")
      }
  }

  return (
      <nav className={`${styles.navBarEstilo} ${styles[status]}`}>
          <button onClick={() => click()}>
              <img src={FecharHeader} alt="Botão abrir e fechar" />
          </button>

          <section>
              <div className={styles.navbarPeople}>
              <img src={People} alt="Foto Perfil" />
              
              <h2>ADRIANO COSTA</h2>
              <p>Marketing</p>
              </div>

              <div className={styles.containerNavbar}> 

                  <div className={styles.buttonNav}>
                  <button onClick={() => {
                      navigate("/reembolsos");
                  }}>
                      <img src={Home} alt="Botão do Home" />
                  </button>
                  <p>Inicio</p>
                  </div>

                  <div className={styles.buttonNav}>
                  <button onClick={() => { navigate("/reembolsos") }}aria-label="Ir para a página de Reembolsos">
                      <img src={Reembolso} alt="Botão Reembolso" />
                  </button>
                  <p>Reembolsos</p>
                  </div>

                  <div className={styles.buttonNav}>
                  <button onClick={() => { navigate("/reembolsos") }}>
                      <img src={Pesquisa} alt="Botão Pesquisa" />
                  </button>
                  <p>Pesquisa</p>
                  </div>

                  <div className={styles.buttonNav}>
                  <button onClick={() => { navigate("/solicitacao") }}>
                      <img src={Historico} alt="Botão Histórico" />
                  </button>
                  <p>Histórico</p>
                  </div>
              </div>
          </section>



          <button className={styles.buttonSair} onClick={() => { navigate("/") }}>
              <img src={Sair} alt="Botão Sair" />
          </button>
      </nav>
  );
}

export default NavBar;