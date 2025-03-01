import { Component, inject } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-ngxtranslate',
    template: `
        <h1>{{'KEY' | translate: { title } }}</h1>
        @if(translateService.currentLang === 'en-US') {
            <button lang="fr-CA" (click)="translateService.use('fr-CA')">French</button>
        }
        @else {
            <button lang="en-US" (click)="translateService.use('en-US')">English</button>
        }
    `,
    imports: [
        TranslateModule
    ]
})
export class NgxTranslateComponent {
    title = 'ngx-translate';
    translateService = inject(TranslateService);
    constructor() {
        this.translateService.setTranslation(
            'en-US', { KEY: 'Hello {{title}}' }, true
        )
        this.translateService.setTranslation(
            'fr-CA', { KEY: 'Bonjour {{title}}' }, true
        )
    }
}