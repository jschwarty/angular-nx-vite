import { TestBed } from "@angular/core/testing";
import { AppComponent } from './app.component'

describe('comp', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();
    });
    it('should have title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance.title).toBe('website')
    })
    it('should have a value for test after view init', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.componentInstance.ngAfterViewInit();
        expect(fixture.componentInstance.test()).toBe('value')
    })
})