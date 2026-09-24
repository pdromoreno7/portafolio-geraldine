'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Experience() {
  const { ref } = useSectionInView('Experiencia');

  return (
    <section id="experience" ref={ref} className="mb-24 w-full max-w-[90rem] scroll-mt-28 px-5 sm:mb-32 sm:px-8 lg:px-12">
      <SectionHeading align="left">Experiencia</SectionHeading>
      <ol className="relative border-l border-[var(--line)] pl-6 sm:pl-10">
        {experiencesData.map((item, index) => (
          <motion.li
            key={item.title}
            className="relative mb-12 last:mb-0"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08 * index, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-field sm:-left-[2.9rem]" />
            <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">{item.date}</p>
            <h3 className="mt-2 font-display text-[1.85rem] leading-none">{item.title}</h3>
            <p className="mt-2 font-medium text-field">{item.location}</p>
            <p className="mt-3 max-w-[70ch] leading-7 text-muted">{item.description}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
