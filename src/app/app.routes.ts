import { Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { MainHomeComponent } from './pages/home/main-home/main-home.component';
import { NotfoundpageModule } from './pages/notfoundpage/notfoundpage.module';
import { MainNotfoundComponent } from './pages/notfoundpage/main-notfound/main-notfound.component';
import { LoginModule } from './pages/login/login.module';
import { MainLoginComponent } from './pages/login/main-login/main-login.component';
import { islogGuard } from './guard/islog.guard';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { MainDashboardComponent } from './pages/dashboard/main-dashboard/main-dashboard.component';
export const routes: Routes = [
    {path: '', component: MainHomeComponent,children:[
        {path: 'home', loadChildren: () => HomeModule}
    ]},
   // {path:'dashboard',component:MainDashboardComponent},
   // {path: 'login', component:MainLoginComponent , loadChildren:()=>LoginModule, canActivate: [islogGuard]},
    {path: '**', component: MainNotfoundComponent, loadChildren: () => NotfoundpageModule}
];

