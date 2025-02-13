import '../../components/Loggin/Loggin.scss';
import { Link } from 'react-router-dom';
function Loggin() {
  return (
    <>
      <main>
        <section className="Capa">          
        </section>
        <section className="Logo">
          <h1 ><b>Boa Vindas ao <br/> Novo Portal SISPAR</b> </h1>
          <p><b>Sistema de Emissão de Boletos e Parcelamento</b></p>
          <form action="" method="get">
            <input type="text" name="username" placeholder="Username" className='Username'/>
            <input type="password" name="password" placeholder="Password" className='Password'/>
            <a href="#">Esqueci a Minha Senha</a>
            <div className='btn'>
              <Link to="/Reembolsos">
              <button type="submit" className='Entrar'>Entrar</button>
              </Link>
              <button type="submit" className='CriarConta'>Criar Conta</button>
            </div>
            
          </form>          
        </section>
        
      
      </main>
    </>
  );
}

export default Loggin;
