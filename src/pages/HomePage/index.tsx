import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";
import otherImages from "../../assets/salad2/05.png";
import Footer from "../../components/Footer/Footer";

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
          <div className="place-order-button">
            <a href="/Menu">Fazer pedido</a>
          </div>
        </div>
        <img className="imageHome" src={otherImages} alt="Imagem de vegetais" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
