import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroGun from "../assets/glock-balas-g25.webp";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">

      {/* Fundo */}
      <div className="hero__background"></div>

      {/* Camuflado */}
      <div className="hero__camo"></div>

      {/* Escurecimento */}
      <div className="hero__overlay"></div>

      <div className="hero__content container">

        {/* LADO ESQUERDO */}
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

        {/* LADO DIREITO */}
        <div className="hero__product">

          <div className="hero__product-glow"></div>

          <div className="hero__product-frame">
            <img
              src={heroGun}
              alt="Produto em destaque Casa do Atirador"
              className="hero__product-image"
            />

            <div className="hero__product-overlay"></div>

            <div className="hero__product-info">
              <span>Destaque</span>
              <strong>Casa do Atirador</strong>
            </div>
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