import { expect, test } from '@playwright/test';
import { InventoryPage } from '../src/pages/inventory-page';

test('add first item to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await expect(page.getByText('Your Cart'));
});
