import aboutGun from "../assets/glock-balas-g25.webp";
export default function About() {
  return (
    <section className="about section--dark" id="empresa">
      <div className="about__media">
        <img src={aboutGun} alt="Fotografia ilustrativa de equipamento" loading="lazy" />
        <div className="about__media-overlay" />
        <span className="about__media-label">Casa do Atirador</span>
      </div>
      <div className="about__content">
        <span className="eyebrow">Quem somos</span>
        <h2>Experiência, tradição e atendimento especializado.</h2>
        <p>A Casa do Atirador atua com produtos e serviços relacionados à segurança, caça e esportes de tiro, incluindo acessórios e assessoria documental.</p>
        <p>Conheça nossas linhas e entre em contato com a equipe para tirar dúvidas sobre serviços e documentação.</p>
        <a href="https://www.instagram.com/casadoatiradorguarapari/" target="_blank" rel="noopener noreferrer" className="button button--primary">Conheça a empresa</a>
      </div>
    </section>
  );
}
