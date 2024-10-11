import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  computed,
  effect,
  viewChildren,
} from '@angular/core';
import { ToyBrowseState } from './state/toy-browse.state';

import { CommonModule } from '@angular/common';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ToyDetailsComponent } from './toy-details/toy-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserState } from '../../top-bar/state/user-state';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToyCardContainerComponent } from '../common-use/toy-card-container/toy-card-container.component';
import {
  ToyModel,
  ReactionModel,
  ShareToyInfo,
} from './state/toy-browse-model';
import { ShareLinks } from './state/toy-browse-model';


@Component({
  selector: 'app-toy-browse',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatCardImage,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ToyCardContainerComponent,
  ],
  templateUrl: './toy-browse.component.html',
  styleUrl: './toy-browse.component.scss',
})
export default class ToyBrowseComponent {
  divEl = viewChildren<ElementRef>('');
  toysInfo = this.toysState.toysInfo();
  shareLinks: ShareLinks[] = [];

  shareData: ShareToyInfo = {
    url: '',
    description: 'Toy Information',
    tags: 'Farhad',
  };
  constructor(
    private toysState: ToyBrowseState,
    private dialog: MatDialog,
    private userState: UserState,
    private snackBar: MatSnackBar
  ) {
    console.log('div-el:', this.divEl);
    effect(() => {
      this.toysInfo =  this.toysState.toysInfo().filter((toy) => toy.active);
    });
  }

  //toyDetails(toy: ToyModel) {
    toyDetails(toy: any) {

    let dialogRef = this.dialog.open(ToyDetailsComponent, {
      minHeight: '400px',
      minWidth: '350px',
      position: {
        top: '10vh',
      },
      data: toy,
    });
  }

  //toysBuy(toy: ToyModel) {
    toysBuy(toy: any) {
      //test purpose
    const val=[1,2,3] 
    const val1=[5,6] as const //readonly, cant change val1
    const setCount = (n: number) => {
      return {
        type: 'SET_COUNT',
        payload: n
      } as const
    }
    
    const resetCount = () => {
      return {
        type: 'RESET_COUNT'
      } as const
    }
    type CountActions = ReturnType<typeof setCount> | ReturnType<typeof resetCount>;

    
    val.push(4)

    const a=setCount(2)
    
    console.log('buy browse:', val,a.payload);
  //test purpose end
      

  }

  // toyShare(toy: ToyModel) {
  //   console.log('toy share:', toy);
  //   this.shareData = {
  //     url: toy.imageUrl,
  //     description: 'test',
  //     tags: 'Farhad',
  //   };
  //   this.shareLinks = [
  //     {
  //       title: 'fb',
  //       link: `https://www.facebook.com/sharer.php?u=${this.shareData?.url}`,
  //     },
  //     {
  //       title: 'twitter',
  //       link: `https://twitter.com/intent/tweet?url=${this.shareData?.url}&text=${this.shareData?.description}&hashtags=${this.shareData?.tags}`,
  //     },
  //     {
  //       title: 'pinterest',
  //       link: `http://pinterest.com/pin/create/link/?url=${this.shareData?.url}`,
  //     },
  //     {
  //       title: 'whatsapp',
  //       link: `https://wa.me?text=${this.shareData?.url}`,
  //     },
  //     {
  //       title: 'send to 00201012345678',
  //       link: 'https://wa.me/+201012345678',
  //     },
  //   ];
  // }

  reaction(reactionParam: ReactionModel) {
    if (this.userState.fetchUserState()) {
      switch (reactionParam.reactionName) {
        case 'like':
          reactionParam.toy.isLike = !reactionParam.toy.isLike;
          if (reactionParam.toy.isLike) {
            reactionParam.toy.reaction.numberLikes++;
            if (reactionParam.toy.isLove) {
              reactionParam.toy.isLove = false;

              reactionParam.toy.reaction.numberLoves--;
            } else if (reactionParam.toy.isDislike) {
              reactionParam.toy.isDislike = false;
              reactionParam.toy.reaction.numberDislikes--;
            }
          } else {
            reactionParam.toy.reaction.numberLikes--;
          }
          break;

        case 'disLike':
          reactionParam.toy.isDislike = !reactionParam.toy.isDislike;
          if (reactionParam.toy.isDislike) {
            reactionParam.toy.reaction.numberDislikes++;
            if (reactionParam.toy.isLove) {
              reactionParam.toy.isLove = false;

              reactionParam.toy.reaction.numberLoves--;
            } else if (reactionParam.toy.isLike) {
              reactionParam.toy.isLike = false;
              reactionParam.toy.reaction.numberLikes--;
            }
          } else {
            reactionParam.toy.reaction.numberLikes--;
          }
          break;

        case 'favorite':
          reactionParam.toy.isLove = !reactionParam.toy.isLove;
          if (reactionParam.toy.isLove) {
            reactionParam.toy.reaction.numberLoves++;
            if (reactionParam.toy.isLike) {
              reactionParam.toy.isLike = false;

              reactionParam.toy.reaction.numberLikes--;
            } else if (reactionParam.toy.isDislike) {
              reactionParam.toy.isDislike = false;
              reactionParam.toy.reaction.numberDislikes--;
            }
          } else {
            reactionParam.toy.reaction.numberLoves--;
          }
      }
    } else {
      this.snackBar.open('Login for reaction...', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }
}
