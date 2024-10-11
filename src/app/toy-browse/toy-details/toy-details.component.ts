import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToyModel } from '../state/toy-browse-model';

@Component({
  selector: 'app-toy-details',
  standalone: true,
  imports: [],
  templateUrl: './toy-details.component.html',
  styleUrl: './toy-details.component.scss',
})
export class ToyDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public toyData: ToyModel
  ) {
    console.log(toyData);
  }
}
