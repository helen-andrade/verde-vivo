import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../../public/icons/bag.svg";
import "../../../public/icons/downArrow.svg";

import "./styles.css";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="menu">
        <p className="menuTitle">
          Sabores Saudáveis para o Seu Dia 🌿🥗 <br /> <br /> Descubra uma
          seleção de pratos nutritivos, feitos com ingredientes frescos e
          equilibrados para o seu bem-estar. <br /> <br /> Escolha o seu
          favorito e aproveite! 🍽️✨
        </p>
      </div>

      <div className="menuCategories">
        <ul className="categoriesFoods">
          <li>
            <a href="#">Saladas proteicas</a>
          </li>
          <li>
            <a href="#">Saladas +pedidas</a>
          </li>
          <li>
            <a href="#">Proteínas</a>
          </li>
          <li>
            <a href="#">Suco verde</a>
          </li>
          <li>
            <a href="#">Carboidratos</a>
          </li>
        </ul>
      </div>

      <div className="menuOptions"></div>
      <Footer />
    </div>
  );
};

export default Menu;
