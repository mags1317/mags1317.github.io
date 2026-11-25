import { expect, test } from '@playwright/test';

test('résumé and project navigation work at the root and on direct visits', async ({ page }, info) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Miguel Ángel García Sepúlveda');
  await expect(page.getByRole('link', { name: '+52 33 1126 8191' })).toHaveAttribute('href', 'tel:+523311268191');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(await page.evaluate(() => innerWidth));
  await page.screenshot({ path: info.outputPath('resume.png'), fullPage: true });

  await page.getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL('/projects/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Projects');
  await page.getByRole('link', { name: 'MiMusik' }).click();
  await expect(page).toHaveURL('/projects/mimusik/');

  for (const path of ['/projects/', '/projects/mimusik/']) {
    expect((await page.goto(path))?.status()).toBe(200);
  }
  await expect(page.getByText('Retired product')).toBeVisible();
  await expect(page.locator('a[href*="whatsapp"], a[href*="wa.me"], audio')).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(await page.evaluate(() => innerWidth));
  await page.screenshot({ path: info.outputPath('mimusik.png'), fullPage: true });
});

test('theme persists across reload and navigation', async ({ page }) => {
  await page.goto('/');
  const theme = page.getByRole('button', { name: 'Dark theme' });
  await expect(theme).toHaveAttribute('aria-pressed', 'false');
  await theme.click();
  await expect(page.locator('html')).toHaveClass('dark');
  await page.reload();
  await expect(theme).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('link', { name: 'Projects' }).click();
  await expect(page.locator('html')).toHaveClass('dark');
  await theme.click();
  await page.reload();
  await expect(theme).toHaveAttribute('aria-pressed', 'false');
});

test('print action opens the browser print dialog and dark mode prints legibly', async ({ page }, info) => {
  await page.addInitScript(() => {
    window.print = () => document.documentElement.setAttribute('data-print-requested', 'true');
  });
  await page.goto('/');
  await page.getByRole('button', { name: 'Dark theme' }).click();
  await page.getByRole('button', { name: 'Print / PDF' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-print-requested', 'true');
  await page.emulateMedia({ media: 'print' });
  await expect(page.getByRole('navigation')).toBeHidden();
  await expect(page.getByRole('button', { name: 'Print / PDF' })).toBeHidden();
  await expect(page.getByRole('heading', { name: 'Professional Experience' })).toHaveCSS('color', 'rgb(0, 0, 0)');
  for (const section of await page.locator('main section').all()) {
    await expect(section).toBeVisible();
  }
  await expect(page.getByText('Tailoring Trainings with AI', { exact: false })).toBeVisible();
  if (info.project.name === 'desktop') {
    await page.pdf({ path: info.outputPath('resume-print.pdf'), format: 'Letter' });
  }
});

test('fictional preview generates no request or navigation', async ({ page }) => {
  await page.goto('/projects/mimusik/');
  await page.getByLabel('Fictional occasion').selectOption('an imaginary graduation');
  await page.getByLabel('Song language').selectOption('English');
  const requests: string[] = [];
  page.on('request', (request) => requests.push(request.url()));
  await page.getByRole('button', { name: 'Preview request' }).click();
  await expect(page.getByRole('status')).toHaveText('Song in English for an imaginary graduation.');
  await expect(page).toHaveURL('/projects/mimusik/');
  expect(requests).toEqual([]);
});

test('static résumé remains readable and demo stays disabled without JavaScript', async ({ browser, baseURL }) => {
  const page = await browser.newPage({ javaScriptEnabled: false, baseURL });
  try {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Certifications & Professional Development' })).toBeVisible();
    await page.goto('/projects/mimusik/');
    await expect(page.getByText('The preview requires JavaScript.')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Preview request' })).toBeDisabled();
  } finally {
    await page.close();
  }
});
