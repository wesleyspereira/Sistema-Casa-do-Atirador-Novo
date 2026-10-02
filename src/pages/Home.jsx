import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../sections/Categories";
import Featured from "../sections/Featured";
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
        <Featured />
        <Experience />
        <Services />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default Home;
