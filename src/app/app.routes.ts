import { Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { MainHomeComponent } from './pages/home/main-home/main-home.component';

export const routes: Routes = [
    {path: '', component: MainHomeComponent},
    {path: 'home', loadChildren: () => HomeModule}
    //{path: '', component: HomeComponent},
    //{path: 'login', component: LoginComponent}
];

