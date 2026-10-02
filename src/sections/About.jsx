function About() {
  return (
    <section className="about section--dark" id="empresa">
      <div className="about__media">
        <img src="/images/about.jpg" alt="Ambiente Casa do Atirador" />
      </div>

      <div className="about__content">
        <span className="eyebrow">Nossa história</span>

        <h2>Tradição com uma nova experiência digital.</h2>

        <p>
          Coloque aqui a história real da Casa do Atirador, seus anos de
          atuação, diferenciais, atendimento e relação com os clientes.
        </p>

        <p>
          A ideia é transmitir autoridade sem poluir a página: texto curto,
          imagem forte e identidade consistente.
        </p>

        <a href="#" className="text-link">
          Conheça nossa história →
        </a>
      </div>
    </section>
  );
}

export default About;
