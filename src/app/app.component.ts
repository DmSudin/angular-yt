import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="col-xs-8 col-xs-offset-2">
            <h5>{{num}}</h5>
            <h5>{{num | appPow:3:'\='}}</h5>


        </div>
    `
})
export class AppComponent {
    num = 2;
}
