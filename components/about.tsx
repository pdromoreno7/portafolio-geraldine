'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const offers = [
  {
    title: 'Asesoría legal',
    body: 'Derecho corporativo, propiedad intelectual, protección de datos y derecho comercial para empresas y emprendedores.',
  },
  {
    title: 'Legal Design',
    body: 'Documentos claros, visuales y accionables: políticas, reglamentos y contratos que las personas pueden usar.',
  },
  {
    title: 'Piezas diseñadas',
    body: 'Materiales de onboarding, infografías y piezas de cultura legal encargadas a partir de un documento o un proceso real.',
  },
];

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="w-full max-w-[90rem] px-5 scroll-mt-28 sm:px-8 lg:px-12 mb-24 sm:mb-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      id="about"
    >
      <div className="grid gap-8 border-y border-[var(--line)] py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16">
        <p className="font-display text-[2.6rem] leading-[0.95] tracking-[-0.03em] sm:text-[4.2rem]">
          El futuro del derecho es más visual.
        </p>
        <div className="max-w-[62ch] text-[1.05rem] leading-8 text-muted">
          <SectionHeading align="left">Acerca de mí</SectionHeading>
          <p className="mb-4">
            Soy <strong className="font-semibold text-ink">Geraldine Rodríguez Sierra</strong>, abogada con cinco
            años de experiencia asesorando a empresas y emprendedores en áreas como{' '}
            <strong className="font-semibold text-ink">derecho corporativo, propiedad intelectual y protección de datos</strong>.
            A lo largo de mi carrera, he combinado el conocimiento jurídico con la innovación, liderando proyectos que
            integran <strong className="font-semibold text-ink">Legal Design Thinking</strong>, transformación digital y
            comunicación estratégica para ofrecer soluciones jurídicas claras, accesibles y orientadas al negocio.
          </p>
          <p className="mb-4">
            Mi pasión por la tecnología me llevó a especializarme en <strong className="font-semibold text-ink">Legaltech</strong>,
            actualmente como <strong className="font-semibold text-ink">Magíster en Innovación en Derecho Digital y Legaltech</strong>.
            He desarrollado e implementado iniciativas de diseño legal, rediseño de procesos documentales y estrategias
            digitales para firmas legales, generando impacto tanto en la experiencia del usuario como en la eficiencia
            operativa.
          </p>
          <p>
            Disfruto aprender y enseñar, y me interesa profundamente la intersección entre el Derecho, el diseño y la
            tecnología. Creo firmemente que el futuro del Derecho es más colaborativo, visual y centrado en las personas.
          </p>
        </div>
      </div>

      <div className="grid border-b border-[var(--line)] md:grid-cols-3">
        {offers.map((offer, index) => (
          <motion.article
            key={offer.title}
            className="group border-[var(--line)] py-8 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index, duration: 0.45 }}
          >
            <h3 className="font-display text-[2rem] leading-none tracking-tight transition-colors group-hover:text-field">
              {offer.title}
            </h3>
            <p className="mt-4 max-w-[36ch] leading-7 text-muted">{offer.body}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
