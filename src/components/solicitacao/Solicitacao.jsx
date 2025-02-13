import styles from './Solicitacao.module.scss'
import Navbar from '../Navbar/Navbar.jsx'

function Solicitacao (){
  return (
    <div className={styles.container}>
        <Navbar/>
        <h1>Solicitacao</h1>
    </div>
  )
}

export default Solicitacao