import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from '../Widgets/card/card.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        IonicModule,
        CardComponent
    ]
})
export class SharedModule {
}
