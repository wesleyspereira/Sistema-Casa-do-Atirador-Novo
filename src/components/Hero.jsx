import { ArrowDown, ArrowUpRight } from "lucide-react";
import "../styles/hero.css";

export default function Hero() {
  // Seu vídeo original foi preservado em public/videos/hero.mp4.
  // Para trocar no futuro, substitua apenas o arquivo mantendo o nome.
  const heroVideo = `${import.meta.env.BASE_URL}videos/hero.mp4`;

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div className="hero__text">
          <span className="eyebrow">Experiência • tradição • precisão</span>
          <h1 id="hero-title">Casa do <span>Atirador</span></h1>
          <p>Equipamentos, acessórios e soluções para quem vive o tiro com responsabilidade e paixão.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#categorias">Explorar categorias <ArrowUpRight size={16} /></a>
            <a className="button button--ghost" href="#empresa">Conheça a empresa</a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Vídeo de apresentação da Casa do Atirador">
          <video className="hero__video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={heroVideo} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>
      </div>
      <a href="#categorias" className="hero__scroll">Role para explorar <ArrowDown size={15} /></a>
    </section>
  );
}
