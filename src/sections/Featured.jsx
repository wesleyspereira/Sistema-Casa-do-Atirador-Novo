import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Taurus GX4",
    category: "Pistola microcompacta",
    image: "https://www.taurususa.com/wp-content/uploads/2025/07/gx4.webp",
    tag: "Popular",
    link: "https://www.taurususa.com/firearms/pistols/taurus-gx4/",
  },
  {
    name: "Taurus G3",
    category: "Pistola full size",
    image: "https://www.taurususa.com/wp-content/uploads/2025/07/taurus_g3-b2a13b90-14.webp",
    tag: "Destaque",
    link: "https://www.taurususa.com/firearms/pistols/taurus-g3/",
  },
  {
    name: "Taurus TX 22",
    category: "Esportiva calibre .22 LR",
    image: "https://www.taurususa.com/wp-content/uploads/2025/07/tx22-1.webp",
    tag: "Esportiva",
    link: "https://www.taurususa.com/firearms/pistols/taurustx-22/",
  },
];

function Featured() {
  const scrollingProducts = [...products, ...products];

  return (
    <section className="section section--dark" id="destaques">
      <div className="container">
        <div className="section-heading section-heading--dark">
          <div>
            <span className="eyebrow">Produtos populares</span>
            <h2>Modelos em destaque</h2>
          </div>

          <p>
            Modelos em destaque com imagens oficiais fornecidas pelo site da
            Taurus. Os cards pausam ao passar o mouse.
          </p>
        </div>

        <div className="popular-marquee" aria-label="Produtos populares em destaque">
          <div className="popular-track">
            {scrollingProducts.map((product, index) => (
              <ProductCard key={`${product.name}-${index}`} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
