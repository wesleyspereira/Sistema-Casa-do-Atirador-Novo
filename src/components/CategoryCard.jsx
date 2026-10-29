import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({ title, subtitle, image, number, onClick }) {
  return (
    <button className="category-card" type="button" onClick={onClick} aria-label={`Ver destaques da categoria ${title}`}>
      <img src={image} alt="" className="category-card__image" loading="lazy" />
      <span className="category-card__shade" aria-hidden="true" />
      <span className="category-card__top"><span>{number}</span><ArrowUpRight size={19} aria-hidden="true" /></span>
      <span className="category-card__content"><span>{subtitle}</span><strong>{title}</strong><small>Explorar categoria <ArrowUpRight size={13} /></small></span>
    </button>
  );
}
