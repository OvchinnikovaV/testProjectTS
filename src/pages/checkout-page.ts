import { Locator, Page, test } from '@playwright/test';
import { CheckoutData } from '../types/checkoutData';
import { PostalCode } from '../types/postalCode';

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

    async fillCheckoutCustomerData(options: CheckoutData) {
        await test.step('Fill checkout customer data', async () => {
            await this.firstnameInput.fill(options.firstname);
            await this.lastnameInput.fill(options.lastname);
            await this.postalCodeInput.fill(options.postalCode);
        });
    }

    async continueCheckout() {
        await test.step('Continue checkout', async () => {
            await this.continueButton.click();
        });
    }

    async finishCheckout() {
        await test.step('Finish checkout', async () => {
            await this.finishButton.click();
        });
    }
}