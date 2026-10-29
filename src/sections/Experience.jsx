import heroBackground from "../assets/fundo.png";

function Experience() {
  return (
    <section className="experience">
      <img
        src={heroBackground}
        alt="Textura camuflada Casa do Atirador"
        className="experience__background"
      />

      <div className="experience__overlay"></div>

      <div className="container experience__content">
        <span className="eyebrow">A experiência</span>

        <h2>
          Muito além dos equipamentos.
          <span>Uma experiência de confiança.</span>
        </h2>

        <p>
          Produtos, atendimento e assessoria para quem valoriza tradição,
          segurança e conhecimento especializado.
        </p>
      </div>
    </section>
  );
}

export default Experience;
