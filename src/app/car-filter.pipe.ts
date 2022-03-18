import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'carFilter'
})

export class CarFilterPipe implements PipeTransform {
    transform(carList, searchCar: string, field?: string) {
        if (!carList || !searchCar) return carList;


        if (field) {
            return carList.filter(car => car[field].toLowerCase().includes(searchCar.toLowerCase()));

        }
    }
}
