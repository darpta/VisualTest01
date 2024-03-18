import { Page } from '@playwright/test';
import { TopMenuComponent } from '../components/top-menu.components';


export class LifestyleOutdoor {
    constructor(private page: Page) {}
    topMenu = new TopMenuComponent(this.page);

    // Top Menu
    kurtkiInput = this.page.getByRole('link', { name: 'Kurtki', exact: true });

    // Kurtki
    kurtkaDamskaRavenPitCoat =  this.page.getByRole('link', { name: 'Kurtka Damska Raven Pit Coat' });
}
