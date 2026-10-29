import { ArrowUpRight } from "lucide-react";
export default function ProductCard({ name, category, image, tag, description, onClick }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={image} alt={`Imagem ilustrativa da linha ${name}`} loading="lazy" />
        {tag && <span className="product-card__tag">{tag}</span>}
      </div>
      <div className="product-card__info">
        <span>{category}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button" className="product-card__action" onClick={onClick} aria-label={`Explorar ${name}`}>
          Explorar <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
