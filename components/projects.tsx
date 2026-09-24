'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Proyectos', 0.35);

  return (
    <section ref={ref} id="projects" className="mb-24 w-full max-w-[90rem] scroll-mt-28 px-5 sm:mb-32 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading align="left">Proyectos</SectionHeading>
        <p className="mb-8 max-w-[42ch] text-muted sm:text-right">
          Piezas reales de Legal Design. Prueba de que el documento también puede ser un producto.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
