import { Injectable, signal } from '@angular/core';
import { CountryDataService } from '../service/country-data.service';
@Injectable({
  providedIn: 'root',
})
export class CountryState {
  constructor(private coutryService: CountryDataService) {}

  countryList = signal(this.coutryService.getCountries());

  allCountries() {
    return this.countryList();
  }
}
