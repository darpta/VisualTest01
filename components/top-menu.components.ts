import { Page } from '@playwright/test';


export class TopMenuComponent {
    constructor(private page: Page) {}
    plastikiOkleinyButton = this.page.getByRole('link', { name: 'Plastiki i Okleiny' });
}