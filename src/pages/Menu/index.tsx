import { useState } from "react";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/saladaProteica/01.jpg";
import img2 from "../../assets/saladaProteica/02.jpg";
import img3 from "../../assets/saladaProteica/03.jpg";
import img4 from "../../assets/saladaProteica/04.jpg";
import img5 from "../../assets/saladaProteica/05.jpg";
import "../../../public/icons/bag.svg";

const Menu = () => {
  const [menuModal, setMenuModal] = useState(false);

  const openMenuModal = () => {
    setMenuModal(true);
  };

  const closeMenuModal = () => {
    setMenuModal(false);
  };
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
        <div className="categoriesFoods">
          <button onClick={openMenuModal}>
            <a href="#">Saladas proteicas</a>
          </button>
          <button onClick={openMenuModal}>
            <a href="#">Saladas +pedidas</a>
          </button>
          <button onClick={openMenuModal}>
            <a href="#">Proteínas</a>
          </button>
          <button onClick={openMenuModal}>
            <a href="#">Suco verde</a>
          </button>
          <button onClick={openMenuModal}>
            <a href="#">Carboidratos</a>
          </button>
        </div>
      </div>

      {menuModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <button className="closeButton" onClick={closeMenuModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="35"
                height="35"
              >
                <path d="m16.535,8.172l-3.828,3.828,3.828,3.828-.707.707-3.828-3.828-3.828,3.828-.707-.707,3.828-3.828-3.828-3.828.707-.707,3.828,3.828,3.828-3.828.707.707Zm7.465,3.828c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z" />
              </svg>
            </button>
            <div>
              <div className="imgMenu">
                <img src={img1} alt="Imagem 1" />
                <img src={img2} alt="Imagem 2" />
                <img src={img3} alt="Imagem 3" />
                <img src={img4} alt="Imagem 4" />
                <img src={img5} alt="Imagem 5" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="menuOptions"></div>
      <Footer />
    </div>
  );
};

export default Menu;
