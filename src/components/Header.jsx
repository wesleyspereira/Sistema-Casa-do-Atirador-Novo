import { Menu, Moon, Search, ShoppingCart, Sun, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoCasaAtirador from "../assets/logo-casa-atirador.png";
import "../styles/header.css";

const links = [
  { href: "#inicio", text: "Início" },
  { href: "#categorias", text: "Categorias" },
  { href: "#destaques", text: "Destaques" },
  { href: "#servicos", text: "Serviços" },
  { href: "#empresa", text: "A empresa" },
  { href: "#contato", text: "Contato" },
];

export default function Header({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("casa-atirador-theme");
      return saved === "light" ? "light" : "dark";
    } catch { return "dark"; }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("casa-atirador-theme", theme); } catch { /* storage indisponível */ }
  }, [theme]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") { setMenuOpen(false); setSearchOpen(false); setCartOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function search(event) {
    event.preventDefault();
    const term = query.toLocaleLowerCase("pt-BR");
    const match = term.includes("pistola") ? "Pistolas" : term.includes("revólver") || term.includes("revolver") ? "Revólveres" : term.includes("rifle") || term.includes("carabina") ? "Rifles e carabinas" : term.includes("esport") ? "Esportivas" : "Todas";
    onSearch(match);
    setSearchOpen(false);
    setQuery("");
  }

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#inicio" aria-label="Início - Casa do Atirador" onClick={() => setMenuOpen(false)}>
          <img src={logoCasaAtirador} alt="Casa do Atirador" className="header__logo" />
        </a>
        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`} id="site-navigation" aria-label="Navegação principal">
          {links.map(({ href, text }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{text}</a>
          ))}
        </nav>
        <div className="header__actions">
          <button className="icon-button" type="button" aria-label={searchOpen ? "Fechar pesquisa" : "Abrir pesquisa"} aria-expanded={searchOpen} onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); setCartOpen(false); }}>
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>
          <button className="icon-button icon-button--future" type="button" disabled title="Área do cliente em desenvolvimento" aria-label="Área do cliente em desenvolvimento"><UserRound size={19} /></button>
          <button className="icon-button theme-toggle" type="button" aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"} title={theme === "dark" ? "Tema claro" : "Tema escuro"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="icon-button cart-toggle" type="button" aria-label="Carrinho — em desenvolvimento" aria-expanded={cartOpen} aria-controls="cart-notice" onClick={() => { setCartOpen(!cartOpen); setSearchOpen(false); setMenuOpen(false); }}>
            <ShoppingCart size={19} />
          </button>
          <button className="icon-button header__menu-button" type="button" aria-controls="site-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); setCartOpen(false); }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {cartOpen && (
        <div id="cart-notice" className="header__cart-notice" role="status">
          <strong>Carrinho em desenvolvimento</strong>
          <p>A compra online ainda não está disponível nesta versão do site.</p>
          <button type="button" onClick={() => setCartOpen(false)}>Fechar</button>
        </div>
      )}
      {searchOpen && (
        <form className="header__search" onSubmit={search} role="search">
          <label htmlFor="site-search">Buscar categorias ou modelos</label>
          <div>
            <input id="site-search" ref={searchInputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: pistolas, esportivas, Taurus..." required />
            <button type="submit">Buscar</button>
          </div>
          <small>A pesquisa direciona para a seção correspondente da página.</small>
        </form>
      )}
    </header>
  );
}
