import { Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { MainHomeComponent } from './pages/home/main-home/main-home.component';
import { NotfoundpageModule } from './pages/notfoundpage/notfoundpage.module';
import { MainNotfoundComponent } from './pages/notfoundpage/main-notfound/main-notfound.component';
export const routes: Routes = [
    {path: '', component: MainHomeComponent,children:[
        {path: 'home', loadChildren: () => HomeModule}
    ]},
    {path: '**', component: MainNotfoundComponent, loadChildren: () => NotfoundpageModule},
    //{path: '', component: HomeComponent},
    //{path: 'login', component: LoginComponent}
];

