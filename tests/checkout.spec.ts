import {expect, test} from "../src/fixtures/fixtures";

test.describe('Checkout scope', async () => {
    test.use({storageState: process.env.AUTH_PATH});

    test.beforeEach(async ({steps}) =>{
        await steps.inventoryPage.goto();
    })

    test.only('should buy an item successfully', async ({page, steps}) => {

        await steps.inventoryPage.addFirstItemToCart();
        await steps.inventoryPage.addItemWithNameToCart('Sauce Labs Bolt T-Shirt');
        await steps.inventoryPage.goToCart();
        await steps.cartPage.checkout();
        await steps.checkoutPage.fillCheckoutCustomerData('Frgbhn', 'Sertyuj', '8425646');
        await steps.checkoutPage.continueCheckout();
        await steps.checkoutPage.finishCheckout();
        await expect(page.getByText('Thank you for your order!')).toBeVisible();
    })
})




