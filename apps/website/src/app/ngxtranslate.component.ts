import { Component, inject } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-ngxtranslate',
    template: `<h1>{{'KEY' | translate}}</h1>`,
    imports:[
        TranslateModule
    ]
})
export class NgxTranslateComponent {
    title = 'ngx-translate';
    constructor(){
        const translateService = inject(TranslateService);
        translateService.set('KEY', 'English', 'en-US')
    }
}