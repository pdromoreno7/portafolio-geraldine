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
    <section ref={ref} id="home" className="flex items-center justify-center min-h-screen max-w-[70rem] mx-auto px-4">
      <div className="flex flex-col items-center w-full gap-8 md:flex-row">
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
            alt="Pedro Moreno portrait"
            width="400"
            height="400"
            quality="95"
            priority={true}
            className="object-cover rounded-full md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem]"
          />
        </motion.div>

        <div className="flex flex-col gap-8 md:justify-center md:items-center">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-3xl font-bold">Hola, soy </span>
            <span className="font-bold text-7xl">Geraldine Rodriguez</span>
            <span className="text-3xl font-bold">Abogada</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-lg font-medium md:justify-start md:items-start sm:flex-row">
            <Link
              href="#contact"
              className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none px-7 font-outfit group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
              onClick={() => {
                setActiveSection('Contacto');
                setTimeOfLastClick(Date.now());
              }}
            >
              Contáctame <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
            </Link>

            <a
              className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer px-7 font-outfit group focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
              href="/Cv-Pedro-Moreno-Frontend-2025.pdf"
              download
            >
              Download CV <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
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
          </div>
        </div>
        {/* <motion.h1
            className="mb-6 w-[50%]  text-2xl font-medium !leading-[1.5] sm:text-4xl font-ovo"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hola, soy Pedro Moreno.</span> Soy un{' '}
            <span className="font-bold">desarrollador full-stack</span> con <span className="font-bold">3 años</span> de
            experiencia. Disfruto crear <span className="italic">sitios web y aplicaciones</span>. Mi enfoque es{' '}
            <span className="underline"> React (Next.js), React Native y Nest.js </span>.
          </motion.h1> */}

        {/* <motion.div
            className="flex flex-col items-center justify-center gap-2 text-lg font-medium md:justify-start md:items-start sm:flex-row"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none px-7 font-outfit group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
              onClick={() => {
                setActiveSection('Contacto');
                setTimeOfLastClick(Date.now());
              }}
            >
              Contáctame <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
            </Link>

            <a
              className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer px-7 font-outfit group focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
              href="/Cv-Pedro-Moreno-Frontend-2025.pdf"
              download
            >
              Download CV <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
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
          </motion.div> */}
      </div>
    </section>
  );
}
