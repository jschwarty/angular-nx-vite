import { importProvidersFrom, inject, provideAppInitializer } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

export function provideNgxTranslate() {
    return [
        importProvidersFrom(TranslateModule.forRoot({
            defaultLanguage: 'en-US',
        })),
        provideAppInitializer(() => {
            const translateService = inject(TranslateService);
            translateService.addLangs(['en-US', 'fr-CA']);
            translateService.use('en-US');
        })
    ]
}