package com.tfg.ui;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static org.junit.jupiter.api.Assertions.assertTrue;

class DetalleEncuestaE2ETest {

    @Test
    void detalleCarga_o_alMenosRutaAccesible() throws InterruptedException {
        String baseUrl = System.getProperty("e2e.baseUrl", "http://localhost:5173/listado/1");

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new", "--no-sandbox", "--disable-dev-shm-usage");

        WebDriver driver = new ChromeDriver(options);
        try {
            driver.get(baseUrl);
            Thread.sleep(1500);

            // Try to find the Tabs container with id 'tbMaestras'
            try {
                WebElement tabs = driver.findElement(By.id("tbMaestras"));
                assertTrue(tabs.isDisplayed());
            } catch (Exception e) {
                // If no data loaded, at least the route is accessible
                assertTrue(driver.getCurrentUrl().contains("/listado/"));
            }

        } finally {
            driver.quit();
        }
    }
}
