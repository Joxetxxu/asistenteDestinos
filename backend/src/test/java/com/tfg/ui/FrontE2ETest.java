package com.tfg.ui;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static org.junit.jupiter.api.Assertions.assertTrue;

class FrontE2ETest {

    @Test
    void homePageLoads() {
        String baseUrl = System.getProperty("e2e.baseUrl", "http://localhost:5173");

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        // Use headless for CI. Newer chrome versions support "--headless=new"; fallback OK.
        options.addArguments("--headless=new", "--no-sandbox", "--disable-dev-shm-usage");

        WebDriver driver = new ChromeDriver(options);
        try {
            driver.get(baseUrl);
            String src = driver.getPageSource();
            assertTrue(src.contains("Mapa de destinos") || src.toLowerCase().contains("mapa de destinos"));
        } finally {
            driver.quit();
        }
    }
}
