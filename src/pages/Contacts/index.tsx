import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../../../public/icons/instagram.svg";
import "../../../public/icons/facebook.svg";
import "../../../public/icons/whatsapp.svg";
import "../../../public/icons/email.svg";

import "./styles.css";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <p>
          Aguardamos ansiosos seu chamado! Vamos te responder em até 24 horas.
          <br /> <br /> Você pode entrar em contato com nossos atendentes
          através dos seguintes meios:
        </p>
      </div>
      <div className="icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.svg" alt="Facebook" />
        </a>
        <a
          href="https://wa.me/5577998485611?text=Olá,%20gostaria%20de%20mais%20informações!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/whatsapp.svg" alt="Whatsapp" />
        </a>
        <a href="https://criarmeulink.com.br/u/1738760239" target="_blank" rel="noopener noreferrer">
          <img src="/icons/email.svg" alt="Email" />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
