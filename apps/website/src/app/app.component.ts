import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTranslateComponent } from "./ngxtranslate.component";
import { CustomDecoratorComponent } from "./custom-decorator.component";
import { WithScssComponent } from "./with-scss/with-scss.component";

@Component({
  imports: [RouterModule, NgxTranslateComponent, CustomDecoratorComponent, WithScssComponent],
  selector: 'app-root',
  template: `
    <p>hello {{title}}</p>
    <app-ngxtranslate></app-ngxtranslate>
    <section>
      <h2>Custom Decorator</h2>
      <app-custom-decorator></app-custom-decorator>
    </section>
    <section>
      <h2>With SCSS</h2>
      <app-with-scss></app-with-scss>
    </section>
  `,
  styles: [``],
})
export class AppComponent implements AfterViewInit {
  title = 'website';
  test = signal('')

  ngAfterViewInit(): void {
    this.test.set('value')
  }
}
