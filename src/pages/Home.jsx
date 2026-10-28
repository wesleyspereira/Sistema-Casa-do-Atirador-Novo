import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../sections/Categories";
import Experience from "../sections/Experience";
import Services from "../sections/Services";
import About from "../sections/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <Experience />
        <Services />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default Home;
