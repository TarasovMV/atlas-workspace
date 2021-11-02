import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'potential',
                loadChildren: () => import('./pages/tabs-potential/tabs-potential.module').then( m => m.TabsPotentialPageModule)
            },
            {
                path: 'restrictions',
                loadChildren: () => import('./pages/tabs-restrictions/tabs-restrictions.module').then( m => m.TabsRestrictionsPageModule)
            },
            {
                path: 'activity',
                loadChildren: () => import('./pages/tabs-activity/tabs-activity.module').then( m => m.TabsActivityPageModule)
            },
            {
                path: 'ideas',
                loadChildren: () => import('./pages/tabs-ideas/tabs-ideas.module').then(m => m.TabsIdeasPageModule)
            },
            {
                path: '**',
                redirectTo: 'potential',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
