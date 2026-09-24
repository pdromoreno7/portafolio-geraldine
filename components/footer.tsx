import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mx-auto mb-10 flex w-full max-w-[90rem] flex-col gap-4 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <p>Documentos legales que se leen y se usan.</p>
      <small className="text-xs">© {new Date().getFullYear()} Geraldine Rodríguez. Todos los derechos reservados.</small>
      <div className="flex items-center gap-3">
        <a
          className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] transition-transform hover:scale-110 hover:border-field hover:text-ink"
          href="https://www.linkedin.com/in/geraldinerodriguezs/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] transition-transform hover:scale-110 hover:border-field hover:text-ink"
          href="https://wa.link/27gkfi"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
