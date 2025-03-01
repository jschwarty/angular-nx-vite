import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(TranslateModule.forRoot({
      defaultLanguage: 'en-US',
    })),
    provideAppInitializer(() => {
      const translateService = inject(TranslateService);
      translateService.addLangs(['en-US', 'fr-CA']);
      translateService.use('en-US');
    })
  ],
};
