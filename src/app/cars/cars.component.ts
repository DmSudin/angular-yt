import { Component } from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
    cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bentley'];

    carName = '';
    addCarStatus = false;
    
    constructor() {
    }

    addCar() {
        this.addCarStatus = true;
        this.cars.push(this.carName);
        this.carName = '';
    }

    setBigCarText(car: string) {
        return car.length > 4;
    }


    
}
