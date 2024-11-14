// Import Selenium WebDriver
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    // Inisialisasi WebDriver untuk Chrome
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Membuka halaman Google
        await driver.get('https://staging.seafoodbyaruna.com');

        // Mengklik hasil pencarian pertama
        // Tunggu hingga elemen hasil pencarian tersedia
        let firstResult = await driver.wait(until.elementLocated(By.xpath("//div[@class='MuiBox-root css-qeebl3']/a[@href='/']")), 10000);
        await firstResult.click();

        // Tunggu hingga halaman baru dimuat
        await driver.wait(until.titleContains(By.xpath($("//title[.='Inquiry - Seafood By Aruna']")), 10000));

    } finally {
        // Menutup browser setelah selesai
        await driver.quit();
    }
})();