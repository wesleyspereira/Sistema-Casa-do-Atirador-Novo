import { Menu, Moon, Search, Sun, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoCasaAtirador from "../assets/logo-casa-atirador.png";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("casa-atirador-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("casa-atirador-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  return (
    <header className="header">
      <a
        className="header__brand"
        href="#inicio"
        aria-label="Casa do Atirador"
      >
        <img
          src={logoCasaAtirador}
          alt="Casa do Atirador"
          className="header__logo"
        />
      </a>

      <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
        <a href="#categorias" onClick={() => setMenuOpen(false)}>
          Categorias
        </a>
        <a href="#destaques" onClick={() => setMenuOpen(false)}>
          Destaques
        </a>
        <a href="#servicos" onClick={() => setMenuOpen(false)}>
          Serviços
        </a>
        <a href="#empresa" onClick={() => setMenuOpen(false)}>
          A empresa
        </a>
      </nav>

      <div className="header__actions">
        <button className="icon-button" aria-label="Pesquisar">
          <Search size={18} />
        </button>

        <button className="icon-button" aria-label="Área do cliente">
          <UserRound size={18} />
        </button>

        <button
          className="icon-button theme-toggle"
          type="button"
          aria-label={
            theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
          }
          title={theme === "dark" ? "Tema claro" : "Tema escuro"}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="icon-button header__menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
