import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
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
