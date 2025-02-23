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

          <div className={styles.barraLateral}></div>

          <section className={styles.formDireito}>
            <div className={styles.Data}>
              <label className={styles.labelData}>Data</label>
              <input type="date" className={styles.inputData} />
            </div>

            <div className={styles.tipoDespesa}>
              <label className={styles.labelTipoDespesa}>Tipo de Despesa</label>
              <select className={styles.inputTipoDespesa}>
                <option selected disabled>
                  Selecionar
                </option>
                <option value="alimentacao">Alimentação</option>
                <option value="combustivel">Combustível</option>
                <option value="conducao">Condução</option>
                <option value="estacionamento">Estacionamento</option>
                <option value="viagem_admin">Viagem admin.</option>
                <option value="viagem_operacional">Viagem operacional</option>
                <option value="eventos">Eventos de representação</option>
              </select>
            </div>

            <div className={styles.centDeCusto}>
              <label className={styles.labelCentDeCusto}>Centro de Custo</label>
              <select className={styles.inputCentDeCusto}>
                <option selected disabled>
                  Selecionar
                </option>
                <option value="1100109002">
                  1100109002 - FIN CONTROLES INTERNOS MTZ
                </option>
                <option value="1100110002">
                  1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                </option>
                <option value="1100110102">
                  1100110102 - FIN CONTABILIDADE MTZ
                </option>
              </select>
            </div>

            <section className={styles.campoInferiores}>
              <div className={styles.ordInt}>
                <label className={styles.labelOrdInt}>Ord.Inter</label>
                <input type="text" className={styles.inputOrdInt} />
              </div>
              <div className={styles.Div}>
                <label className={styles.labelDiv}>Div</label>
                <input type="text" className={styles.inputDiv} />
              </div>
              <div className={styles.Pep}>
                <label className={styles.labelPep}>Pep</label>
                <input type="text" className={styles.inputPep} />
              </div>
              <div className={styles.Moeda}>
                <label className={styles.labelMoeda}>Moeda</label>
                <input type="text" className={styles.inputMoeda} />
              </div>
              <div className={styles.distKm}>
                <label className={styles.labelDistKm}>Dist/Km</label>
                <input type="text" className={styles.inputDistKm} />
              </div>
              <div className={styles.valorKm}>
                <label className={styles.labelValorKm}>Valor/Km</label>
                <input type="text" className={styles.inputValorKm} />
              </div>
              <div className={styles.valorKm}>
                <label className={styles.labelValorKm}>Valor/Km</label>
                <input type="text" className={styles.inputValorKm} />
              </div>
              <div className={styles.valFaturado}>
                <label className={styles.labelValFaturado}>
                  Valor Faturado
                </label>
                <input type="text" className={styles.inputValFaturado} />
              </div>
              <div className={styles.Despesa}>
                <label className={styles.labelDespesa}>Despesa</label>
                <input type="text" className={styles.inputDespesa} />
              </div>
              <div className={styles.Buttons}>
                <div className={styles.buttomSalvar}>+Salvar</div>
                <div className={styles.buttomEnviar}>Enviar</div>
              </div>
            </section>

            <section className={styles.tabela}></section>
          </section>
        </section>

        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Vitor Carvalho</td>
                <td>WSS001</td>
                <td>329456</td>
                <td>08/01/2025</td>
                <td>📄</td>
                <td>Desp. de viagem a...</td>
                <td>1100110002 - FIN...</td>
                <td>0003</td>
                <td>002</td>
                <td>001</td>
                <td>BRL</td>
                <td>434Km</td>
                <td>0.65</td>
                <td>242.10</td>
                <td>40.05</td>
              </tr>
              <tr>
                <td></td>
                <td>Vanessa Porto</td>
                <td>WSS002</td>
                <td>987789</td>
                <td>01/01/2025</td>
                <td>📄</td>
                <td>Desp. de viagem a...</td>
                <td>1100110102 - FIN C...</td>
                <td>0002</td>
                <td>005</td>
                <td>001</td>
                <td>ARS</td>
                <td>289Km</td>
                <td>0.37</td>
                <td>106.93</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td></td>
                <td>Washington Klein</td>
                <td>WSS003</td>
                <td>546791</td>
                <td>03/01/2025</td>
                <td>📄</td>
                <td>Eventos de aprese...</td>
                <td>1100109002 - FIN...</td>
                <td>0001</td>
                <td>005</td>
                <td>001</td>
                <td>USD</td>
                <td>197Km</td>
                <td>0.75</td>
                <td>109.75</td>
                <td>29.97</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

export default Solicitacao;
