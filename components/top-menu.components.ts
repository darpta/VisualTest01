import { Page } from '@playwright/test';


export class TopMenuComponent {
    constructor(private page: Page) {}
    plastikiOkleinyButton = this.page.getByRole('link', { name: 'Plastiki i Okleiny' });
    akcesoriaButton = this.page.getByRole('link', { name: 'Akcesoria', exact: true });
    lifestyleOutdoorButton = this.page.getByRole('link', { name: 'Lifestyle i Outdoor', exact: true });
}