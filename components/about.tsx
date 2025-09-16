'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

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
      <div className="font-outfit">
        <p className="mb-3">
          Soy <strong className="font-bold">Geraldine Rodríguez Sierra</strong>, abogada con más de tres años de
          experiencia asesorando a empresas y emprendedores en áreas como{' '}
          <strong className="font-bold">derecho corporativo, propiedad intelectual y protección de datos</strong>. A lo
          largo de mi carrera, he combinado el conocimiento jurídico con la innovación, liderando proyectos que integran{' '}
          <strong className="font-bold">Legal Design Thinking</strong>, transformación digital y comunicación
          estratégica para ofrecer soluciones jurídicas claras, accesibles y orientadas al negocio.
        </p>
        <p className="mb-3">
          Mi pasión por la tecnología me llevó a especializarme en <strong className="font-bold">Legaltech</strong>,
          actualmente como{' '}
          <strong className="font-bold">candidata a Magíster en Innovación en Derecho Digital y Legaltech</strong>. He
          desarrollado e implementado iniciativas de diseño legal, rediseño de procesos documentales y estrategias
          digitales para firmas legales, generando impacto tanto en la experiencia del usuario como en la eficiencia
          operativa.
        </p>
        <p className="mb-3">
          Disfruto aprender y enseñar, y me interesa profundamente la intersección entre el Derecho, el diseño y la
          tecnología. Creo firmemente que el futuro del Derecho es más colaborativo, visual y centrado en las personas.
        </p>
      </div>
    </motion.section>
  );
}
