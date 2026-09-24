# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are law firms, in-house counsel, and organizations that need legal documents people can actually use. They arrive to evaluate Geraldine Rodríguez Sierra as an attorney who also practices Legal Design.

A second audience, given equal weight, is anyone looking for designed legal products (guides, onboarding pieces, workplace documents). There is no storefront: they should understand that designed pieces exist and how to start a conversation.

## Product Purpose

This site is Geraldine’s professional portfolio. It must make two claims at once: she is a practicing lawyer (corporate, IP, data protection, commercial) and she designs legal information so people can act on it. Success is a visitor who can name both offers, see real work, and contact her.

## Positioning

She is not a generic attorney landing page and not a generic designer portfolio. The mechanism is Legal Design: legal analysis plus visual structure, proven on named documents (Buucly privacy policy, Ventura Foods workplace regulation).

## Operating Context

A single-page Next.js site. Visitors scan Intro → About → Projects → Skills → Experience → Contact. They download a CV, open LinkedIn or WhatsApp, or send the contact form. Evaluation happens on a laptop or phone, often in a professional setting under office light.

## Capabilities and Constraints

- Confirmed sections, in this order: Inicio, About, Proyectos, Habilidades, Experiencia, Contacto.
- Working actions: in-page anchors, CV download, LinkedIn, WhatsApp, contact form (Resend).
- Stack in repo: Next 13.4.8, React 18, Tailwind 3, Framer Motion 10. Do not migrate Next/React unless a specific gesture is blocked.
- No product catalog, prices, or checkout. Do not invent metrics, clients, or case results.
- Portrait is the existing file `public/gera-medellin.jpg`.

## Brand Commitments

- Name: Geraldine Rodríguez Sierra.
- Voice: Spanish, professional, clear, not hype.
- Binding visual references from the owner: oval portrait hero (portfolio composition), editorial body grid (agency-like statement + what-we-do), color taken from her Legal Design pieces (green field, mint, violet, soft pink). Light field is the identity; dark mode is a restyle of the same system, not a second brand.
- Binding constraint: keep the current information architecture; adapt it, do not replace it.

## Evidence on Hand

- Copy in `components/about.tsx` and `lib/data.ts`.
- Experience: Nicolás Pareja & Asociados (Feb 2022–present), independent advisor (2021–2022), Defensoría del Pueblo (2020).
- Projects: Buucly privacy policy redesign; Ventura Foods Reglamento Interno de Trabajo. Images in `public/`.
- Portrait: `public/gera-medellin.jpg`.
- CV: `public/CV-GERALDINE-RODRIGUEZ-SIERRA.pdf`.
- Contact: geraldinerodriguezsierra@gmail.com; WhatsApp and LinkedIn URLs in intro.
- Absent: product SKUs, testimonials, invented year/client/project counts. Do not fabricate them.

## Product Principles

- Dual offer, one person: legal counsel and designed legal products share the first screen.
- Proof over decoration: only named work and real tenure appear as evidence.
- Structure is durable: sections stay; the visual world can change.
- Contact is the only conversion; products are an invitation, not a cart.
- Clarity is the craft: the same standard she applies to legal documents.

## Accessibility & Inclusion

Spanish UI. Keyboard-reachable navigation and form. Body text must keep readable contrast on green, mint, and violet fields.
