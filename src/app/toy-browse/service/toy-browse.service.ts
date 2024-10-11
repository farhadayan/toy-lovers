import { Injectable } from '@angular/core';
import { toys } from '../../../share/toy-data';

@Injectable({
  providedIn: 'root',
})
export class ToyBrowseService {
  fetchToyData() {
    return toys;
  }
}
