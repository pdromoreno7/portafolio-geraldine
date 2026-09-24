'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowUpRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { projectsData } from '@/lib/data';
import imagenProfile from '@/public/gera-podcast.JPG';

const tags = ['#Legal Design', '#IP', '#Legaltech'];
const ease = [0.22, 1, 0.36, 1] as const;

export default function Intro() {
  const { ref } = useSectionInView('Inicio', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const start = () => setEnter(true);
    if (document.documentElement.classList.contains('is-booted')) {
      start();
      return;
    }
    window.addEventListener('gera:ready', start);
    return () => window.removeEventListener('gera:ready', start);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col px-5 pt-[4.25rem] sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-[52%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--mint)_0%,transparent_68%)] opacity-80 lg:h-[58rem] lg:w-[58rem] lg:opacity-95" />
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--field)_0%,transparent_70%)] opacity-25 blur-2xl lg:h-[36rem] lg:w-[36rem] lg:opacity-40" />

      <div className="relative mx-auto flex min-h-0 w-full max-w-[90rem] flex-1 flex-col">
        <div className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,480px)_minmax(0,0.85fr)] lg:gap-6 lg:py-4">
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
            animate={enter ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
            transition={{ duration: 0.9, delay: 0.08, ease }}
          >
            <p className="text-2xl font-medium text-ink sm:text-3xl">Abogada</p>
            <h1 className="mt-1 font-display text-[2.8rem] leading-[0.92] tracking-[-0.03em] text-ink sm:text-[4.4rem] lg:text-[5rem]">
              Legal
              <span className="block italic">Designer.</span>
            </h1>

            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.li
                  key={tag}
                  className="rounded-full border border-dashed border-ink/30 px-3 py-1 text-[0.72rem] uppercase tracking-[0.12em] text-muted"
                  initial={{ opacity: 0, y: 10 }}
                  animate={enter ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.5, delay: 0.28 + i * 0.08, ease }}
                >
                  {tag}
                </motion.li>
              ))}
            </ul>

            <p className="mt-6 max-w-[34ch] text-[1.02rem] leading-relaxed text-muted">
              Combino asesoría jurídica con Legal Design para que empresas y personas entiendan, usen y confíen en sus
              documentos.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="#contact"
                onClick={() => {
                  setActiveSection('Contacto');
                  setTimeOfLastClick(Date.now());
                }}
                className="group relative grid h-[8.25rem] w-[8.25rem] place-items-center rounded-full bg-ember text-center text-white transition-[background-color,box-shadow,transform] duration-300 hover:bg-ember-deep hover:shadow-plate hover:scale-[1.03]"
              >
                <span className="px-4 text-[0.68rem] uppercase tracking-[0.16em] text-white/80">
                  Describe tu proyecto
                </span>
                <span className="font-display text-2xl leading-none">Conversemos</span>
                <BsArrowUpRight className="absolute bottom-7 right-8 text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </Link>

              <div className="flex flex-col gap-3 text-sm">
                <a
                  className="inline-flex items-center gap-2 font-medium text-ink transition-transform hover:translate-x-0.5"
                  href="/CV-GERALDINE-RODRIGUEZ-SIERRA.pdf"
                  download
                >
                  Descargar CV <HiDownload />
                </a>
                <div className="flex items-center gap-2">
                  <a
                    className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] text-ink transition-transform hover:scale-110 hover:border-field"
                    href="https://www.linkedin.com/in/geraldinerodriguezs/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] text-ink transition-transform hover:scale-110 hover:border-field"
                    href="https://wa.link/27gkfi"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto h-[28rem] w-[18rem] overflow-visible sm:h-[36rem] sm:w-[23rem] lg:h-[min(80vh,42rem)] lg:w-[min(54vh,28rem)]"
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(16px)' }}
            animate={enter ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : undefined}
            transition={{ duration: 1.05, delay: 0.12, ease }}
          >
            <div className="pointer-events-none absolute -inset-[22%] rounded-full bg-[radial-gradient(circle,var(--mint)_0%,transparent_64%)] opacity-90 lg:-inset-[32%] lg:opacity-100" />
            <div className="pointer-events-none absolute left-1/2 top-[62%] h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--field)_0%,transparent_72%)] opacity-30 blur-2xl lg:h-[85%] lg:w-[85%] lg:opacity-45" />
            <motion.div
              className="absolute bottom-0 left-1/2 h-[82%] w-[90%] -translate-x-1/2 rounded-[50%] border border-field/20"
              animate={enter ? { scale: [1, 1.04, 1], opacity: [0.45, 0.85, 0.45] } : undefined}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <div className="absolute bottom-[2%] left-1/2 h-[78%] w-[84%] -translate-x-1/2 rounded-[50%] bg-paper shadow-plate" />
            <Image
              src={imagenProfile}
              alt="Geraldine Rodríguez"
              width={900}
              height={1200}
              quality={95}
              priority
              className="absolute -top-[8%] left-1/2 z-10 h-[108%] w-[118%] max-w-none -translate-x-1/2 rounded-[50%] object-cover object-[center_4%]"
            />
          </motion.div>

          <motion.aside
            className="flex flex-row justify-between gap-4 pr-4 lg:flex-col lg:items-end lg:justify-center lg:gap-10 lg:self-stretch lg:pl-6 lg:pr-2"
            initial={{ opacity: 0, x: 28, filter: 'blur(8px)' }}
            animate={enter ? { opacity: 1, x: 0, filter: 'blur(0px)' } : undefined}
            transition={{ duration: 0.85, delay: 0.32, ease }}
          >
            <Proof active={enter} delay={0} label="Años de ejercicio" value="5" />
            <Proof
              active={enter}
              delay={0.45}
              label="Proyectos publicados"
              value={String(projectsData.length)}
              href="#projects"
              onNavigate={() => {
                setActiveSection('Proyectos');
                setTimeOfLastClick(Date.now());
              }}
            />
            <Proof
              active={enter}
              delay={0.9}
              label="Enfoque"
              value="Legal Design"
              valueClass="text-[1.65rem] sm:text-[2rem]"
            />
          </motion.aside>
        </div>

        <div className="relative mt-auto flex shrink-0 items-center justify-between gap-6 border-t border-[var(--line)] py-5 text-sm text-muted">
          <p>Documentos legales que se leen y se usan.</p>
          <p className="hidden sm:block">Asesoría · Legal Design · Piezas</p>
        </div>
      </div>
    </section>
  );
}

function Proof({
  label,
  value,
  valueClass,
  active,
  delay,
  href,
  onNavigate,
}: {
  label: string;
  value: string;
  valueClass?: string;
  active: boolean;
  delay: number;
  href?: string;
  onNavigate?: () => void;
}) {
  const content = (
    <>
      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">{label}</p>
      <motion.p
        className={`mt-1 font-display leading-none text-ink ${valueClass ?? 'text-[2.6rem] sm:text-[3.2rem]'}`}
        animate={active ? { y: [0, -7, 0], scale: [1, 1.06, 1] } : undefined}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
      >
        {value}
      </motion.p>
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onNavigate} className="text-left transition-colors hover:text-field lg:text-right">
        {content}
      </Link>
    );
  }

  return <div className="text-left lg:text-right">{content}</div>;
}
