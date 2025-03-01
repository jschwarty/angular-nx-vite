import { TestBed } from "@angular/core/testing";
import { NgxTranslateComponent } from './ngxtranslate.component';
import { TranslateModule } from "@ngx-translate/core";

describe('comp', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxTranslateComponent,
                TranslateModule.forRoot({
                    defaultLanguage: 'en-US'
                })
            ],
        }).compileComponents();
    });
    it('should have title', () => {
        const fixture = TestBed.createComponent(NgxTranslateComponent);
        expect(fixture.componentInstance.title).toBe('ngx-translate')
    })
    it('should have translated text', () => {
        const fixture = TestBed.createComponent(NgxTranslateComponent);
        fixture.autoDetectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain(
            'Hello'
        );
    })
    // it('should translate to French', () => {
    //     const fixture = TestBed.createComponent(NgxTranslateComponent);
    //     fixture.autoDetectChanges();
    //     const compiled = fixture.nativeElement as HTMLElement;
    //     compiled.querySelector<HTMLButtonElement>('button[lang="fr-CA"]')?.click();
    //     expect(compiled.querySelector('h1')?.textContent).toContain(
    //         'Bonjur'
    //     );
    // })
})