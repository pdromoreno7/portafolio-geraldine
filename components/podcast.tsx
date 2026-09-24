'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { podcastsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

export default function Podcast() {
  const { ref } = useSectionInView('Podcast', 0.35);
  const episode = podcastsData[0];

  return (
    <section
      ref={ref}
      id="podcast"
      className="mb-24 w-full max-w-[90rem] scroll-mt-28 px-5 sm:mb-32 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading align="left">Podcast</SectionHeading>
        <p className="mb-8 max-w-[42ch] text-muted sm:text-right">
          Legalroom. Conversaciones sobre innovación, Legal Design y el oficio jurídico.
        </p>
      </div>

      <motion.article
        className="grid overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-paper lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-field">
              {episode.show} · {episode.date} · {episode.duration}
            </p>
            <h3 className="mt-3 font-display text-[1.7rem] leading-[1.15] tracking-tight sm:text-[2.05rem]">
              {episode.title}
            </h3>
            <p className="mt-5 max-w-[58ch] leading-7 text-muted">{episode.description}</p>
          </div>
          <a
            href={episode.spotifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-transform hover:translate-x-0.5"
          >
            Escuchar en Spotify
            <BsArrowUpRight className="text-xs" />
          </a>
        </div>

        <div className="relative bg-mint/40 p-5 sm:p-8">
          <iframe
            title={episode.title}
            src={episode.embedUrl}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="h-[352px] w-full rounded-xl"
          />
        </div>
      </motion.article>
    </section>
  );
}
