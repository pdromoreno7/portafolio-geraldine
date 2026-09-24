'use client';

import { useEffect } from 'react';

export default function BootScreen() {
  useEffect(() => {
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      document.documentElement.classList.add('is-booted');
      window.dispatchEvent(new Event('gera:ready'));
    };

    const minHold = new Promise((resolve) => window.setTimeout(resolve, 720));
    const fonts = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minHold, fonts]).then(reveal);
    const fallback = window.setTimeout(reveal, 2200);

    return () => window.clearTimeout(fallback);
  }, []);

  return (
    <div id="boot-screen" aria-busy="true" aria-live="polite">
      <div className="boot-mark">
        <span className="boot-diamond" aria-hidden />
        <p className="font-display italic text-[1.35rem]">Geraldine Rodríguez.</p>
      </div>
      <p className="boot-label">Preparando el estudio</p>
    </div>
  );
}
