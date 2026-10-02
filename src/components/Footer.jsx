import { Instagram, MessageCircle, MapPin } from "lucide-react";
import logoCasaAtirador from "../assets/logo-casa-atirador.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img
            src={logoCasaAtirador}
            alt="Casa do Atirador"
            className="footer__logo"
          />

          <p>Experiência, confiança e atendimento especializado.</p>
        </div>

        <div className="footer__columns">
          <div>
            <span className="footer__title">Navegação</span>
            <a href="#categorias">Categorias</a>
            <a href="#destaques">Destaques</a>
            <a href="#servicos">Serviços</a>
            <a href="#empresa">A empresa</a>
          </div>

          <div>
            <span className="footer__title">Contato</span>
            <a href="#">
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a href="#">
              <Instagram size={15} /> Instagram
            </a>
            <a href="#">
              <MapPin size={15} /> Localização
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Casa do Atirador.</span>
      </div>
    </footer>
  );
}

export default Footer;
