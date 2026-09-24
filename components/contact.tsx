'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contacto');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-[90rem] scroll-mt-28 px-5 sm:mb-28 sm:px-8 lg:px-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-[2rem] bg-field px-6 py-10 text-paper sm:px-10 sm:py-14 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <SectionHeading align="left">Contáctame</SectionHeading>
            <p className="max-w-[42ch] text-[1.05rem] leading-7 text-paper/85">
              Escribe a{' '}
              <a className="underline decoration-paper/50 underline-offset-4" href="mailto:geraldinerodriguezsierra@gmail.com">
                geraldinerodriguezsierra@gmail.com
              </a>{' '}
              o usa el formulario. Si buscas una pieza de Legal Design o un documento para tu equipo, cuéntame el
              contexto.
            </p>
          </div>

          <form
            className="flex flex-col rounded-2xl bg-paper p-5 text-ink sm:p-7"
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success('Email enviado con éxito');
            }}
          >
            <label className="text-[0.7rem] uppercase tracking-[0.16em] text-muted" htmlFor="senderEmail">
              Tu email
            </label>
            <input
              id="senderEmail"
              className="mt-2 h-14 rounded-xl border border-[var(--line)] bg-transparent px-4 text-ink transition-shadow placeholder:text-muted/70 focus:shadow-[0_0_0_3px_var(--mint)]"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="nombre@empresa.com"
            />
            <label className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] text-muted" htmlFor="message">
              Tu mensaje
            </label>
            <textarea
              id="message"
              className="mt-2 h-44 rounded-xl border border-[var(--line)] bg-transparent p-4 text-ink transition-shadow placeholder:text-muted/70 focus:shadow-[0_0_0_3px_var(--mint)]"
              name="message"
              placeholder="Cuéntame el documento o el proceso"
              required
              maxLength={5000}
            />
            <div className="mt-5">
              <SubmitBtn />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
