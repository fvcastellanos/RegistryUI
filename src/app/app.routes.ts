import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './settings/settings.component';

export const ROUTES: Routes = [
    { path: 'catalog', component: CatalogComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', component: IndexComponent }
];