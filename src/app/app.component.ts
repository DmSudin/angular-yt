import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        input.ng-invalid.ng-touched {
            border: 1px solid red;
        }
    `]
})
export class AppComponent {
    answers = [
        {type: 'yes', text: 'Da'},
        {type: 'no', text: 'Net'},
    ];

    submitForm(form: NgForm) {
        console.error('Submitted!', form);
    }
}
