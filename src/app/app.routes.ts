import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { IndexComponent } from './index/index.component';

export const ROUTES: Routes = [
    { path: 'catalog', component: CatalogComponent },
    { path: '', component: IndexComponent }
];