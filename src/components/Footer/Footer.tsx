import "./Styles.css"

const Footer = () => {
  return (
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
  );
};

export default Footer;
