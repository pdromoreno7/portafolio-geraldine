'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({ title, description, imageUrl, index }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.2 1'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.55, 1]);
  const reverse = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      style={{ y, opacity }}
      className="group grid overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-paper md:grid-cols-2"
    >
      <div className={`flex flex-col justify-between gap-8 p-6 sm:p-10 ${reverse ? 'md:order-2' : ''}`}>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-field">Legal Design</p>
          <h3 className="mt-3 font-display text-[1.7rem] leading-[1.15] tracking-tight sm:text-[2.05rem]">{title}</h3>
          <p className="mt-5 max-w-[58ch] leading-7 text-muted">{description}</p>
        </div>
        <div className="h-px w-16 bg-field transition-all duration-300 group-hover:w-28" />
      </div>

      <div className="relative min-h-[16rem] overflow-hidden bg-mint">
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    </motion.article>
  );
}
