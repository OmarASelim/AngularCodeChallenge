import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';

import { DetailedComponent } from './components/detailed/detailed.component';

 
export const AppRoutes: Routes = [
    { path: 'home', component: AppComponent }

];
 
export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);