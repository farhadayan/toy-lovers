import { inject } from '@angular/core';
import { UserState } from './user-state';

export const UserStateGuard = () => {
  return inject(UserState).fetchUserState();
};
