import {Locator, Page, expect } from "@playwright/test";
import {test} from "../fixtures/fixtures";


export class InventoryPage {
    readonly page: Page;
    readonly burgerButton: Locator;
    readonly cartButton: Locator;
    readonly addToCartButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.burgerButton = page.locator('#react-burger-menu-btn');
        this.cartButton = page.locator('#shopping_cart_container');
        this.addToCartButton = page.getByText('Add to cart');
    }
    async goto(){
        await this.page.goto('https://www.saucedemo.com/inventory.html')
    }

    async addFirstItemToCart(){
        await this.addToCartButton.first().click();
    }
    async addItemWithNameToCart(name: string){
        test.info().annotations.push({ type: 'name', description: name });

        await test.step(`Add item with name ${name} to cart`, async ()=> {
            await this.page.locator('.inventory_item').filter({hasText: name})
                .locator(this.addToCartButton)
                .click();
        })

        console.log(name)
    }

    async goToCart() {
        await this.cartButton.click();
    }
}