import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  ToyModel,
  ReactionModel,
  ShareToyInfo,
  ShareLinks,
} from '../../toy-browse/state/toy-browse-model';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { FileResourceDisplayModel } from './state/toy-container.model';
import { FileUploadService } from './service/file-upload.service';
import { HttpResponse } from '@angular/common/http';
import { take } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddToyComponent } from '../add-toy/add-toy.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toy-card-container',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    MatCardImage,
    FlexLayoutModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatMenuModule,
    MatListModule,
  ],
  templateUrl: './toy-card-container.component.html',
  styleUrl: './toy-card-container.component.scss',
})
export class ToyCardContainerComponent {
  @Input() toysInfo: ToyModel[] = [];
  @Input() source: string = '';
  @Output() toyClicked: EventEmitter<ToyModel> =
    new EventEmitter<ToyModel>();
  @Output() toyBuy: EventEmitter<ToyModel> = new EventEmitter<ToyModel>();
  @Output() toyShare: EventEmitter<ToyModel> = new EventEmitter<ToyModel>();
  @Output() reactionParam: EventEmitter<ReactionModel> =
    new EventEmitter<ReactionModel>();
  @Output() toyStatus: EventEmitter<ToyModel> = new EventEmitter<ToyModel>();

  shareLinks: ShareLinks[] = [];

  shareData: ShareToyInfo = {
    url: 'https://github.com/farhadayan',
    description: 'Toy Information',
    tags: 'Farhad',
  };

  constructor(
    private uploadService: FileUploadService,
    private dialog: MatDialog
  ) {}

  emptyContainer() {}
  toyDetails(toy: ToyModel) {
    this.toyClicked.emit(toy);
  }
  buyToy(toy: ToyModel) {
    this.toyBuy.emit(toy);
  }

  statusChanged(toy: ToyModel, statusEvent: boolean) {
    toy.active = statusEvent;
    this.toyStatus.emit(toy);
  }

  toggleLike(toy: ToyModel) {
    this.reactionParam.emit({
      toy: toy,
      reactionName: 'like',
    });
  }

  toggleFavorite(toy: ToyModel) {
    this.reactionParam.emit({
      toy: toy,
      reactionName: 'favorite',
    });
  }

  addEditToy(toy: ToyModel | null) {
    console.log('addedit toy', toy);
    let dialogRef = this.dialog.open(AddToyComponent, {
      panelClass: 'scheduleWindowPos',
      height: '700px',
      width: '650px',
      maxWidth: '80vw',
      disableClose: true,
      data: toy !== null ? toy : '',
    });
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((response) => {
        if (response !== 'fail') {
          this.toysInfo.push({
            active: response.active,
            currency: 'dkk',
            detailsOfToy: response.ingredients,
            toyCountry: response.toyCountry,
            toyCreated: new Date('2024-04-23'),
            toyName: response.toyName,
            toyOwner: '',
            ageType: response.toyType,
            toyPrice: 100,
            reaction: {
              numberLikes: 0,
              numberDislikes: 0,
              numberLoves: 0,
            },
            imageUrl: response.toyImages,
          });
        }
      });
  }
  editToy(toy: ToyModel) {
    this.toyClicked.emit(toy);
  }
  shareToy(toy: ToyModel) {
    this.toyShare.emit(toy);
    this.shareData = {
      url: toy.imageUrl,
      description: 'test',
      tags: 'Farhad',
    };

    this.shareLinks = [
      {
        title: 'facebook',
        link: `https://www.facebook.com/sharer.php?u=${this.shareData?.url}`,
      },
      {
        title: 'event_note',
        link: `https://twitter.com/intent/tweet?url=${this.shareData?.url}&text=${this.shareData?.description}&hashtags=${this.shareData?.tags}`,
      },
      {
        title: 'pinterest',
        link: `http://pinterest.com/pin/create/link/?url=${this.shareData?.url}`,
      },
      {
        title: 'cloud_circle',
        link: `https://wa.me?text=${this.shareData?.url}`,
      },
      {
        title: `send`,
        link: 'https://wa.me/+4560481601',
      },
    ];
  }
}
