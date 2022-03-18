import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
        <div class="col-xs-8 col-xs-offset-2">
            <input type="text" class="form-control" [(ngModel)]="searchCar">
            <hr>
            <ul class="list-group">
                <li class="list-group-item"
                *ngFor="let car of cars | carFilter:searchCar:'description'; let i = index">
                <b>{{ i+1 }}</b> {{car.name}}
            </li>
            </ul>
        </div>
    `
})
export class AppComponent {
    searchCar: string;
    cars=[
        {name: 'Ford', description: 'WFM 1'},
        {name: 'Mazda', description: 'WFM 2'},
        {name: 'Bentley', description: 'WFM 3'},
        {name: 'Audi', description: 'WFM 4'},
        {name: 'Mercedes', description: 'WFM 5'},
        {name: 'BMW', description: 'WFM 6'},
    ];
}
