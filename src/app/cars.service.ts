import { Injectable } from "@angular/core";
import { ConsoleService } from "./console.service";

@Injectable()
export class CarsService {

    constructor(private consoleService: ConsoleService) {}
    
    cars = [
        {name: 'Ford', isSold: false},
        {name: 'Mazda', isSold: true},
        {name: 'Mercedes', isSold: false},        
    ];

    addCar(name: string) {
        this.cars.push({name, isSold: false});
        this.consoleService.log(`Car ${name} has been added`);
    }

}