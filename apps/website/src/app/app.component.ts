import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `<p>hello {{title}}</p>`,
  styles: [``],
})
export class AppComponent implements AfterViewInit {
  title = 'website';
  test = signal('')

  ngAfterViewInit(): void {
    this.test.set('value')
  }
}
