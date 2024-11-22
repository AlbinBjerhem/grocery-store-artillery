import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Frukt & Grönt' }).click();
  await page.getByRole('heading', { name: 'Apelsin Klass' }).dblclick();
  await page.getByRole('link', { name: 'Mejeri, ost & ägg' }).click();
  await page.getByRole('link', { name: 'Ost', exact: true }).click();
  await page.getByRole('link', { name: 'Dessertost' }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('price-desc');
  await page.getByRole('heading', { name: 'Gruyere Grottlag Op' }).click();
  await page.getByRole('link', { name: 'Mjölk', exact: true }).click();
  await page.getByRole('link', { name: 'Smaksatt mjölk & övrig mjölk' }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('compareprice-asc');
  await page.getByRole('heading', { name: 'Chokladmjölk 1,5%' }).click();
  await page.getByRole('link', { name: 'Juice, fruktdryck & smoothie' }).click();
  await page.getByRole('link', { name: 'Ej kyld fruktdryck' }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('compareprice-desc');
  await page.getByRole('heading', { name: 'Melon Päron Fruktdryck' }).click();
  await page.getByRole('link', { name: 'Skafferi' }).click();
  await page.getByRole('link', { name: 'Pasta, ris & matgryn' }).click();
  await page.getByRole('link', { name: 'Pasta', exact: true }).click();
  await page.getByRole('link', { name: 'Tagliatelle' }).click();
  await page.getByRole('heading', { name: 'Pappardelle Ägg Pasta' }).click();
});