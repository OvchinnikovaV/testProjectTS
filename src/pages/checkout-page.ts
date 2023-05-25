import {Locator, Page, test} from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly firstnameInput: Locator;
    readonly lastnameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly successMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.firstnameInput = page.locator('#first-name');
        this.lastnameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.successMessage = page.getByText('Thank you for your order!');
    }
    async fillCheckoutCustomerData(firstname: string, lastname: string, postalCode: string) {
        await test.step(`Fill checkout customer data`, async () => {
            await this.firstnameInput.fill(firstname);
            await this.lastnameInput.fill(lastname);
            await this.postalCodeInput.fill(postalCode);
        })
    }
    async continueCheckout() {
        await test.step(`Continue checkout`, async () => {
            await this.continueButton.click();
        })
    }
    async finishCheckout() {
        await test.step(`Finish checkout`, async () => {
            await this.finishButton.click();
        })
    }
}