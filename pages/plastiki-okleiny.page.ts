import { Page } from '@playwright/test';
import { TopMenuComponent } from '../components/top-menu.components';


export class PlastikiOkleiny {
    constructor(private page: Page) {}
    topMenu = new TopMenuComponent(this.page)


    kompletyPlastikowIinput = this.page.getByRole('link', { name: 'Komplety Plastików' })
}