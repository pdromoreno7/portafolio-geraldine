# Design

<!-- impeccable:design-schema 1 -->

Cool paper field with field green, mint wash, violet, and blush taken from Geraldine’s Legal Design pieces. Studio hero: serif display, oval portrait, circular outline CTA. Editorial body: hairline rules, stacked type, document-like panels. Light is the identity; dark restyles the same tokens.

## Platform

web

## Color

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| paper | `#eef1ec` | `#0e1a16` | Page field |
| ink | `#141414` | `#e8f3ec` | Primary text |
| muted | `#3d4a44` | `#b7c9bf` | Secondary text |
| field | `#0c8a66` | `#1db888` | Brand fill, contact slab, accents |
| ember | `#ff6a2b` | `#ff8a4d` | Primary buttons and CTAs |
| mint | `#c9f4df` | `#16382c` | Portrait wash, project plates |
| violet | `#5c3d99` | `#b9a3e6` | Available accent |
| blush | `#f3c4ce` | `#e7a8b6` | Available accent |
| line | `rgba(20,20,20,0.14)` | `rgba(232,243,236,0.16)` | Hairlines |

Selection uses mint on ink. Focus ring is field green.

## Type

- Display: Merriweather (Next 13 `next/font` fallback; Gloock/Bodoni Moda fail font-override in this version).
- Body: Outfit.
- Display sizes ~2.1–5rem, tracking to -0.03em. Body ~1.05rem / 1.75–2rem.

## Components

- Sticky paper header, italic wordmark, tracked nav, ink pill CTA with field dot.
- Oval portrait in a paper ring over a mint radial; breathing field halo.
- Circular outline “Conversemos” that fills field on hover.
- Dashed pill tags.
- Offer columns split by hairlines.
- Project plates: rounded 1.75rem, split type/image, hover scale on photo.
- Skills as a two-column rule list.
- Experience as a dated vertical list with field dots.
- Contact as a field-green document containing a paper form.

## Motion

Framer Motion 10. Hero fade/rise. Portrait halo pulse. CTA fill and arrow shift. Scroll reveal on sections. Project plate lift. Skill row nudge on hover.

## Provenance

Portrait: `public/gera-medellin.jpg`. Project rasters: `public/buubly-legal-de.webp`, `public/ventura-legal-portatil.webp`. No generated plates.
