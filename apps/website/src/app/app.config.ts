import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideNgxTranslate } from './provide-ngx-translate';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNgxTranslate()
  ],
};
