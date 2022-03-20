import { Component } from '@angular/core';
import 'rxjs/Rx';
import { delay } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
        <div class="col-xs-8 col-xs-offset-2">
            <h4>{{ asyncTitle  | async }}</h4>
            <input type="text" class="form-control" [(ngModel)]="searchCar">
            <button class="btn btn-primary" (click)="addCar()">Add</button>
            <hr>
            <ul class="list-group">
                <li class="list-group-item"
                *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index">
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

    // doesn't work!
    // asyncTitle = Observable.of('async text').delay(300);
    
    

    addCar() {
        this.cars.push({name: 'New car', description: 'WFM'});
    }
}
