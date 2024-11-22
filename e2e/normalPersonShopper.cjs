module.exports = { helloFlow };

async function helloFlow(page) {
  try {
    // Set a long timeout globally for all actions
    const globalTimeout = 120000; // 120 seconds
    page.setDefaultTimeout(globalTimeout);

    console.log('Navigating to homepage...');
    await page.goto('http://127.0.0.1:4000/');

    console.log('Navigating to Frukt & Grönt category...');
    await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
    await page.getByRole('link', { name: 'Frukt & Grönt' }).click();

    console.log('Selecting Apelsin Klass...');
    await page.getByRole('heading', { name: 'Apelsin Klass' }).dblclick();

    console.log('Navigating to Mejeri, ost & ägg...');
    await page.getByRole('link', { name: 'Mejeri, ost & ägg' }).click();
    await page.getByRole('link', { name: 'Ost', exact: true }).click();

    console.log('Selecting Dessertost...');
    await page.getByRole('link', { name: 'Dessertost' }).click();
    await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('price-desc');

    console.log('Selecting Gruyere Grottlag Op...');
    await page.getByRole('heading', { name: 'Gruyere Grottlag Op' }).click();

    console.log('Navigating to Mjölk category...');
    await page.getByRole('link', { name: 'Mjölk', exact: true }).click();
    await page.getByRole('link', { name: 'Smaksatt mjölk & övrig mjölk' }).click();
    await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('compareprice-asc');

    console.log('Selecting Chokladmjölk 1,5%...');
    await page.getByRole('heading', { name: 'Chokladmjölk 1,5%' }).click();

    console.log('Navigating to Juice category...');
    await page.getByRole('link', { name: 'Juice, fruktdryck & smoothie' }).click();
    await page.getByRole('link', { name: 'Ej kyld fruktdryck' }).click();
    await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('compareprice-desc');

    console.log('Selecting Melon Päron Fruktdryck...');
    await page.getByRole('heading', { name: 'Melon Päron Fruktdryck' }).click();

    console.log('Navigating to Skafferi...');
    await page.getByRole('link', { name: 'Skafferi' }).click();
    await page.getByRole('link', { name: 'Pasta, ris & matgryn' }).click();

    console.log('Selecting Pasta...');
    await page.getByRole('link', { name: 'Pasta', exact: true }).click();
    await page.getByRole('link', { name: 'Tagliatelle' }).click();

    console.log('Selecting Pappardelle Ägg Pasta...');
    await page.getByRole('heading', { name: 'Pappardelle Ägg Pasta' }).click();

    console.log('Flow completed successfully!');
  } catch (error) {
    console.error('Error in helloFlow:', error);
    await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
    throw error;
  }
}
