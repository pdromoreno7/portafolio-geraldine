import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import dePratiImg from '@/public/deprati.png';
import venturaLegalDesign from '@/public/ventura-legal-portatil.webp';
import buuclyLegalDesign from '@/public/buubly-legal-de.webp';

export const links = [
  {
    name: 'Inicio',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Proyectos',
    hash: '#projects',
  },
  {
    name: 'Habilidades',
    hash: '#skills',
  },
  {
    name: 'Experiencia',
    hash: '#experience',
  },
  {
    name: 'Contacto',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Abogada',
    location: 'Nicolás Pareja & Asociados Abogados',
    description:
      'Asesoría legal integral en propiedad intelectual, protección de datos, derecho comercial y protección al consumidor. Implementación de metodología Legal Design para documentos más claros y accesibles. Liderazgo en rediseño web, marketing de contenidos y gestión comercial.',
    icon: React.createElement(CgWorkAlt),
    date: 'Febrero 2022 - Actual',
  },
  {
    title: 'Asesora Legal Independiente',
    location: 'Freelance',
    description:
      'Asesoría a emprendedores en constitución de SAS, registro de marcas y elaboración de términos y condiciones. Estructuración legal y cumplimiento normativo para nuevos negocios.',
    icon: React.createElement(CgWorkAlt),
    date: 'Agosto 2021 - Febrero 2022',
  },
  {
    title: 'Judicante',
    location: 'Defensoría del Pueblo - Regional Bolívar',
    description:
      'Revisión y proyección de acciones constitucionales, redacción y contestación de demandas en derecho civil, administrativo y laboral. Creación y gestión de base de datos de procesos.',
    icon: React.createElement(LuGraduationCap),
    date: 'Marzo 2020 - Diciembre 2020',
  },
] as const;

export const projectsData = [
  {
    title: 'Buucly.com App: Rediseño de Política de Privacidad con enfoque en Legal Design',
    description: `En colaboración con Miguel Ruz (Diseñador UX, Bancolombia), desarrollamos un prototipo de política de privacidad para Buucly integrando Legal Design Thinking y UX. Combinamos análisis jurídico de normativa colombiana con principios de experiencia de usuario, logrando documentos legales más claros y accesibles mediante patrones visuales innovadores.`,

    tags: [],
    imageUrl: buuclyLegalDesign,
  },
  {
    title: 'Ventura Foods: Rediseño de Reglamento Interno de Trabajo con enfoque en Legal Design',
    description: `En colaboración con Milena Álvarez (Laboralizate), rediseñamos el Reglamento Interno de Trabajo de Ventura Foods aplicando Legal Design para convertirlo en un documento claro, visual y útil para los trabajadores. Incorporamos lenguaje claro, elementos gráficos e íconos, apoyo narrativo y una estructura práctica que fortalece la cultura organizacional y el cumplimiento.`,
    tags: [],
    imageUrl: venturaLegalDesign,
  },
] as const;

export const skillsData = [
  'Redacción y análisis de contratos comerciales',
  'Propiedad Intelectual y Protección de Datos',
  'Docencia en temas de innovación legal y transformación digital',
  'Diseño de documentos legales con enfoque en Legal Design Thinking',
  'Registro de Marcas',
  'Office (Word, PowerPoint avanzado, Excel intermedio)',
  'Edición de contenido en Adobe Suite (Premiere Pro, Illustrator, InDesign)',
  'Creación de contenido digital: podcast, videos y material gráfico',
  'Manejo de bases de datos y CRM (Hubspot)',
  'Organización de proyectos',
] as const;
