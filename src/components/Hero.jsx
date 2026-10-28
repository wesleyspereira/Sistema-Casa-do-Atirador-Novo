import { ArrowDown, ArrowUpRight } from "lucide-react";
import "../styles/hero.css";

function Hero() {
  const heroVideo = `${import.meta.env.BASE_URL}videos/hero.mp4`;

  return (
    <section className="hero" id="inicio">

      {/* VIDEO DE FUNDO */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* CAMUFLADO */}
      <div className="hero__camo"></div>

      {/* ESCURECIMENTO */}
      <div className="hero__overlay"></div>

      <div className="hero__content container">

        <div className="hero__text">
          <span className="eyebrow">
            Experiência • tradição • precisão
          </span>

          <h1>
            Casa do
            <span>Atirador</span>
          </h1>

          <p>
            Uma presença digital criada para transmitir confiança,
            sofisticação e atendimento especializado em cada detalhe.
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href="#categorias"
            >
              Explorar
              <ArrowUpRight size={16} />
            </a>

            <a
              className="button button--ghost"
              href="#empresa"
            >
              Conheça a empresa
            </a>
          </div>
        </div>

      </div>

      <a href="#categorias" className="hero__scroll">
        <span>Role para explorar</span>
        <ArrowDown size={15} />
      </a>

    </section>
  );
}

export default Hero;