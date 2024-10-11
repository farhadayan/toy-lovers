import { ElementRef, Injectable, effect, viewChildren } from '@angular/core';
import { ToyBrowseState } from '../toy-browse/state/toy-browse.state';

@Injectable({
  providedIn: 'root',
})
export class Notifications {
  toysInfo = this.toyState.toysInfo();
  constructor(private toyState: ToyBrowseState) {
    // effect(()=>{
    //   this.foodsInfo=foodState.foodsInfo().filter((food)=>{
    //     food.
    // })
    //    })
  }
}
