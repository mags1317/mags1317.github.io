# ADR 0001 · Static Astro portfolio

**Status** Proposed in issue #1.

The existing GitHub Pages user site is a single HTML résumé with CDN styling and browser scripts. It needs reusable, typed résumé content and room for project case studies while preserving the root URL, browser printing, and theme controls.

Build Astro static HTML at `/`, `/projects/`, and `/projects/mimusik/`. Render typed résumé data through Astro components and author case study prose in Markdown. Compile Tailwind locally through PostCSS. Keep the theme and print actions as small browser scripts and hydrate React only for the fictional request preview. The preview has no endpoint or external integration.

GitHub Pages serves the static `dist/` artifact at the domain root. CI verifies the static build with type and browser checks. Production publishing is a separate manual workflow restricted to `master`, with publishing permissions isolated to the deploy job.

The résumé and project narrative remain readable without JavaScript. Changing content requires a rebuild, and the demo requires hydration to enable its controls. The owner controls when to change the existing Pages source and release the migrated site.
