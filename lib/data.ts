import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import buuclyPrivacidad from '@/public/projects/buucly/01-privacidad.jpeg';
import buuclyExperiencia from '@/public/projects/buucly/02-experiencia.jpeg';
import laboralizateManual from '@/public/projects/laboralizate/01-manual.jpeg';
import laboralizateCodigo from '@/public/projects/laboralizate/02-codigo.jpeg';
import laboralizateVinculacion from '@/public/projects/laboralizate/03-vinculacion.jpeg';
import laboralizateConvivencia from '@/public/projects/laboralizate/04-convivencia.jpeg';
import laboralizatePermisos from '@/public/projects/laboralizate/05-permisos.jpeg';
import venturaRuta from '@/public/projects/ventura-food/01-ruta.jpeg';
import venturaAcoso from '@/public/projects/ventura-food/02-acoso.jpeg';

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
    name: 'Podcast',
    hash: '#podcast',
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
    title: 'Asesora Legal | Derecho Corporativo, Contractual y Protección de Datos',
    location: 'Fundación Santo Domingo',
    description:
      'Elaboración y revisión de contratos civiles y comerciales. Asesoría en temas de propiedad intelectual y protección de datos personales.',
    icon: React.createElement(CgWorkAlt),
    date: '2024 – 2026',
  },
  {
    title: 'Consultora de Innovación Legal | Legal Design & Marketing Jurídico',
    location: 'Nicolás Pareja & Asociados',
    description:
      'Acompañamiento a la firma en proyectos que integran conocimiento jurídico, innovación, diseño y estrategia. Asesoría en propiedad intelectual, protección de datos, derecho comercial y protección al consumidor, con Legal Design para documentos más claros y accesibles.',
    icon: React.createElement(CgWorkAlt),
    date: 'Febrero 2022 – 2026',
  },
  {
    title: 'Abogada | Asesora en Propiedad Intelectual y Estrategia Marcaria',
    location: 'Hyatt Regency Cartagena',
    description:
      'Asesoría jurídica especializada al Hotel Hyatt Regency en asuntos de propiedad intelectual y protección marcaria, con enfoque preventivo y estratégico.',
    icon: React.createElement(CgWorkAlt),
    date: '2025 – 2025',
  },
  {
    title: 'Judicante',
    location: 'Defensoría del Pueblo Colombia',
    description:
      'Revisión y proyección de acciones constitucionales, redacción y contestación de demandas en derecho civil, administrativo y laboral. Creación y gestión de base de datos de procesos.',
    icon: React.createElement(LuGraduationCap),
    date: 'Marzo 2020 – Diciembre 2020',
  },
] as const;

export const projectsData = [
  {
    title: 'Buucly: de documento legal a experiencia de privacidad',
    description:
      '¿Cómo hacer que una política de privacidad deje de ser un documento que el usuario solo acepta y se convierta en información que realmente pueda comprender? En colaboración con Miguel Ruz, diseñador UX en Bancolombia, desarrollamos para Buucly.com un prototipo que combina el análisis jurídico de la normativa colombiana de protección de datos con principios de UX y Legal Design. Repensamos cómo se estructura, presenta y comunica la información legal, con recursos visuales y nuevas formas de navegación, para convertir un documento tradicional en una experiencia más clara, accesible y centrada en el usuario.',
    tags: [],
    images: [buuclyPrivacidad, buuclyExperiencia],
  },
  {
    title: 'Laboralízate: contenidos laborales que se entienden',
    description:
      'En Laboralízate trabajé en el rediseño de la experiencia y la comunicación de contenidos laborales, transformando documentos y políticas en materiales más visuales, comprensibles y centrados en las personas. El proyecto abarcó políticas de convivencia y otros documentos internos, además de la conceptualización de contenidos, conectando derecho, diseño y experiencia de usuario para hacer más accesible la información laboral.',
    tags: [],
    images: [
      laboralizateManual,
      laboralizateCodigo,
      laboralizateVinculacion,
      laboralizateConvivencia,
      laboralizatePermisos,
    ],
  },
  {
    title: 'Ventura Foods: un reglamento interno para consultar',
    description:
      '¿Cómo convertir un reglamento interno de trabajo en una herramienta que las personas realmente puedan entender y consultar? Rediseñé el Reglamento Interno de Trabajo de Ventura Foods aplicando principios de Legal Design, replanteando su estructura, lenguaje y comunicación visual. El proyecto incorporó lenguaje claro, recursos gráficos, íconos y elementos narrativos para hacer más accesible la información laboral y facilitar su comprensión en el día a día.',
    tags: [],
    images: [venturaRuta, venturaAcoso],
  },
] as const;

export const podcastsData = [
  {
    show: 'Legalroom',
    title: 'Episodio 01 – Entre tanta innovación en el derecho: ¿Qué hay y qué hago?',
    date: '8 nov 2025',
    duration: '27 min',
    description:
      'En este primer episodio hablo sobre por qué el derecho se encuentra en este momento de transformación y por qué se habla tanto de innovación. Conversamos sobre diseño legal, operaciones legales y legaltech, tanto desde una mirada general como desde su aplicación práctica. El episodio busca ser una pausa para quienes, entre tanta innovación, sienten que no saben por dónde empezar.',
    embedUrl:
      'https://open.spotify.com/embed/episode/5VZEucwEg3P0DOxgw4Tkyl?utm_source=generator&theme=1',
    spotifyUrl:
      'https://open.spotify.com/episode/5VZEucwEg3P0DOxgw4Tkyl?si=irbnHXxcRVaJLJ-Uwp0ajg',
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
