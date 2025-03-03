import { Component } from "@angular/core";
import { CustomDecorator, AbstractWithCustomDecorator } from "./custom-decorator";

@CustomDecorator({ title: 'CustomTitle' })
@Component({
    selector: 'app-custom-decorator',
    template: `<strong>{{message}}</strong>`,
})
export class CustomDecoratorComponent extends AbstractWithCustomDecorator {
}