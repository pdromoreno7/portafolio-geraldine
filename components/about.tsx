"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Acerca de mi</SectionHeading>
      <p className="mb-3">
        {" "}
        Con más de <span className="font-medium">3 años de experiencia</span> en
        desarrollo web y móvil, he perfeccionado mis habilidades como{" "}
        <span className="font-medium">
          Desarrollador Frontend JavaScript/React
        </span>
        . Mi camino en la tecnología comenzó desde joven, impulsado por mi
        pasión por{" "}
        <span className="font-medium">la computación y la innovación</span>. A
        lo largo de mi carrera, he entregado{" "}
        <span className="font-medium">más de 10 proyectos exitosos</span> tanto
        para startups como para empresas de nivel empresarial, creando
        soluciones robustas con tecnologías como{" "}
        <span className="font-medium">
          React, React Native, Next.js, Node.js y Nest.js
        </span>
        . También soy competente en herramientas y prácticas como{" "}
        <span className="font-medium">
          Git Flow, principios SOLID, pruebas unitarias, pruebas end to end,
          arquitectura limpia, CI/CD
        </span>{" "}
        y microfrontends.{" "}
      </p>{" "}
      <p className="mb-3">
        {" "}
        Uno de mis logros más emocionantes ha sido liderar el desarrollo de{" "}
        <a href="https://buucly.com/" target="_blank" className="italic">
          Buucly.com
        </a>
        , una plataforma en beta que utiliza{" "}
        <span className="font-medium">inteligencia artificial</span> para
        generar libros personalizados al instante. Este proyecto me permitió
        combinar mi experiencia técnica con mi pasión por construir herramientas
        que mejoren la productividad y la creatividad.{" "}
      </p>{" "}
      <p className="mb-3">
        {" "}
        <span className="italic">Mi parte favorita de la programación</span> es
        enfrentar problemas complejos y crear soluciones escalables y de alta
        calidad. Estoy en constante aprendizaje y mejora, explorando nuevas
        tecnologías como{" "}
        <span className="font-medium">
          TypeScript, Prisma, Docker, PostgreSQL y MongoDB
        </span>
        . Mi compromiso con la innovación y el código limpio está en el núcleo
        de mi proceso de desarrollo.{" "}
      </p>{" "}
      <p>
        {" "}
        <span className="italic">Cuando no estoy programando</span>, disfruto
        explorando la intersección entre{" "}
        <span className="font-medium">
          tecnología, historia y filosofía politica
        </span>
        . También me encanta aprender nuevas habilidades y desafiarme a mí
        mismo. Actualmente, estoy profundizando en nuevos frameworks de
        programación y disfrutando de pasatiempos como tocar música y enseñar
        desarrollo web a otros.{" "}
      </p>
    </motion.section>
  );
}
