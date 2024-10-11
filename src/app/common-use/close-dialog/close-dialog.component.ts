import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-close-dialog',
  standalone: true,
  imports: [],
  templateUrl: './close-dialog.component.html',
  styleUrl: './close-dialog.component.scss',
})
export class CloseDialogComponent {
  @Output() click: EventEmitter<boolean> = new EventEmitter();
}
