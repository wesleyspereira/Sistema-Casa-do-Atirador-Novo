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
          Mais que uma loja.
          <span>Uma presença com identidade própria.</span>
        </h2>

        <p>
          Fundo camuflado, visual premium e uma vitrine preparada para valorizar
          produtos, serviços e atendimento especializado.
        </p>
      </div>
    </section>
  );
}

export default Experience;
