import CategoryCard from "../components/CategoryCard";
import pistolasImage from "../assets/pistolas.jpg";
import fullSizeImage from "../assets/full-size.jpg";
import esportivasImage from "../assets/esportivas.jpg";
import "../styles/sections.css";

const categories = [
  {
    number: "01",
    title: "Pistolas",
    subtitle: "Linha principal",
    image: pistolasImage,
  },
  {
    number: "02",
    title: "Full Size",
    subtitle: "Performance",
    image: fullSizeImage,
  },
  {
    number: "03",
    title: "Esportivas",
    subtitle: "Precisão",
    image: esportivasImage,
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
            Uma vitrine visual com categorias principais da Casa do Atirador,
            mantendo a identidade camuflada em toda a experiência.
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
