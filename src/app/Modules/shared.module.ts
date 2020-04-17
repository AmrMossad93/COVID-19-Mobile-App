import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from '../Widgets/card/card.component';
import {IonicModule} from '@ionic/angular';
import {CountUpModule} from 'ngx-countup';
import {HttpClientModule} from '@angular/common/http';
import {PrimeNgModule} from './prime-ng.module';


@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        CountUpModule,
        PrimeNgModule,
        HttpClientModule,
        IonicModule
    ],
    exports: [
        IonicModule,
        CardComponent
    ]
})
export class SharedModule {
}
