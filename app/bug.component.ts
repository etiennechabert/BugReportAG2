import {Component, Input} from '@angular/core';
@Component({
    selector: 'bug',
    template: '{{value}}'
})
export class BugComponent {
    @Input() value: string;
}