import CategoryCard from "../components/CategoryCard";
import "../styles/sections.css";

const categories = [
  {
    number: "01",
    title: "Linha principal",
    subtitle: "Explore",
    image: "/images/category-01.jpg",
  },
  {
    number: "02",
    title: "Acessórios",
    subtitle: "Performance",
    image: "/images/category-02.jpg",
  },
  {
    number: "03",
    title: "Equipamentos",
    subtitle: "Precisão",
    image: "/images/category-03.jpg",
  },
];

function Categories() {
  return (
    <section className="section section--light" id="categorias">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow eyebrow--dark">Seleção</span>
            <h2>Explore por categoria</h2>
          </div>

          <p>
            Uma navegação simples, visual e sofisticada para destacar as
            principais áreas da loja.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard key={category.number} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
