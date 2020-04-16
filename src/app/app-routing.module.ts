import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
  {
    path: 'settings',
    loadChildren: () => import('./Pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./Pages/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./Pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./Pages/help/help.module').then( m => m.HelpPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
