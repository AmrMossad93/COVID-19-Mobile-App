import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ReportsPageRoutingModule} from './reports-routing.module';

import {ReportsPage} from './reports.page';
import {SharedModule} from '../../Modules/shared.module';
import {PrimeNgModule} from '../../Modules/prime-ng.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReportsPageRoutingModule,
        PrimeNgModule,
        SharedModule
    ],
    declarations: [ReportsPage]
})
export class ReportsPageModule {
}
