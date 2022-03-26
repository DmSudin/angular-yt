import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {;
   
    answers = [
        {type: 'yes', text: 'Da'},
        {type: 'no', text: 'Net'},
    ];

    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(''),
            pass: new FormControl(''),
            country: new FormControl('ru'),
            answer: new FormControl('no'),
        });
    }

    onSubmit() {
        console.error('submitted!', this.form);
    }
}
