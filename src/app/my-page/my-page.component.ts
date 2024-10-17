import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserState } from '../../top-bar/state/user-state';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MY_PAGE_NAVITEMS } from './my-page-menu';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const fb = new FormBuilder();

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule, RouterModule, MatMenuModule, MatIconModule],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.scss',
})
export default class MyPageComponent {
  constructor(public userState: UserState) {}
  
  userRole = this.userState.fetchUserRole();
  
  navItems = MY_PAGE_NAVITEMS;
  toyForm = fb.group({});

}
