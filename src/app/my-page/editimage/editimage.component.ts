import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../common-use/toy-card-container/service/file-upload.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-editimage',
  standalone: true,
  imports: [CdkDrag,CommonModule],
  templateUrl: './editimage.component.html',
  styleUrl: './editimage.component.scss'
})
export default class EditimageComponent {
  currentFile?: File;
  message = '';
  preview = '';

  imageInfos?: Observable<any>;
  
  constructor(
    private uploadService: FileUploadService
  ){}
  
  ngOnInit(){
    this.imageInfos = this.uploadService.getFiles();
  }

  
  selectFile(event: any) {

    // const files = (target as HTMLInputElement).files;
    // let file = files.item(0);
    // this.productCategoryForm.markAsDirty();

    // if (file.size <= 3 * 1024 * 1024) {
    //   let formData = new FormData();
    //   formData.append('Content', file, file.name);
    //   formData.append('type', 'Image');

    //   this.apiService
    //     .uploadFormFileAsset(formData)
    //     .pipe(takeUntil(this.unsubscribe$))
    //     .subscribe((file: FileResource) => {
    //       this.image = <FileResourceDisplayModel>{
    //         id: file.id,
    //         url: this.apiService.absoluteUrl(file.url)
    //       };
    //     });
    // } else {
    //   this.snackbar.open('File must be max 3 MiB', 'OK', { duration: 3000 });
    // }


    this.message = '';
    this.preview = '';
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      const file: File | null = selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
  }

  upload(): void {
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.imageInfos = this.uploadService.getFiles();
            console.log("info: ", this.imageInfos)
          }
        },
        error: (err: any) => {
          console.log(err);

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the image!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        },
      });
    }
  }
}
