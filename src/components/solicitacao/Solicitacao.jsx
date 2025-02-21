import styles from "./Solicitacao.module.scss";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../../img/homeheader.png";
import vector from "../../img/Vector.png";

function Solicitacao() {
  return (
    <section className={styles.telaPrincipal}>
      <Navbar />
      <section className={styles.containerPedido}>
        <section className={styles.Header}>
          <img src={Home} alt=" icone Home" className={styles.Home} />
          <img src={vector} className={styles.Vector} alt="icone de seta" />
          Reembolsos
          <img src={vector} className={styles.Vector} alt="icone de seta" />
          Solicitação
        </section>

        <section className={styles.containerForms}>
          <section className={styles.formEsquerdo}>
            <section className={styles.formGrupoUm}>
              <div className={styles.campoNome}>
                <label className={styles.labelNome}>Nome Completo</label>
                <input type="text" className={styles.inputNome} />
              </div>
              <div className={styles.campoEmpresa}>
                <label className={styles.labelEmpresa}>Empresa</label>
                <input type="text" className={styles.inputEmpresa} />
              </div>
              <div className={styles.prestarContas}>
                <label className={styles.labelPrestarContas}>
                  N° Prest Contas{" "}
                </label>
                <input type="text" className={styles.inputPrestarContas} />
              </div>
            </section>

            <div className={styles.formDescMotivo}>
              <label className={styles.labelDescMotivo}>
                Descrição / Motivo do Reembolso
              </label>
              <textarea className={styles.inputDescMotivo}></textarea>
            </div>
          </section>
          <section className="styles.formDireito">
            <section className={styles.formGrupoDois}>
              <div className={styles.campoData}>
                <label className={styles.labelData}>Data</label>
                <input type="date" className={styles.inputData} />
              </div>
              <div className={styles.campoValor}>
                <label className={styles.labelValor}>Valor</label>
                <input type="text" className={styles.inputValor} />
              </div>
              <div className={styles.campoAnexo}>
                <label className={styles.labelAnexo}>Anexo</label>
                <input type="file" className={styles.inputAnexo} />
              </div>
            </section>
            <div className={styles.formDescMotivo}>
              <label className={styles.labelDescMotivo}>
                Observações Adicionais
              </label>
              <textarea className={styles.inputDescMotivo}></textarea>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Solicitacao;
