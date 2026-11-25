# Portfolio agent instructions

- Keep the résumé at `/` and preserve its professional facts unless the owner supplies corrections. Review the flagged employment and training entries before changing them.
- Keep Astro output static and paths rooted at `/` for the GitHub Pages user site. Prefer Astro for content, Tailwind for styling, and client scripts or React islands only for interactions.
- Use `src/data/resume.ts` for résumé content and `src/content/` for case study prose. Add reusable components when a layout or behavior repeats.
- Keep the MiMusik case study factual and identify it as retired. Keep its demo fictional and local. Obtain explicit owner approval before adding private source, customer information, testimonials, audio, or other private assets.
- Use the Node version in `.nvmrc` and commit the npm lockfile with dependency changes. Run `npm ci`, `npm run check`, `npm run build`, and `npm test` before requesting review.
- Keep deployment restricted to deliberate dispatches on `master`. The repository owner controls the Pages source switch and production release.
