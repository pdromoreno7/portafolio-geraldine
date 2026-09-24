'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Skills() {
  const { ref } = useSectionInView('Habilidades');

  return (
    <section id="skills" ref={ref} className="mb-24 w-full max-w-[90rem] scroll-mt-28 px-5 sm:mb-32 sm:px-8 lg:px-12">
      <SectionHeading align="left">Habilidades</SectionHeading>
      <ul className="grid border-t border-[var(--line)] sm:grid-cols-2">
        {skillsData.map((skill, index) => (
          <motion.li
            key={skill}
            className="border-b border-[var(--line)] py-5 pr-6 text-[1.05rem] leading-snug sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 6, color: 'var(--field)' }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
