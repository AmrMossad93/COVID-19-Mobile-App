import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from '../Widgets/card/card.component';
import {IonicModule} from '@ionic/angular';
import {CountUpModule} from 'ngx-countup';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        CountUpModule,
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
