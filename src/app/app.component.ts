import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',

})
export class AppComponent {
    @ViewChild('form') form: NgForm;
    answers = [
        {type: 'yes', text: 'Da'},
        {type: 'no', text: 'Net'},
    ];
    defaultAnswer = 'no';
    defaultCountry = 'ru';
    formData = {};
    isSubmitted = false;

    addRandEmail() {
        const randEmail = 'wfm@gmail.com';
        // this.form.setValue({
        //     user: {
        //         pass: '',
        //         email: randEmail
        //     },
        //     country: '',
        //     answer: '',
        // });
        this.form.form.patchValue({
            user: {email: randEmail}
        })
    }

    submitForm() {
        this.isSubmitted = true;
        this.formData = this.form.value;
        this.form.reset();
        console.error('Submitted!', this.form);
    }
}
