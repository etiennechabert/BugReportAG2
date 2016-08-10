import { Component } from '@angular/core';
import {BugComponent} from "./bug.component";
@Component({
    selector: 'my-app',
    template: '<bug [value]="value"></bug>',
    // directives: [BugComponent]
})
export class AppComponent {
    value: string = "42";
}
