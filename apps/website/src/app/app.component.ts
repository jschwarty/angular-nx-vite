import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `<p>hello {{title}}</p>`,
  styles: [``],
})
export class AppComponent {
  title = 'website';
}
