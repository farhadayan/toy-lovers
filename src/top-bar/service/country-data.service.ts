import { Injectable } from '@angular/core';
import { Countries } from '../../share/country-data';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  getCountries() {
    return Countries;
  }
}
