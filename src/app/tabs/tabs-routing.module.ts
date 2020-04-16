import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'latest-news',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../Pages/latest-news/latest-news.module').then(m => m.LatestNewsPageModule)
                    }
                ]
            },
            {
                path: 'reports',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../Pages/reports/reports.module').then(m => m.ReportsPageModule)
                    }
                ]
            },
            {
                path: 'statistics',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../Pages/statistics/statistics.module').then(m => m.StatisticsPageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../Pages/settings/settings.module').then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: 'help',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../Pages/help/help.module').then(m => m.HelpPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/latest-news',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/latest-news',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
