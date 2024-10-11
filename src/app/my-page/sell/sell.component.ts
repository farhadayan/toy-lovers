import { Component, Injector, effect } from '@angular/core';
import { ToyBrowseState } from '../../toy-browse/state/toy-browse.state';
import { UserState } from '../../../top-bar/state/user-state';

import { LoginState } from '../../login/state/login-state';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ToyCardContainerComponent } from '../../common-use/toy-card-container/toy-card-container.component';
import { MatDialog } from '@angular/material/dialog';
import { ToyDetailsComponent } from '../../toy-browse/toy-details/toy-details.component';
import { ConfirmationDialogComponent } from '../../common-use/confirmation-dialog/confirmation-dialog.component';
import { Subject, takeUntil } from 'rxjs';
import { ToyModel } from '../../toy-browse/state/toy-browse-model';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    ToyCardContainerComponent,
  ],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss',
})
export default class SellComponent {
  myToysInfo: ToyModel[] = this.toysState.toysInfo();
  public unsubscribe$ = new Subject();

  constructor(
    private toysState: ToyBrowseState,
    private userState: UserState,

    private dialog: MatDialog,
    private injector: Injector
  ) {
    effect(() => {
      this.myToysInfo = this.toysState.toysInfo().filter(
        (myToy) =>
          //checking user authentication to browse this link
          myToy.toyOwner == this.userState.userStateSignal() && myToy.active
      );
      console.log('mytoysinfo:', this.myToysInfo);
    });
  }

  // apiEffect = effect(() => {
  //   this.myToysInfo = this.toysState
  //     .toysInfo()
  //     .filter(
  //       (myToy) =>
  //         myToy.toyOwner == this.userState.userStateSignal() && myToy.active
  //     );
  // });

  toggleLike(toy: ToyModel) {
    console.log(toy);
  }
  toggleFavorite(toy: ToyModel) {
    console.log(toy);
  }
  buyToy(toy: ToyModel) {
    console.log('buy algorithm', toy);
  }
  toyStatusChanged(toy: ToyModel) {
    console.log('status', toy);
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      minHeight: '150px',
      minWidth: '350px',
      data: {
        description: 'Are you sure',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        buttonsVisible: true,
        toy: toy,
      },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        console.log('sold: ', response);
        if (response === 'true') {
          this.myToysInfo = this.toysState.toysInfo().filter(
            (myToy) =>
              //checking user authentication to browse this link
              //myToy.toyOwner == this.userState.userStateSignal() &&
              myToy.active
          );
        } else {
          toy.active = !toy.active;
        }
      });
  }
  toyDetails(toy: ToyModel) {
    let dialogRef = this.dialog.open(ToyDetailsComponent, {
      minHeight: '400px',
      minWidth: '350px',
      position: {
        top: '10vh',
      },
      data: toy,
    });
  }
}
