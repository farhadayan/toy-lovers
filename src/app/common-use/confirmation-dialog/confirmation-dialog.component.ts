import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToyModel } from '../../toy-browse/state/toy-browse-model';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [NgIf, MatFormFieldModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: {
      confirmButtonText: string;
      cancelButtonText: string;
      buttonsVisible: boolean;
      description: string;
      toy: ToyModel;
    },
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {}

  ngOnInit(): void {}

  onCancel() {
    this.dialogRef.close('false');
  }
  onConfirm() {
    this.dialogRef.close('true');
  }
}
