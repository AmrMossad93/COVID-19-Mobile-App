import {IGlobalConfirmed} from './global-confirmed';
import {IGlobalDeaths} from './global-deaths';

export interface IGlobal {
  confirmed: IGlobalConfirmed;
  deaths: IGlobalDeaths;
  reportDate: Date[];
}
