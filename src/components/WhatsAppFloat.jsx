// Atalho para o WhatsApp que já consta no rodapé do site.
// Ao trocar o número da empresa, atualize também o componente Footer.jsx.
export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/5527998455584"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Casa do Atirador pelo WhatsApp"
      title="Fale com a loja no WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3.5c-6.88 0-12.45 5.53-12.45 12.38 0 2.16.55 4.2 1.6 6L3.6 28.5l6.82-1.79A12.48 12.48 0 0 0 16 28c6.87 0 12.45-5.53 12.45-12.38S22.87 3.5 16 3.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="m11.2 10.3-1.1.7c-.74.49-1.21 1.67-.7 3.1 1.2 3.42 4.72 6.73 7.98 7.53 1.5.37 2.58-.13 3.2-.9l.65-1.03c.3-.46.08-.87-.33-1.09l-2.6-1.28c-.4-.19-.72-.08-1.03.32l-.95 1.09a12.4 12.4 0 0 1-4.77-4.74l.78-.84c.31-.32.38-.68.18-1.04l-1.13-2.24c-.24-.48-.65-.51-1.18-.18Z" fill="currentColor"/>
      </svg>
    </a>
  );
}
