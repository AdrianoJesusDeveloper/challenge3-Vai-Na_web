import styles from "../Reembolsos/Reembolsos.module.scss";
import Home from "../../img/homeheader.png";
import vector from "../../img/Vector.png";
import Navbar from "../Navbar/Navbar.jsx";
import solicitarReembolso from "../../img/btnSolicitareembolso.png";
import VerificarAnalises from "../../img/VerificarAnalises.png";
import HistoricoReembolso from "../../img/HistoricoReembolso.png";
// import NumeroAprovados from '../../img/N-Aprovados.png'
// import NumeroAprovados from '../../img/N-Aprovados.png'

function Reembolsos() {
  return (
    <main className={styles.Principal}>
      <Navbar />
      <section className={styles.Reembolsos}>
        <section className={styles.Header}>
          <img src={Home} alt=" icone Home" className={styles.Home} />
          <img src={vector} className={styles.Vector} alt="icone de seta" />
          Reembolsos
        </section>
        <section className={styles.containerPrincipal}>
          <section className={styles.Container}>
            <h2>Sistema de Reembolsos</h2>
            Solicite novos pedidos de reembolso, visualize solicitações em
            análise e todo o histórico.
            <section className={styles.containerCards}>
              <article>
                <img
                  src={solicitarReembolso}
                  alt="Icone para solicitação de reembolso"
                />
                <h2>Solicitar Reembolso</h2>
              </article>

              <article>
                <img
                  src={VerificarAnalises}
                  alt="Icone de verificar análises"
                />
                <h2>Verificar análises</h2>
              </article>

              <article>
                <img src={HistoricoReembolso} alt="Icone de Historico" />
                <h2>Histórico</h2>
              </article>
            </section>
            <section className={styles.containerSatus}>
            <div>
                <img src="" alt="" />
                <h4>182</h4>
                <p>solicitados</p>
              </div>              
              <div>
                <img src="" alt="" />
                <h4>74</h4>
                <p>Em análise</p>
              </div>
              <div>
                <img src="" alt="" />
                <h4>195</h4>
                <p>Aprovados</p>
              </div>
              <div>
                <img src="" alt="" />
                <h4>41</h4>
                <p>Rejeitados </p>
              </div>
            </section>
              

          </section>
        </section>
      </section>
    </main>
  );
}

export default Reembolsos;
git