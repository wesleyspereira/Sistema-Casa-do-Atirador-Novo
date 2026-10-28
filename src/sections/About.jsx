import aboutGun from "../assets/glock-balas-g25.webp";

function About() {
  return (
    <section className="about section--dark" id="empresa">

      <div className="about__media">

        <img
          src={aboutGun}
          alt="Casa do Atirador"
        />

        <div className="about__media-overlay"></div>

        <span className="about__media-label">
          Casa do Atirador
        </span>

      </div>

      <div className="about__content">

        <span className="eyebrow">
          Nossa história
        </span>

        <h2>
          Tradição, experiência e atendimento especializado.
        </h2>

        <p>
          A Casa do Atirador construiu sua trajetória com foco em
          atendimento, confiança e conhecimento especializado.
        </p>

        <p>
          Este espaço poderá apresentar a história real da empresa,
          seus diferenciais, experiência e compromisso com os clientes.
        </p>

        <a href="#" className="text-link">
          Conheça nossa história →
        </a>

      </div>

    </section>
  );
}

export default About;