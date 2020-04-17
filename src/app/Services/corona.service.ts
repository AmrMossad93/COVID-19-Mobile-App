import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private dataService: DataService) {
  }

  getData() {
    return this.dataService.get('api');
  }

  getGlobalData() {
    return this.dataService.get('api/daily');
  }

  getCountries() {
    return this.dataService.get('api/countries');
  }

  getCoronaDetailsByName(Country: string) {
    return this.dataService.get('api/countries/' + Country);
  }
}
