import { ArrowUpRight } from "lucide-react";
export default function ServiceCard({ number, title, text }) {
  return (
    <article className="service-card">
      <span className="service-card__number">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <a className="service-card__link" href="https://wa.me/5527998455584" target="_blank" rel="noopener noreferrer" aria-label={`Consultar a Casa do Atirador sobre ${title}`}>
          Saiba mais <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
