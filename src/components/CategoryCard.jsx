import { ArrowUpRight } from "lucide-react";

function CategoryCard({ title, subtitle, image, number }) {
  return (
    <article className="category-card">
      <img src={image} alt="" className="category-card__image" />

      <div className="category-card__shade"></div>

      <div className="category-card__top">
        <span>{number}</span>
        <ArrowUpRight size={18} />
      </div>

      <div className="category-card__content">
        <span>{subtitle}</span>
        <h3>{title}</h3>
      </div>
    </article>
  );
}

export default CategoryCard;
