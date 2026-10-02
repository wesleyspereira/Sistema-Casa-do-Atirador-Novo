import { ArrowRight } from "lucide-react";

function ServiceCard({ number, title, text }) {
  return (
    <article className="service-card">
      <span className="service-card__number">{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>

        <button className="service-card__link">
          Saiba mais
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;
