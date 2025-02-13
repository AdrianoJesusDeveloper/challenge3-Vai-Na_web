import styles from "../Reembolsos/Reembolsos.module.scss";
import Home from "../../img/homeheader.png";
import vector from "../../img/Vector.png";
import Navbar from "../Navbar/Navbar.jsx";


function Reembolsos() {
  return (
    <main>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={Home} alt=" icone Home" className={styles.home} />
          <img src={vector} alt=" icone de seta " className={styles.vector} />
          <p className="titulo">Reembolsos</p>
        </div>
        
      </div>
    </main>
  );
}

export  default Reembolsos;
