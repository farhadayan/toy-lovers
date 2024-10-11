import { effect, Injectable, OnInit, signal, WritableSignal } from '@angular/core';
import { ToyBrowseService } from '../service/toy-browse.service';


@Injectable({
  providedIn: 'root',
})
export class ToyBrowseState {
  
  constructor(private toyBrowseService: ToyBrowseService) {
    //console.log("toysInfo: ",this.toysInfo())
    effect(()=>{
      console.log("toysInfo: ",this.toysInfo())

    })
    
  }
  
  toysInfo = signal(this.toyBrowseService.fetchToyData());
  
  
}
