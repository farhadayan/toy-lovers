import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDisabledInitialNavigation, withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { MatDialogModule } from '@angular/material/dialog';
import {

  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([])),
    provideRouter(routes),
    MatDialogModule,
    {
       provide: "SocialAuthServiceConfig",
            useValue: {
              autoLogin: false,
              providers: [
                {
                  id: GoogleLoginProvider.PROVIDER_ID,
                  provider: new GoogleLoginProvider('695604882185-9pelmmtm8qdtcjutaa25in8755it6vpm.apps.googleusercontent.com')

                },
              ],
              onError: (err) => {
                console.error(err);
              },
            } as SocialAuthServiceConfig,
          }
   ],
};
