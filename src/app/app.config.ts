import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { MatDialogModule } from '@angular/material/dialog';
import {

  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([])),
    provideRouter(routes),
    MatDialogModule,
    // JwtHelperService,
    // { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },

  ],
};
