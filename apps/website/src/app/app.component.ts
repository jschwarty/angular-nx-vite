import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTranslateComponent } from "./ngxtranslate.component";
import { CustomDecoratorComponent } from "./custom-decorator.component";

@Component({
  imports: [RouterModule, NgxTranslateComponent, CustomDecoratorComponent],
  selector: 'app-root',
  template: `
    <p>hello {{title}}</p>
    <app-ngxtranslate></app-ngxtranslate>
    <section>
      <h2>Custom Decorator</h2>
      <app-custom-decorator></app-custom-decorator>
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
