import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="col-xs-8 col-xs-offset-2">
            <h5>{{name}}</h5>
            <hr>
            <h5>{{pi | number}}</h5>
            <hr>
            <h5>{{money | currency: 'RUB':true}}</h5>
            <hr>
            <h5>{{date | date:'fullDate'}}</h5>
            <h5>{{date | date:'shortDate'}}</h5>
            <h5>{{date | date:'shortTime'}}</h5>

            <hr>
            <h5>{{amount }}</h5>
            <h5>{{amount | percent}}</h5>
            <hr>

            <h5>{{object}}</h5>
            <h5><pre>{{object | json}}</pre></h5>

        </div>
    `
})
export class AppComponent {
    name = 'WebForMyself';
    pi = Math.PI;
    money = 350;
    date = new Date();
    amount = 0.45;
    object = {
        foo: 'bar',
        baz: 'qux',
        nested: {
            xyz: 3,
            numbers: [1, 2, 3],
        },
    };
}
