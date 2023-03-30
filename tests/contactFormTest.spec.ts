import test, { expect } from "@playwright/test";
import { chromium } from "playwright";

test('Fill out form and verify success message', async () => {
    const browser = await chromium.launch({devtools: true})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://automationexercise.com/contact_us')

    // Start debugger
    await page.pause();

    /*
    // Code generated by recording using Playwright inspector
    page.on('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.accept().catch(() => { });
    });

    const title = await page.title();
    await expect.soft(title).toEqual('Automation Exercise - Contact Us');
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('test');
    await page.getByPlaceholder('Email', { exact: true }).click();
    await page.getByPlaceholder('Email', { exact: true }).fill('test@test.com');
    await page.getByPlaceholder('Subject').click();
    await page.getByPlaceholder('Subject').fill('Test');
    await page.getByPlaceholder('Your Message Here').click();
    await page.getByPlaceholder('Your Message Here').fill('test');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.pause();
    const successMessage = await page.locator('div[class="status alert alert-success"]').innerText();
    await console.log(successMessage);
    await expect.soft(successMessage).toContain("uccess! Your details have been submitted successfully.");
    //await page.screenshot({path: "Contact us.png"})
    await browser.close()
    */
});

