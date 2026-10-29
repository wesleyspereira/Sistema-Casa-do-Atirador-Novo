import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../sections/Categories";
import Featured from "../sections/Featured";
import Experience from "../sections/Experience";
import Services from "../sections/Services";
import About from "../sections/About";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  const [category, setCategory] = useState("Todas");
  function chooseCategory(next) {
    setCategory(next);
    requestAnimationFrame(() => document.getElementById("destaques")?.scrollIntoView({ behavior: "smooth" }));
  }
  return (
    <>
      <Header onSearch={chooseCategory} />
      <main>
        <Hero />
        <Categories onSelect={chooseCategory} />
        <Featured selected={category} onSelect={setCategory} />
        <Services />
        <Experience />
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
