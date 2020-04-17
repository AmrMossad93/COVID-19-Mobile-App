import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestNewsPageRoutingModule } from './latest-news-routing.module';

import { LatestNewsPage } from './latest-news.page';
import {SharedModule} from '../../Modules/shared.module';
import {PrimeNgModule} from '../../Modules/prime-ng.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PrimeNgModule,
        LatestNewsPageRoutingModule,
        SharedModule
    ],
  declarations: [LatestNewsPage]
})
export class LatestNewsPageModule {}
