import { Locator, Page, expect } from '@playwright/test';


export class CartPage {
    readonly page: Page;

    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}