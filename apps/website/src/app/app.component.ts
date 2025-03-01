import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTranslateComponent } from "./ngxtranslate.component";

@Component({
  imports: [RouterModule, NgxTranslateComponent],
  selector: 'app-root',
  template: `
    <p>hello {{title}}</p>
    <app-ngxtranslate></app-ngxtranslate>
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
