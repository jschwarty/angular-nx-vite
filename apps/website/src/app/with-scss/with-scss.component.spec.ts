import { TestBed } from "@angular/core/testing";
import { WithScssComponent } from "./with-scss.component";

describe('comp', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WithScssComponent],
        }).compileComponents();
    });
    it('should have text copy', () => {
        const fixture = TestBed.createComponent(WithScssComponent);
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('p')?.textContent).toBe(
            'I am from SCSS'
        );
    })
})