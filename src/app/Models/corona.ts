import {IConfirmed} from './confirmed';
import {IRecovered} from './recovered';
import {IDeaths} from './deaths';

export interface ICorona {
  confirmed: IConfirmed;
  recovered: IRecovered;
  deaths: IDeaths;
  lastUpdate: Date;
}
