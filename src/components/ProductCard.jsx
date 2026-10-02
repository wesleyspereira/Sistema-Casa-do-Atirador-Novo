import { ArrowUpRight } from "lucide-react";

function ProductCard({ name, category, image, tag }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={image} alt={name} />

        {tag && <span className="product-card__tag">{tag}</span>}

        <button className="product-card__open" aria-label={`Abrir ${name}`}>
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="product-card__info">
        <span>{category}</span>
        <h3>{name}</h3>
      </div>
    </article>
  );
}

export default ProductCard;
