import { ArrowUpRight } from "lucide-react";

function ProductCard({ name, category, image, tag, link }) {
  const Wrapper = link ? "a" : "article";
  const wrapperProps = link
    ? {
        href: link,
        target: "_blank",
        rel: "noreferrer",
        className: "product-card",
        "aria-label": `Abrir ${name}`,
      }
    : { className: "product-card" };

  return (
    <Wrapper {...wrapperProps}>
      <div className="product-card__media">
        <img src={image} alt={name} />

        {tag && <span className="product-card__tag">{tag}</span>}

        <span className="product-card__open" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="product-card__info">
        <span>{category}</span>
        <h3>{name}</h3>
      </div>
    </Wrapper>
  );
}

export default ProductCard;
