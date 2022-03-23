import { Component } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss'],
})
export class CarAddComponent {

  constructor(private service: CarsService) {}

  
  carName = '';

  addCar() {
    this.service.addCar(this.carName);
    this.carName = '';
  }

}
