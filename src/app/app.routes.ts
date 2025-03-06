import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProduktmanagementComponent } from './pages/produktmanagement/produktmanagement.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    title: 'Fitko-Toolkit - Übersicht',
    path: 'overview',
    component: OverviewComponent,
    pathMatch: 'full',
  },
  {
    title: 'Fitko-Toolkit - Produktmanagement',
    path: 'produktmanagement',
    component: ProduktmanagementComponent,
    pathMatch: 'full',
  },
  {
    title: 'Fitko-Toolkit - Übersicht',
    path: 'datenschutz',
    component: DatenschutzComponent,
    pathMatch: 'full',
  },
];
