import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthorizeGuard} from './core/guards/authorize.guard';
import {StartScreenGuard} from './core/guards/start-screen.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full',
    },
    {
        path: 'tabs',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
        canActivate: [AuthorizeGuard],
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule),
    },
    {
        path: 'start',
        loadChildren: () => import('./pages/start/start.module').then(m => m.StartPageModule),
        canActivate: [StartScreenGuard],
    },
    {
        path: 'map',
        loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule),
        canActivate: [AuthorizeGuard],
    },
    {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule),
        canActivate: [AuthorizeGuard],
    },
    {
        path: 'chat',
        loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule),
        canActivate: [AuthorizeGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
