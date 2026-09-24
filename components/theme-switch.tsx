'use client';

import { useTheme } from '@/context/theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] bg-paper text-ink shadow-plate transition-transform hover:scale-110 active:scale-95"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activar tema oscuro' : 'Activar tema claro'}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
