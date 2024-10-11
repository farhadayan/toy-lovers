import { Component, effect } from '@angular/core';
import { ToyBrowseService } from '../../toy-browse/service/toy-browse.service';
import { ToyBrowseState } from '../../toy-browse/state/toy-browse.state';
import { UserState } from '../../../top-bar/state/user-state';
import { ToyCardContainerComponent } from '../../common-use/toy-card-container/toy-card-container.component';
import { CommonModule } from '@angular/common';
import { ToyModel } from '../../toy-browse/state/toy-browse-model';

@Component({
  selector: 'app-archived',
  standalone: true,
  imports: [ToyCardContainerComponent, CommonModule],
  templateUrl: './archived.component.html',
  styleUrl: './archived.component.scss',
})
export default class ArchivedComponent {
  archivedToys: ToyModel[] = [];
  constructor(
    private toyState: ToyBrowseState,
    private userState: UserState
  ) {}

  apiEffect = effect(() => {
    this.archivedToys = this.toyState.toysInfo().filter(
      (toy) =>
        //checking user authentication to browse this link
        //  toy.toyOwner === this.userState.userStateSignal() &&
        !toy.active
    );
  });

  toyDetails(toy: ToyModel) {
    console.log(toy);
  }
}
