import { useState } from "react";
import "./Styles.css";
import imgTitle from "../../assets/ImageTitle/cha-verde.png";

const Navbar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleOpenCartModal = () => setIsCartModalOpen(true);
  const handleCloseCartModal = () => setIsCartModalOpen(false);

  const ModalItensCar = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Itens do seu carrinho</h2>
          <button className="closeButtonModalCar" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path d="m16.535,8.172l-3.828,3.828 3.828,3.828-.707.707-3.828-3.828-3.828,3.828-.707-.707,3.828-3.828-3.828-3.828.707-.707,3.828,3.828,3.828-3.828.707.707Zm7.465,3.828c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="navbar">
      <div className="titleAndImage">
        <h1 className="title">
          <a href="/">VerdeVivo</a>
        </h1>
        <img className="imgHome" src={imgTitle} alt="Imagem de um ramo" />
      </div>
      <ul className="navbarContainer">
        <a href="/">
          <li>Início</li>
        </a>
        <a href="/AboutUs">
          <li>Sobre nós</li>
        </a>
        <a href="/Menu">
          <li>Menu</li>
        </a>
        <a href="/Contacts">
          <li>Contatos</li>
        </a>
        <button className="svgButtonCarNavbar" onClick={handleOpenCartModal}>
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
      </ul>

      <ModalItensCar isOpen={isCartModalOpen} onClose={handleCloseCartModal} />
    </div>
  );
};

export default Navbar;
