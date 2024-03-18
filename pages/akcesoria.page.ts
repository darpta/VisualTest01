import { Page } from '@playwright/test';
import { TopMenuComponent } from '../components/top-menu.components';


export class Akcesoria {
    constructor(private page: Page) {}
    topMenu = new TopMenuComponent(this.page)


    nawigacjaGpsInput = this.page.getByRole('link', { name: 'Nawigacja GPS' })
}