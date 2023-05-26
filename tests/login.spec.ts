import {test, expect} from '@playwright/test';
import {LoginPage} from "../src/pages/login-page";

test('should login with valid data', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.fillCredentials(process.env.USER_NAME, process.env.PASSWORD)
    await loginPage.submitCredentials()
    await expect(page.getByText('Swag Labs'), 'Inventory page is loaded').toBeVisible()
})

test('try to login with invalid username', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.fillCredentials('standarduser', process.env.PASSWORD);
    await loginPage.submitCredentials();
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'), 'Error message is displayed').toBeVisible();
})

test('try to login with invalid password', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.fillCredentials(process.env.USER_NAME, 'secretsauce');
    await loginPage.submitCredentials();
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'), 'Error message is displayed').toBeVisible();
})

test('try to login with empty username field', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.fillCredentials('', process.env.PASSWORD);
    await loginPage.submitCredentials();
    await expect(page.getByText('Epic sadface: Username is required'), 'Username is required message is displayed').toBeVisible();
})
test('try to login with empty password field', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.fillCredentials(process.env.USER_NAME, '');
    await loginPage.submitCredentials();
    await expect(page.getByText('Epic sadface: Password is required'), 'Password is required message is displayed').toBeVisible();
})