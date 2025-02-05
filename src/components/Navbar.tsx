import "../App.css";
import imgTitle from "../assets/ImageTitle/cha-verde.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="titleAndImage">
        <h1 className="title">
          <a href="/HomePage">VerdeVivo</a>
        </h1>
        <img
          className="imgHome"
          src={imgTitle}
          alt="Imagem da sombra de um rosto próximo a uma rosa"
        />
      </div>
      <ul className="navbarContainer">
        <a href="/HomePage">
          <li>Home</li>
        </a>
        <a href="/AboutUs">
          <li>About Us</li>
        </a>
        <a href="/Menu">
          <li>Menu</li>
        </a>
        <a href="/Contacts">
          <li>Contacts</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
