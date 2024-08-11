import { Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { MainHomeComponent } from './pages/home/main-home/main-home.component';
import { NotfoundpageModule } from './pages/notfoundpage/notfoundpage.module';
import { MainNotfoundComponent } from './pages/notfoundpage/main-notfound/main-notfound.component';
import { LoginModule } from './pages/login/login.module';
import { MainLoginComponent } from './pages/login/main-login/main-login.component';
import { islogGuard } from './guard/islog.guard';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { TutoComponent } from './pages/dashboard/tuto/tuto.component';
import { UserstableComponent } from './pages/dashboard/userstable/userstable.component';
import { MainDashboardComponent } from './pages/dashboard/main-dashboard/main-dashboard.component';
import { MinecraftComponent } from './pages/dashboard/minecraft/minecraft.component';
import { ExampleComponent } from './pages/dashboard/example/example.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path: '', component: MainHomeComponent,children:[
        {path: 'home', loadChildren: () => HomeModule}
    ]},
    {path:'dashboard',
        component: MainDashboardComponent, 
        canActivate: [authGuard],
        children: [
            {path: 'tutorial', component: TutoComponent},
            {path: 'users', component: UserstableComponent},
            {path: 'settings', component: SettingsComponent},
            {path: 'minecraft', component: MinecraftComponent},
            {path:'tutorial/:id', component: ExampleComponent}
       ] 
    },
    {path: 'login', component:MainLoginComponent , loadChildren:()=>LoginModule, canActivate: [islogGuard]},
    {path: '**', component: MainNotfoundComponent, loadChildren: () => NotfoundpageModule}
];

