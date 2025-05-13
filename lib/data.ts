import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import dePratiImg from '@/public/deprati.png';
import dugodoImg from '@/public/dugodo.png';
import buuclyImg from '@/public/buucly.png';

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
    title: 'Frontend Software Engineer',
    location: 'Leasey AI - Canada - Remoto',
    description: 'HTLM, CSS, JavaScript, Typescript, React js, Next js, Node.js, AWS',
    icon: React.createElement(CgWorkAlt),
    date: 'Enero 2025 - present',
  },
  {
    title: 'Full-Stack Instructor in web development',
    location: 'Soy Henry - Full Remoto',
    description:
      'Instructor/profesor de desarrollo web frontend y backend modalidad part time. He enseñado a más de 100 estudiantes, abarcando temas como Programación orientada a objetos, testing, HTLM, CSS, JavaScript, Typescript, React js, Next js, Node.js, Express.js, Nest js, MongoDB y PostgresSQL',
    icon: React.createElement(CgWorkAlt),
    date: 'Julio 2024 - present',
  },
  {
    title: 'Frontend Developer | React Developer',
    location: 'Mutual SER',
    description: `Desarrollé mejoras, una aplicación web con React para poder hacer cargas masivas  de archivos, documentos y carpetas. Mejorando la visualización de carga y rendimiento de la aplicación en el navegador en un 40%`,
    icon: React.createElement(FaReact),
    date: '2022 - 2024',
  },
  {
    title: 'Ingeniero en desarrollo Drupal/Desarrollador React Native',
    location: 'Software One/Intergrupo - Full Remoto',
    description:
      'Logré puntuación alta en rendimiento para un proyecto de desarrollo de software frontend de un cliente reconocido a nivel nacional, reconocimiento en la adaptación técnica del perfil, calidad y compromiso.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Desarrollador Frontend / DIseñador UI ',
    location: 'Adomi Delivery - Full Remoto',
    description:
      'Aumenté las ganancias por delivery en la empresa, logrando diseñar, maquetar y desarrollar una plataforma de recaudo con react js, integrando mercado pago para cobro de comisiones por domicilio. Logré desarrollar una app de gestión de pedidos en web, basado en el flujo de la app móvil. Esto permitió a la empresa gestionar los pedidos en un solo lugar. Tecnologias: React, Next Js, MongoDB, Express js, cloudfare',
    icon: React.createElement(FaReact),
    date: '2021 - 2022',
  },
] as const;

export const projectsData = [
  {
    title: 'De Prati',
    description:
      "Trabajé 8 meses una aplicación móvil tipo 'Marketplace' con React Native. La aplicación incluyó características clave como gestión de microcréditos, pagos con tarjeta de crédito, catálogo de productos de varias marcas y gestión de envío a domicilio. ",
    tags: ['React Native', 'Redux Toolkit', 'RTK Query', 'React Native Material', 'Figma'],
    imageUrl: dePratiImg,
  },
  {
    title: 'Dugodo App',
    description:
      'Trabajé un año como freelance una app móvil desarrollada con React Native, tipo red social para viajeros llamada Dugodo',
    tags: ['React Native CLI', 'Redux Toolkit', 'TypeScript', 'Apolo Client', 'GraphQL', 'Express js'],
    imageUrl: dugodoImg,
  },
  {
    title: 'Buucly.com App',
    description:
      'Desarrollé una plataforma que permite crear libros personalizados al instante utilizando inteligencia artificial. Usando  el modelo GPT-4o de OpenAI, los usuarios pueden generar libros sobre cualquier tema en minutos. La plataforma incluye una biblioteca virtual, vista previa de contenido antes de la generación final, y opción de lectura dentro de la app',
    tags: ['React Js', 'Next.js', 'Tailwind', 'TypeScript', 'Shadcn UI', 'Prisma', 'Supabase', 'OpenAI'],
    imageUrl: buuclyImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Git',
  'Tailwind',
  'TypeORM',
  'Prisma',
  'SQL',
  'MongoDB',
  'Firebase',
  'Supabase',
  'Redux Toolkit',
  'React Query',
  'Redux',
  'GraphQL',
  'Apollo',
  'Nest.js',
  'Express',
  'PostgreSQL',
  'Python',
] as const;
