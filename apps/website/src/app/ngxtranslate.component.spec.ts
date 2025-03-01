import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { NgxTranslateComponent } from './ngxtranslate.component';
import { provideNgxTranslate } from './provide-ngx-translate';

describe('comp', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxTranslateComponent],
            providers: [provideNgxTranslate()]
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
    it('should translate to French', fakeAsync(() => {
        const fixture = TestBed.createComponent(NgxTranslateComponent);
        fixture.autoDetectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const button = compiled.querySelector<HTMLButtonElement>('button')
        expect(button?.textContent).toBe('French')
        button?.click();
        tick();
        expect(compiled.querySelector('h1')?.textContent).toContain(
            'Bonjour'
        );
    }))
})