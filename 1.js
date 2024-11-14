// Import Selenium WebDriver
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    // Inisialisasi WebDriver untuk Chrome
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Membuka halaman Google
        await driver.get('https://www.google.com');

        // Menemukan kotak pencarian berdasarkan name
        let searchBox = await driver.findElement(By.name('q'));

        // Menginputkan kata kunci pencarian dan menekan Enter
        await searchBox.sendKeys('Selenium JavaScript', Key.RETURN);

        // Tunggu hingga hasil pencarian dimuat
        await driver.wait(until.titleContains('Selenium JavaScript - Penelusuran Google'), 1000);

        // Mengklik hasil pencarian pertama
        // Tunggu hingga elemen hasil pencarian tersedia
        let firstResult = await driver.wait(until.elementLocated(By.className('LC20lb MBeuO DKV0Md')), 10000);
        await firstResult.click();

        // Tunggu hingga halaman baru dimuat
        await driver.wait(until.titleIs('Selenium WebDriver JavaScript API'), 1000);

    } finally {
        // Menutup browser setelah selesai
        await driver.quit();
    }
})();
