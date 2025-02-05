import Navbar from "../../components/Navbar";
import imageOne from "../../assets/otherImages/06.jpg";
import imageSecond from "../../assets/otherImages/07.jpg";
import imageThirty from "../../assets/otherImages/08.jpg";
import "./styles.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutUs">
        <p className="aboutUsTitle">Sobre a VivaVerde</p>
        <p className="aboutUsText">
          A Viva Verde nasceu com a missão de transformar a maneira como as
          pessoas se alimentam, oferecendo opções saudáveis, saborosas e
          nutritivas. Acreditamos que uma alimentação equilibrada é a base para
          uma vida cheia de energia e bem-estar. Trabalhamos com ingredientes
          frescos, naturais e selecionados, garantindo refeições ricas em
          nutrientes e livres de conservantes artificiais. Nosso compromisso é
          proporcionar praticidade sem abrir mão da qualidade, ajudando nossos
          clientes a adotarem um estilo de vida mais saudável de forma simples e
          prazerosa. No cardápio da Viva Verde, você encontra saladas frescas,
          pratos balanceados, snacks naturais e bebidas funcionais, tudo pensado
          para atender diferentes necessidades alimentares, seja para quem busca
          emagrecimento, ganho de energia ou apenas uma alimentação mais leve e
          saudável. Além disso, nos preocupamos com a sustentabilidade.
          Priorizamos produtores locais, utilizamos embalagens ecológicas e
          incentivamos práticas que respeitam o meio ambiente. Seja para o dia a
          dia ou para momentos especiais, a Viva Verde é a escolha certa para
          quem deseja nutrir o corpo e a mente com o que há de melhor na
          natureza. <br /> 🌿 Viva saudável, viva natural, Viva Verde!
        </p>
        <div className="aboutUsImages">
          <img className="imageAboutUs" src={imageOne} alt="Imagem de vegetais" />
          <img className="imageAboutUs" src={imageSecond} alt="Imagem de vegetais" />
          <img className="imageAboutUs" src={imageThirty} alt="Imagem de vegetais" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
