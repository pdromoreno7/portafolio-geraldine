'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import imagenProfile from '@/public/profile-pic.jpg';
import { FaWhatsapp } from 'react-icons/fa';

export default function Intro() {
  const { ref } = useSectionInView('Inicio', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={imagenProfile}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="object-cover w-48 h-48 rounded-full"
            />
          </motion.div>

          {/* <motion.span
            className="absolute right-0 bottom-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hola, soy Pedro Moreno.</span> Soy un{' '}
        <span className="font-bold">desarrollador full-stack</span> con <span className="font-bold">3 años</span> de
        experiencia. Disfruto crear <span className="italic">sitios web y aplicaciones</span>. Mi enfoque es{' '}
        <span className="underline"> React (Next.js), React Native y Nest.js </span>.
      </motion.h1>

      <motion.div
        className="flex flex-col gap-2 justify-center items-center px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex gap-2 items-center px-7 py-3 text-white bg-gray-900 rounded-full transition outline-none font-outfit group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection('Contacto');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contáctame <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="flex gap-2 items-center px-7 py-3 bg-white rounded-full transition cursor-pointer outline-none font-outfit group focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
          href="/Cv-Pedro-Moreno-Frontend-2025.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/pedromorenodev/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://wa.me/573104416178"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
      </motion.div>
    </section>
  );
}
