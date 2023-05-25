import {LoginPage} from "../pages/login-page";
import {CheckoutPage} from "../pages/checkout-page";
import {CartPage} from "../pages/cart-page";
import {InventoryPage} from "../pages/inventory-page";
import {Page} from "@playwright/test";

export class Steps{
    readonly loginPage: LoginPage;
    readonly inventoryPage: InventoryPage;
    readonly cartPage: CartPage;
    readonly checkoutPage: CheckoutPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.inventoryPage = new InventoryPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
    }
};