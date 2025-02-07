import { SetStateAction, useState } from "react";
import "./Styles.css";

const termsOfUse = `
Bem-vindo ao nosso site! Antes de utilizar nossos serviços, leia atentamente os seguintes termos de uso. Ao acessar ou utilizar nosso site, você concorda com estes termos e condições.

1. Uso do Site
   - O usuário deve ter pelo menos 18 anos ou possuir autorização dos responsáveis legais para utilizar nossos serviços.
   - O uso do site é permitido apenas para fins legais e em conformidade com estes termos.

2. Cadastro e Conta
   - Para acessar determinadas funcionalidades, o usuário pode precisar criar uma conta.
   - O usuário é responsável por manter a confidencialidade de suas credenciais de acesso.

3. Direitos Autorais e Propriedade Intelectual
   - Todo o conteúdo do site, incluindo textos, imagens e logotipos, é protegido por leis de propriedade intelectual e não pode ser utilizado sem autorização.

4. Responsabilidades do Usuário
   - O usuário concorda em não violar leis, distribuir vírus ou tentar acessar informações restritas.

5. Modificações nos Termos
   - Reservamo-nos o direito de modificar estes termos a qualquer momento, e o uso contínuo do site representa a aceitação das alterações.

6. Limitação de Responsabilidade
   - Não nos responsabilizamos por danos causados pelo uso do site ou pela indisponibilidade dos serviços.

7. Contato
   - Para dúvidas sobre estes termos, entre em contato conosco.
`;

const privacyPolicy = `
Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso site.

1. Coleta de Informações
   - Podemos coletar informações fornecidas pelo usuário, como nome, e-mail e telefone, além de dados de navegação.

2. Uso das Informações
   - Utilizamos os dados para melhorar nossos serviços, personalizar a experiência do usuário e enviar comunicações relevantes.

3. Compartilhamento de Informações
   - Não vendemos ou compartilhamos informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais.

4. Cookies e Tecnologias de Rastreamento
   - Utilizamos cookies para aprimorar a experiência do usuário. O usuário pode configurar seu navegador para recusar cookies.

5. Segurança das Informações
   - Implementamos medidas de segurança para proteger seus dados, mas não podemos garantir total proteção contra ataques cibernéticos.

6. Direitos do Usuário
   - O usuário pode solicitar a exclusão ou correção de seus dados pessoais a qualquer momento.

7. Alterações na Política
   - Podemos modificar esta política periodicamente. O uso contínuo do site após as alterações indica aceitação das novas diretrizes.

8. Contato
   - Para dúvidas sobre nossa política de privacidade, entre em contato conosco.
`;

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (
    title: SetStateAction<string>,
    content: SetStateAction<string>
  ) => {
    setModalTitle(title);
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent("");
    setModalTitle("");
  };

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
                <button
                  className="buttonLinks"
                  onClick={() =>
                    openModal("Política de Privacidade", privacyPolicy)
                  }
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  className="buttonLinks"
                  onClick={() => openModal("Termos de Uso", termsOfUse)}
                >
                  Termos de Uso
                </button>
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

      {isOpen && (
        <div className="modalOverlay">
          <div className="modal">
            <div className="modalContent">
              <h2>{modalTitle}</h2>
              <p>{modalContent}</p>
              <button className="closeModalButton" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
