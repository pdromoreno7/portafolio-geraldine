import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { BsArrowUpRight } from 'react-icons/bs';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-paper transition-transform hover:scale-[1.04] hover:bg-ink/90 active:scale-95 disabled:scale-100 disabled:opacity-60"
      disabled={pending}
    >
      {pending ? (
        'Enviando…'
      ) : (
        <>
          Enviar
          <BsArrowUpRight className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}
