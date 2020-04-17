import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from '../Widgets/card/card.component';
import {IonicModule} from '@ionic/angular';
import {CountUpModule} from 'ngx-countup';


@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        CountUpModule,
        IonicModule
    ],
    exports: [
        IonicModule,
        CardComponent
    ]
})
export class SharedModule {
}
