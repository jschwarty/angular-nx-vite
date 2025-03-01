import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(TranslateModule.forRoot({
      defaultLanguage: 'en-US'
  })),
  ],
};
