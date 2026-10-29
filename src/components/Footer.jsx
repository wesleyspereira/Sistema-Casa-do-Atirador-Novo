import { Instagram, MessageCircle, Mail } from "lucide-react";
import logoCasaAtirador from "../assets/logo-casa-atirador.png";
import "../styles/footer.css";
export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logoCasaAtirador} alt="Casa do Atirador" className="footer__logo" />
          <p>Tradição, precisão e atendimento especializado. Guarapari, Espírito Santo.</p>
          <p className="footer__legal">Produtos controlados sujeitos à legislação e à documentação exigida. Consulte a loja para informações atualizadas.</p>
        </div>
        <div className="footer__columns">
          <div>
            <span className="footer__title">Navegação</span>
            <a href="#inicio">Início</a><a href="#categorias">Categorias</a><a href="#destaques">Destaques</a><a href="#servicos">Serviços</a><a href="#empresa">A empresa</a>
          </div>
          <div>
            <span className="footer__title">Contato</span>
            <a href="https://wa.me/5527998455584" target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> (27) 99845-5584</a>
            <a href="https://www.instagram.com/casadoatiradorguarapari/" target="_blank" rel="noopener noreferrer"><Instagram size={15} /> Instagram</a>
            <a href="mailto:contato@casadoatiradorguarapari.com.br"><Mail size={15} /> E-mail</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} Casa do Atirador Comércio de Armas Ltda. · CNPJ 40.423.669/0001-00</span></div>
    </footer>
  );
}
