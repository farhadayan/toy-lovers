import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../toy-card-container/service/file-upload.service';
import { HttpResponse } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CloseDialogComponent } from '../close-dialog/close-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToyCardContainerComponent } from '../toy-card-container/toy-card-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatOptionModule } from '@angular/material/core';
//import { ToyType, ToyTypes } from '../../../top-bar/state/toy-type.state';
import { MatSelectModule } from '@angular/material/select';
import { Countries } from '../../../share/country-data';
import { ToyModel } from '../../toy-browse/state/toy-browse-model';
import { ToyTypes } from '../../../top-bar/state/toy-type.state';

const fb = new FormBuilder();

@Component({
  selector: 'app-add-toy',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    CloseDialogComponent,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatOptionModule,
    MatSelectModule,
  ],
  templateUrl: './add-toy.component.html',
  styleUrl: './add-toy.component.scss',
})
export class AddToyComponent {
  selectedFiles?: FileList;
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;

  toyTypes = ToyTypes;
  countries = Countries;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: ToyModel,
    private uploadService: FileUploadService,

    public dialogRef: MatDialogRef<AddToyComponent>
  ) {
    console.log('data: ', dialogData);
  }

  toyForm = fb.group({
    toyName: fb.control(this.dialogData.toyName, [Validators.required]),
    toyType: fb.control('', [Validators.required]),
    toyCountry: fb.control(['']),
    ingredients: fb.control(this.dialogData.detailsOfToy, [
      Validators.required,
    ]),
    toyImages: '', //TODO:multile image
    active: <boolean>true,
  });

  ngOnInit() {
    this.patchValues();
  }
  patchValues() {
    this.toyForm.patchValue({
      toyCountry: [...this.dialogData.toyCountry],
      active: true,
      toyImages: this.dialogData.imageUrl,
      toyType: this.dialogData.ageType,
    });
  }
  selectFiles(event: any): void {
    console.log('select file: ', event);
    this.message = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  upload(file: File): void {
    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            const msg = file.name + ': Successful!';
            this.message.push(msg);
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          let msg = file.name + ': Failed!';

          if (err.error && err.error.message) {
            msg += ' ' + err.error.message;
          }

          this.message.push(msg);
          this.imageInfos = this.uploadService.getFiles();
        },
      });
    }
  }
  saveToy() {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(this.selectedFiles[i]);
      }
      this.selectedFiles = undefined;
    }
    let toyInfo = {
      toyName: this.toyForm.value.toyName,
      toyType: this.toyForm.value.toyType,
      toyCountry: this.toyForm.value.toyCountry,
      ingredients: this.toyForm.value.ingredients,
      toyImages: this.toyForm.controls.toyImages,
      active: true,
    };

    this.dialogRef.close(toyInfo);
  }
  closeDialog() {
    this.dialogRef.close('fail');
  }
}
