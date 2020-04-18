import {Component, OnInit} from '@angular/core';
import {CoronaService} from '../../Services/corona.service';
import {ICountry} from '../../Models/country';
import {ICorona} from '../../Models/corona';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.page.html',
    styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
    countries: ICountry;
    myCountry;
    countryList: string[] = [''];
    data: ICorona;
    chartData: any;

    constructor(private coronaService: CoronaService) {
    }

    ngOnInit() {
        this.getCountries();
    }

    getCountries() {
        this.coronaService.getCountries().subscribe(res => {
            this.countries = res as ICountry;
            this.countryList = this.countries.countries.map((c) => c.name);
        });
    }

    getCoronaDetailsByCountry() {
        this.coronaService.getCoronaDetailsByName(this.myCountry).subscribe(res => {
            this.data = res as ICorona;
        }, error => {
        }, () => {
            this.callChart();
        });
    }

    callChart() {
        this.chartData = {
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
                {
                    data: [this.data.confirmed.value, this.data.recovered.value, this.data.deaths.value],
                    backgroundColor: [
                        '#17a2b8',
                        '#28a745',
                        '#dc3545'
                    ],
                    hoverBackgroundColor: [
                        '#17a2b8',
                        '#28a745',
                        '#dc3545'
                    ]
                }]
        };
        return this.chartData;
    }
}
