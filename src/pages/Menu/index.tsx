import { useState } from "react";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/protein-salad/01.jpg";
import img2 from "../../assets/protein-salad/02.jpg";
import img3 from "../../assets/protein-salad/03.jpg";
import img4 from "../../assets/protein-salad/04.jpg";
import img5 from "../../assets/protein-salad/05.jpg";
import img6 from "../../assets/protein/01.jpg";
import img7 from "../../assets/protein/02.jpg";
import img8 from "../../assets/protein/03.jpg";
import img9 from "../../assets/protein/04.jpg";
import img10 from "../../assets/protein/05.jpg";
import img11 from "../../assets/green-juice/01.jpg";
import img12 from "../../assets/green-juice/02.jpg";
import img13 from "../../assets/green-juice/03.jpg";
import img14 from "../../assets/green-juice/04.jpg";
import img15 from "../../assets/green-juice/05.jpg";
import img16 from "../../assets/rice/01.jpg";
import img17 from "../../assets/rice/02.jpg";
import img18 from "../../assets/rice/03.jpg";
import img19 from "../../assets/rice/04.jpg";
import img20 from "../../assets/rice/05.jpg";
import img21 from "../../assets/most-requested/01.jpg";
import img22 from "../../assets/most-requested/02.jpg";
import img23 from "../../assets/most-requested/03.jpg";
import img24 from "../../assets/most-requested/05.png";
import img25 from "../../assets/most-requested/06.jpg";

interface MenuItem {
  id: number;
  img: string;
  price: string;
}

const menuItems: Record<string, MenuItem[]> = {
  Saladas: [
    { id: 1, img: img1, price: "R$27,90" },
    { id: 2, img: img2, price: "R$12,90" },
    { id: 3, img: img3, price: "R$17,90" },
    { id: 4, img: img4, price: "R$25,00" },
    { id: 5, img: img5, price: "R$32,50" },
  ],
  Proteínas: [
    { id: 6, img: img6, price: "R$27,90" },
    { id: 7, img: img7, price: "R$12,90" },
    { id: 8, img: img8, price: "R$17,90" },
    { id: 9, img: img9, price: "R$25,00" },
    { id: 10, img: img10, price: "R$32,50" },
  ],
  "Suco Verde": [
    { id: 11, img: img11, price: "R$27,90" },
    { id: 12, img: img12, price: "R$12,90" },
    { id: 13, img: img13, price: "R$17,90" },
    { id: 14, img: img14, price: "R$25,00" },
    { id: 15, img: img15, price: "R$32,50" },
  ],
  Carboidratos: [
    { id: 16, img: img16, price: "R$27,90" },
    { id: 17, img: img17, price: "R$12,90" },
    { id: 18, img: img18, price: "R$17,90" },
    { id: 19, img: img19, price: "R$25,00" },
    { id: 20, img: img20, price: "R$32,50" },
  ],
  "Saladas Premium": [
    { id: 21, img: img21, price: "R$27,90" },
    { id: 22, img: img22, price: "R$12,90" },
    { id: 23, img: img23, price: "R$17,90" },
    { id: 24, img: img24, price: "R$25,00" },
    { id: 25, img: img25, price: "R$32,50" },
  ],
};

interface MenuModalState {
  open: boolean;
  category: string | null;
}

const Menu = () => {
  const [menuModal, setMenuModal] = useState<MenuModalState>({
    open: false,
    category: null,
  });

  const openMenuModal = (category: string) => {
    setMenuModal({ open: true, category });
    document.body.classList.add("modal-open");
  };

  const closeMenuModal = () => {
    setMenuModal({ open: false, category: null });
    document.body.classList.remove("modal-open");
  };

  const handleAddToCart = () => {
    alert("Add to cart");
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
          {Object.keys(menuItems).map((category) => (
            <button key={category} onClick={() => openMenuModal(category)}>
              <a href="#">{category}</a>
            </button>
          ))}
        </div>
      </div>

      {menuModal.open && menuModal.category && (
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

            <h2 className="modalTitle">{menuModal.category}</h2>
            <div className="imgMenu">
              {menuItems[menuModal.category]?.length > 0 ? (
                menuItems[menuModal.category].map((dish) => (
                  <div key={dish.id} className="imgDiv">
                    <img src={dish.img} alt={`Imagem ${dish.id}`} />
                    <div className="dishInfo">
                      <p className="valueDish">{dish.price}</p>
                      <button
                        className="svgButtonCar"
                        onClick={handleAddToCart}
                      >
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
                    </div>
                  </div>
                ))
              ) : (
                <p className="emptyMessage">
                  Em breve adicionaremos novos pratos! 🥗
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Menu;
