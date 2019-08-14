import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './views/home/home/home.component';
import {LoginComponent} from './views/login/login.component';
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]

    },
    {
        path: 'login',
        component: LoginComponent,
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
