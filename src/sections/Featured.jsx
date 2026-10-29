import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import pistolasImage from "../assets/featured/destaque-pistolas.webp";
import revolverImage from "../assets/featured/destaque-revolver.webp";
import riflesImage from "../assets/featured/destaque-rifles.webp";
import esportivasImage from "../assets/featured/destaque-esportivas.webp";
import glockImage from "../assets/glock G25.jpg";
import sportingImage from "../assets/glock-balas-g25.webp";

// Imagens ilustrativas do projeto; não equivalem a anúncios de modelos específicos.
// As categorias são inspiradas no catálogo real e podem receber produtos cadastrados depois.
const products = [
  { name: "Linha de pistolas", category: "Pistolas", image: pistolasImage, tag: "Destaque", description: "Conheça as opções da categoria." },
  { name: "Linha de revólveres", category: "Revólveres", image: revolverImage, tag: "Destaque", description: "Modelos e informações da loja." },
  { name: "Rifles e carabinas", category: "Rifles e carabinas", image: riflesImage, tag: "Destaque", description: "Explore a linha de armas longas." },
  { name: "Linha esportiva", category: "Esportivas", image: esportivasImage, tag: "Destaque", description: "Opções para a prática esportiva." },
  { name: "Glock G25", category: "Pistolas", image: glockImage, tag: "No catálogo", description: "Modelo listado na loja original." },
  { name: "Pistolas e acessórios", category: "Esportivas", image: sportingImage, tag: "Seleção", description: "Explore a seleção ilustrativa." },
];
const filters = ["Todas", "Pistolas", "Revólveres", "Rifles e carabinas", "Esportivas"];

export default function Featured({ selected, onSelect }) {
  const scroller = useRef(null);
  const shown = products.filter(p => selected === "Todas" || p.category === selected);
  useEffect(() => { scroller.current?.scrollTo({ left: 0, behavior: "smooth" }); }, [selected]);
  function slide(direction) { scroller.current?.scrollBy({ left: direction * 290, behavior: "smooth" }); }
  return (
    <section className="section featured-section" id="destaques" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-heading section-heading--featured">
          <div>
            <span className="eyebrow">Vitrine da Casa do Atirador</span>
            <h2 id="featured-title">Produtos em <em>destaque</em></h2>
          </div>
          <div className="featured-heading-actions">
            <p>Uma seleção visual das nossas linhas. Fotos ilustrativas; modelos e disponibilidade devem ser confirmados na loja.</p>
            <div className="featured-controls" aria-label="Navegar entre destaques">
              <button type="button" onClick={() => slide(-1)} aria-label="Ver destaques anteriores"><ArrowLeft size={19}/></button>
              <button type="button" onClick={() => slide(1)} aria-label="Ver próximos destaques"><ArrowRight size={19}/></button>
            </div>
          </div>
        </div>
        <div className="featured-filters" aria-label="Filtrar por categoria">
          {filters.map(filter => <button key={filter} type="button" onClick={() => onSelect(filter)} className={selected === filter ? "is-active" : ""} aria-pressed={selected === filter}>{filter}</button>)}
        </div>
        <div ref={scroller} className="featured-grid" aria-label="Produtos e linhas em destaque">
          {shown.map((product) => <ProductCard key={product.name} {...product} onClick={() => onSelect(product.category)} />)}
        </div>
        <p className="featured-disclaimer">Imagens ilustrativas. Informações e requisitos para aquisição de produtos controlados devem ser confirmados com a equipe da Casa do Atirador.</p>
      </div>
    </section>
  );
}
