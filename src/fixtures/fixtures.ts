import {Steps} from "../steps/steps";
import { test as base } from '@playwright/test';

type MyFixtures = {
    steps: Steps;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({

    steps: async ({ page }, use) => {
        await use(new Steps(page));
    },
});
export { expect } from '@playwright/test';