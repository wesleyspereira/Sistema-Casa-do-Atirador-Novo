import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Produto em destaque 01",
    category: "Coleção premium",
    image: "/images/product-01.jpg",
    tag: "Destaque",
  },
  {
    name: "Produto em destaque 02",
    category: "Seleção especial",
    image: "/images/product-02.jpg",
  },
  {
    name: "Produto em destaque 03",
    category: "Performance",
    image: "/images/product-03.jpg",
  },
];

function Featured() {
  return (
    <section className="section section--dark" id="destaques">
      <div className="container">
        <div className="section-heading section-heading--dark">
          <div>
            <span className="eyebrow">Curadoria</span>
            <h2>Destaques da casa</h2>
          </div>

          <p>
            Troque estes produtos depois pelos itens reais do catálogo.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
