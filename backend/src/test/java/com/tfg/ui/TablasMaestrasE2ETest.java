package com.tfg.ui;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

class TablasMaestrasE2ETest {

    @Test
    void tablasMaestras_loadsAndShowsProvincias() throws InterruptedException {
        String baseUrl = System.getProperty("e2e.baseUrl", "http://localhost:5173/tablasMaestras");

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new", "--no-sandbox", "--disable-dev-shm-usage");

        WebDriver driver = new ChromeDriver(options);
        try {
            driver.get(baseUrl);

            // wait for content
            Thread.sleep(2000);

            // Verify the page title element exists
            WebElement titulo = driver.findElement(By.cssSelector(".tituloMenu"));
            assertNotNull(titulo);
            assertTrue(titulo.getText().toLowerCase().contains("tablas maestras") || titulo.getText().toLowerCase().contains("tablas maestras"));

            // Find and click the 'Provincias' tab button
            WebElement provinciasTab = driver.findElement(By.xpath("//button[contains(., 'Provincias')]"));
            provinciasTab.click();

            Thread.sleep(1000);

            // Check that the DataGrid header 'Código' is present
            WebElement codigoHeader = driver.findElement(By.xpath("//div[text()='Código' or .='Código']"));
            assertNotNull(codigoHeader);

        } finally {
            driver.quit();
        }
    }
}
