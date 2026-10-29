import CategoryCard from "../components/CategoryCard";
import pistolasImage from "../assets/pistolas.jpg";
import revolverImage from "../assets/revolver-categoria.webp";
import riflesImage from "../assets/esportivas.jpg";
import esportivasImage from "../assets/full-size.jpg";
import "../styles/sections.css";

export const categories = [
  { number: "01", title: "Pistolas", subtitle: "Armas curtas", image: pistolasImage },
  { number: "02", title: "Revólveres", subtitle: "Armas curtas", image: revolverImage },
  { number: "03", title: "Rifles e carabinas", subtitle: "Armas longas", image: riflesImage },
  { number: "04", title: "Esportivas", subtitle: "Tiro esportivo", image: esportivasImage },
];

export default function Categories({ onSelect }) {
  return (
    <section className="section categories-section" id="categorias" aria-labelledby="categories-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Explore nosso universo</span>
            <h2 id="categories-title">Explore por <em>categoria</em></h2>
          </div>
          <p>Equipamentos para diferentes perfis. Conheça as linhas apresentadas pela Casa do Atirador.</p>
        </div>
        <div className="categories-grid">
          {categories.map((category) => <CategoryCard key={category.number} {...category} onClick={() => onSelect(category.title)} />)}
        </div>
      </div>
    </section>
  );
}
