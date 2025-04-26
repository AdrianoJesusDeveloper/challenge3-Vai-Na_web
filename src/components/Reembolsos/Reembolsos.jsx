import { useNavigate } from "react-router-dom"
import styles from "../Reembolsos/Reembolsos.module.scss";
import Home from "../../assets/Header/botao - Home.png";
import Vector from "../../assets/Dashboard/Vector.png";
import Navbar from "../navbar/NavBar.jsx";
import SolicitarReembolso from "../../assets/Dashboard/SolicitarReembolso.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png"; // Add the correct path to the image
import NumeroAnalise from "../../assets/NumeroAnalise.png"; // Add the correct path to the image
import NumeroAprovados from "../../assets/NumeroAprovados.png"; // Add the correct path to the image
import NumeroRejeitados from "../../assets/NumeroRejeitados.png"; // Add the correct path to the image
import VerificarAnalises from "../../assets/VerificarAnalises.png";
import HistoricoReembolso from "../../assets/HistoricoReembolso.png";
import Sistema from "../../assets/Sistema-Atualizado.png"; // Add the correct path to the image



function Reembolsos() {

  const navigate = useNavigate()
  
  return (
      <div className={styles.container} >
          <Navbar />

          <main className={styles.mainReembolsos}>

              <header className={styles.headerReembolso}>
                  <img src={Home} alt="Casinha Header" />
                  <img src={Vector} alt="seta indicativa ao reembolsos" />
                  <p>Reembolsos</p>
              </header>


              <div className={styles.sisReembolso}>
                  <h1>Sistema de Reembolsos</h1>
                  <p>Solicite novos pedidos de reembolso, vizualize solicitações em alálise e todo o histórico.</p>
              </div>

              <section className={styles.containerCards}>

                  <article className={styles.card} onClick={() => navigate("/solicitacao")} >
                      <img src={SolicitarReembolso} alt="" />
                      <p>Solicitar Reembolso</p>
                  </article>

                  <article className={styles.card}>
                      <img src={VerificarAnalises} alt="Análise do reembolso" />
                      <p>Verificar Análises</p>
                  </article>

                  <article className={styles.card}>
                      <img src={HistoricoReembolso} alt="" />
                      <p>Histórico</p>
                  </article>
              </section>

              <section className={styles.containerStatus}>
                  <div>
                      <img className={styles.imgSolicitados} src={NumeroSolicitados} alt="" />
                      <h4>182</h4>
                      <p>Solicitados</p>
                  </div>

                  <div>
                      <img className={styles.imgAnalises} src={NumeroAnalise} alt="" />
                      <h4>74</h4>
                      <p>Em análise</p>
                  </div>

                  <div>
                      <img className={styles.imgAprovados} src={NumeroAprovados} alt="" />
                      <h4>195</h4>
                      <p>Aprovados</p>
                  </div>

                  <div>
                      <img className={styles.imgRejeitados} src={NumeroRejeitados} alt="" />
                      <h4>41</h4>
                      <p>Rejeitados</p>
                  </div>
              </section>

              <section className={styles.containerSistema}>
                  <img src={Sistema} alt="logo Sistema atualuzado" />
                  <a href="">Sistema Atualizado</a>
              </section>
          </main>
      </div>

       
  );
}

export default Reembolsos;