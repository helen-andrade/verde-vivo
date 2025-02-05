import Navbar from "../../components/Navbar";
import "./styles.css";
import otherImages from "../../assets/salad2/05.png";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div className="textHomePage">
          <p className="firstText">
            Bem-vindo ao <span className="titleText">VerdeVivo</span>!
          </p>
          <p>
            Aqui, acreditamos que uma alimentação saudável pode ser deliciosa,
            prática e acessível para todos. Nosso objetivo é te inspirar com
            receitas nutritivas, dicas de bem-estar e os melhores produtos
            naturais para o seu dia a dia. Seja para transformar sua rotina,
            melhorar sua saúde ou simplesmente descobrir novos sabores, estamos
            aqui para te ajudar nessa jornada! Explore, experimente e sinta-se
            bem!
          </p>
        </div>
        <img className="imageHome" src={otherImages} alt="Imagem de vegetais" />
      </div>

      <div className="footerHomePage">
        <footer>
          <div className="footerContent">
            <div className="footerSection">
              <h4>Contato</h4>
              <p>Email: verde@vivo.com</p>
              <p>Telefone: (11) 99999-9999</p>
            </div>
            <div className="footerSection">
              <h4>Links Úteis</h4>
              <ul>
                <li>
                  <a href="/AboutUs">Sobre nós</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Termos de Uso</a>
                </li>
              </ul>
            </div>
            <div className="footerSection">
              <h4>Nos siga</h4>
              <p>
                <a href="#">Instagram</a> | <a href="#">Facebook</a>
              </p>
            </div>
          </div>
          <p className="footerCopy">
            &copy; 2025 VerdeVivo. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
