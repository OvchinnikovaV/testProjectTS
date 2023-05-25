import { test, expect } from '@playwright/test';
import {LoginPage} from "../src/pages/login-page";
import {CheckoutPage} from "../src/pages/checkout-page";
import {InventoryPage} from "../src/pages/inventory-page";

test('add first item to cart', async ({page}) => {

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await expect(page.getByText('Your Cart'));
})


