import ServiceCard from "../components/ServiceCard";
const services = [
  { number: "01", title: "Assessoria documental", text: "Orientação sobre os procedimentos legais, documentações e requisitos aplicáveis." },
  { number: "02", title: "CR e processos de transferência", text: "Informações sobre concessão de CR (CAC) e processos de transferência, conforme as regras vigentes." },
  { number: "03", title: "Treinamentos e atendimento", text: "Atendimento especializado e informações sobre os treinamentos oferecidos pela empresa." },
];
export default function Services() {
  return (
    <section className="section section--cream" id="servicos">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow eyebrow--dark">Suporte completo</span><h2>Nossos <em>serviços</em></h2></div>
          <p>Mais que uma loja: atendimento especializado e orientação para clientes e praticantes de tiro esportivo.</p>
        </div>
        <div className="services-list">{services.map((s) => <ServiceCard key={s.number} {...s}/>)}</div>
      </div>
    </section>
  );
}
