import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
  align?: 'left' | 'center';
};

export default function SectionHeading({ children, align = 'center' }: SectionHeadingProps) {
  return (
    <h2
      className={`font-display mb-8 text-[2.1rem] leading-none tracking-tight sm:text-[2.6rem] ${
        align === 'left' ? 'text-left' : 'text-center'
      }`}
    >
      {children}
    </h2>
  );
}
