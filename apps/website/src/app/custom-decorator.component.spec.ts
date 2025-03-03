import { TestBed } from "@angular/core/testing";
import { CustomDecoratorComponent } from './custom-decorator.component';

describe('comp', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CustomDecoratorComponent],
        }).compileComponents();
    });
    it('should have title from custom decorator', () => {
        const fixture = TestBed.createComponent(CustomDecoratorComponent);
        fixture.autoDetectChanges();
        expect(fixture.componentInstance.message).toBe('CustomTitle')
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('strong')?.textContent).toBe(
            'CustomTitle'
        );
    })
})