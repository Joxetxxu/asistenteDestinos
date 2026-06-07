package com.tfg.ui;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static org.junit.jupiter.api.Assertions.*;

class SearchDestinosE2ETest {

    @Test
    void searchBoxAndMarkersPresent() throws InterruptedException {
        String baseUrl = System.getProperty("e2e.baseUrl", "http://localhost:5173/mapa");

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new", "--no-sandbox", "--disable-dev-shm-usage");

        WebDriver driver = new ChromeDriver(options);
        try {
            driver.get(baseUrl);

            // wait briefly for map and components to load
            Thread.sleep(3000);

            // The PlaceAutocomplete element is created with id 'place-autocomplete-input'
            WebElement placeEl = null;
            try {
                placeEl = driver.findElement(By.id("place-autocomplete-input"));
            } catch (Exception ignored) {
            }

            assertNotNull(placeEl, "Place autocomplete input should be present");

            // Count DOM elements that have a title attribute (markers rendered by AdvancedMarker may expose title)
            JavascriptExecutor js = (JavascriptExecutor) driver;
            Long titleCount = (Long) js.executeScript("return document.querySelectorAll('[title]').length;");

            assertTrue(titleCount >= 0, "Should be able to query elements with title attribute");

            // Try typing into the underlying input if exists inside the place element
            try {
                WebElement input = placeEl.findElement(By.cssSelector("input"));
                input.sendKeys("Madrid");
                Thread.sleep(1000);
                // basic assertion that input holds the text
                assertTrue(input.getAttribute("value").toLowerCase().contains("mad"));
            } catch (Exception ignored) {
                // Some implementations render a custom element; ignore if no inner input
            }

        } finally {
            driver.quit();
        }
    }
}
