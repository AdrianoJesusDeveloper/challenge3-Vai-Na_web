import styles from "./Navbar.module.scss";
import menu from "../../img/imagem-fechar-header.png";
import user from "../../img/image.png";
import home from "../../img/Home.png";
import historico from "../../img/btnHistorico.png";
import pesquisa from "../../img/Pesquisa.png";
import reembolso from "../../img/btnReembolso.png";
 import sair from "../../img/btnsair.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button className={styles.btnMenu}>
        <img src={menu} alt="botão de menu" />
      </button>

      <div className={styles.navegacao}>
        <img src={user} alt="icone de usuario" />
        <button className="btnHome">
          <img src={home} alt=" botão de Home  " />
        </button>
        <button className="btnReembolso">
          <img src={reembolso} alt=" botão reembolso" />
        </button>
        <button className="btnPesquisa">
          <img src={pesquisa} alt=" botão presquisa " />
        </button>
        <button className="btnHistorico">
          <img src={historico} alt=" botão reembolso " />
        </button>
      </div>

      <button className={styles.botaoSair}>
        <img src={sair} alt=" botão de sair" />
      </button>
    

    </nav>
  );
}

export default Navbar;
