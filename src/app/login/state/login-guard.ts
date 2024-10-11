import { inject } from '@angular/core';

import { UserState } from '../../../top-bar/state/user-state';

export const userLogin = () => {
  inject(UserState).fetchUserState();
};

export const userRole = () =>{
  inject(UserState).fetchUserRole();
}