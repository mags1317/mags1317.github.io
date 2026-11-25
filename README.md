# Engineering portfolio

The résumé is the homepage. The project index and retired MiMusik case study are at `/projects/` and `/projects/mimusik/`.

## Development

Use Node 24 as specified in `.nvmrc` and npm.

```sh
npm ci
npm run dev
```

Edit résumé content in `src/data/resume.ts` and case study prose in `src/content/mimusik.md`. The theme preference is stored in the current browser. Use **Print / PDF** and the browser's **Save as PDF** option to export the résumé.

### Owner review

- Confirm whether the Tekzenit Mexico role still uses “Dec 2017 – Present.”
- Verify the SoloLearn and Microsoft Learn entries, including which should be listed as certifications or training.
- The MiMusik media section is a placeholder pending explicit approval. The local demo uses preset fictional choices.

## Verification

```sh
npm ci
npm run check
npm run build
npx playwright install chromium
npm test
```

On Linux CI, install the needed browser system libraries with `npx playwright install --with-deps chromium`. Playwright serves the built `dist/`, checks desktop and mobile, and captures screenshots and a desktop print PDF in `test-results/`. CI uploads those files and the HTML report as `portfolio-browser-results`.

## GitHub Pages release

After approval, the owner can coordinate the merge and the Pages cutover. This migration removes the old root `index.html`, so switch the Pages source before merging to avoid a branch-source build of the migrated tree.

1. In **Settings → Pages → Build and deployment**, change **Source** from **Deploy from a branch** to **GitHub Actions**.
2. Merge the reviewed migration into `master`. Verify **Portfolio checks** on that revision.
3. From the **Publish portfolio to GitHub Pages** workflow, select `master` and use **Run workflow**. The build and deploy jobs both check the ref, and only the deploy job receives publishing permissions.
4. Check `https://mags1317.github.io/` and both project URLs directly after the deployment completes.

### Rollback

To undo an Astro release after a known-good Astro deployment, revert the release changes on `master` through review and manually dispatch the Pages workflow from the reverted branch tip. To restore the pre-Astro site, revert the migration so `master` contains the original root `index.html`, then switch **Source** back to **Deploy from a branch → master → / (root)** and verify the legacy résumé at `/`.

See [ADR 0001](docs/adr/0001-static-astro-portfolio.md) for the architectural decisions.
