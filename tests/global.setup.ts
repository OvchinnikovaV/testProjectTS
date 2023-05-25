import {expect, test} from "../src/fixtures/fixtures";
import {LoginPage} from "../src/pages/login-page";

test('should login with valid data', async ({page, steps}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.fillCredentials(process.env.USER_NAME, process.env.PASSWORD);
    await loginPage.submitCredentials();
    await expect(steps.inventoryPage.addToCartButton.first()).toBeVisible();
    await page.context().storageState({ path: process.env.AUTH_PATH });
})
