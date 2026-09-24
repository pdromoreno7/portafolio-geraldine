'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-[999] border-b border-[var(--line)] bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2 text-[1.05rem] tracking-tight text-ink"
          onClick={() => {
            setActiveSection('Inicio');
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="inline-block h-2 w-2 rotate-45 bg-field" aria-hidden />
          <span className="font-display italic">Geraldine Rodríguez.</span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-muted">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className={clsx(
                    'relative px-3 py-2 transition-colors hover:text-ink',
                    activeSection === link.name && 'text-ink'
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-field"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ember px-4 py-2 text-[0.78rem] font-semibold text-white transition-transform hover:scale-[1.04] hover:bg-ember-deep active:scale-95"
            onClick={() => {
              setActiveSection('Contacto');
              setTimeOfLastClick(Date.now());
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white transition-transform group-hover:scale-125" />
            Contáctame
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--line)] lg:hidden"
          >
            <ul className="flex flex-col px-5 py-3">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className={clsx(
                      'block py-3 text-sm uppercase tracking-[0.14em]',
                      activeSection === link.name ? 'text-field' : 'text-muted'
                    )}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
