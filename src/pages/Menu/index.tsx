import { useState } from "react";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/saladaProteica/01.jpg";
import img2 from "../../assets/saladaProteica/02.jpg";
import img3 from "../../assets/saladaProteica/03.jpg";
import img4 from "../../assets/saladaProteica/04.jpg";
import img5 from "../../assets/saladaProteica/05.jpg";

const Menu = () => {
  const [menuModal, setMenuModal] = useState(false);

  const openMenuModal = () => {
    setMenuModal(true);
    document.body.classList.add("modal-open");
  };

  const closeMenuModal = () => {
    setMenuModal(false);
    document.body.classList.remove("modal-open");
  };

  const dishes = [
    { id: 1, img: img1, price: "R$27,90" },
    { id: 2, img: img2, price: "R$12,90" },
    { id: 3, img: img3, price: "R$17,90" },
    { id: 4, img: img4, price: "R$25,00" },
    { id: 5, img: img5, price: "R$32,50" },
    { id: 6, img: img1, price: "R$27,90" },
    { id: 7, img: img2, price: "R$12,90" },
    { id: 8, img: img3, price: "R$17,90" },
    { id: 9, img: img4, price: "R$25,00" },
    { id: 10, img: img5, price: "R$32,50" },
  ];

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
            <a href="#">Saladas</a>
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
          <div className="modalContentMenu">
            <button className="closeButton" onClick={closeMenuModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="m16.535,8.172l-3.828,3.828 3.828,3.828-.707.707-3.828-3.828-3.828,3.828-.707-.707,3.828-3.828-3.828-3.828.707-.707,3.828,3.828,3.828-3.828.707.707Zm7.465,3.828c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z" />
              </svg>
            </button>

            <div className="imgMenu">
              {dishes.map((dish) => (
                <div key={dish.id} className="imgDiv">
                  <img src={dish.img} alt={`Imagem ${dish.id}`} />
                  <p className="valueDish">
                    {dish.price}
                    <button className="svgButtonCar">
                      <svg
                        className="svgIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#4CAF50"
                      >
                        <title>Adicionar ao carrinho</title>
                        <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 13l.805 2H19a1 1 0 0 0 .928-.629l2.9-7.27A.999.999 0 0 0 21.999 6H5.756L4.896 3.683A1 1 0 0 0 3.956 3H1v2h2.365l3.6 9H7.334z" />
                      </svg>
                    </button>
                  </p>
                </div>
              ))}
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
