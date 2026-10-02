import ServiceCard from "../components/ServiceCard";

const services = [
  {
    number: "01",
    title: "Atendimento especializado",
    text: "Espaço para explicar o suporte prestado pela equipe antes, durante e depois do atendimento.",
  },
  {
    number: "02",
    title: "Análise documental",
    text: "Uma futura área exclusiva poderá organizar o envio e acompanhamento de documentos.",
  },
  {
    number: "03",
    title: "Cliente já autorizado",
    text: "Fluxo dedicado para clientes que já possuem a documentação necessária e desejam atendimento.",
  },
];

function Services() {
  return (
    <section className="section section--cream" id="servicos">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow eyebrow--dark">Serviços</span>
            <h2>Atendimento em cada etapa</h2>
          </div>

          <p>
            Área preparada para receber os serviços reais da empresa depois da
            aprovação do visual.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
