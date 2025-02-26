import "./Styles.css";
import imgTitle from "../../assets/ImageTitle/cha-verde.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="titleAndImage">
        <h1 className="title">
          <a href="/">VerdeVivo</a>
        </h1>
        <img
          className="imgHome"
          src={imgTitle}
          alt="Imagem da sombra de um rosto próximo a uma rosa"
        />
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
        <button className="svgButtonCarNavbar">
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
    </div>
  );
};

export default Navbar;
