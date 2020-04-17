import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() iconClass: string;
    @Input() tittle: string;
    @Input() color: string;
    @Input() numberCases: number;

    constructor() {
    }

    ngOnInit() {
    }

}
