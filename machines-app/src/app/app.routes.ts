import { Routes } from '@angular/router';

// Importe seus componentes de página
import { MachineDashboard } from './pages/machine-dashboard/machine-dashboard';
import { MachineForm } from './pages/machine-form/machine-form';
import { MachineDetails } from './pages/machine-details/machine-details';

// definição das rotas
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MachineDashboard },
  { path: 'machines/new', component: MachineForm },
  { path: 'machines/:id', component: MachineDetails }
];

