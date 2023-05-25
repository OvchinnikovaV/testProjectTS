import {Locator, Page, test} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async goto() {
        await test.step('Go to login page', async () => {
            await this.page.goto(process.env.BASE_URL);
        })
    }
    async fillCredentials(username: string, password: string) {
        await test.step(`Fill credentials: ${username}`, async () => {
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
        })
    }
    async submitCredentials() {
        await test.step(`Submit credentials`, async () => {
            await this.loginButton.click();
        })
    }
}