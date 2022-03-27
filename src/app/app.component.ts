import { Component } from '@angular/core';
import { CarsService } from './cars.service';
import { HttpResponse } from '@angular/common/http';

interface ICar {
    name: string,
    color: string,
    id: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {;
   cars : ICar[];

   constructor(private carsService: CarsService) {

   }

   loadCars() {
       
 // NOT very correct approach
    //    this.carsService
    //    .getCars()
    //    .subscribe((response: Array<any>) => {
    //        this.cars = response;
    //    });

// THIS ONE IS GOOD
           this.carsService
       .getCars()
       .subscribe((cars: ICar[]) => {
           this.cars = cars
       });
   }
}
