import { 
    Component, 
    EventEmitter, 
    Output
} from '@angular/core';


@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent{
    carName = '';
    carYear = 2017;

    @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();    
    
    addCar() {
        this.carEmitter.emit({
            name: this.carName,
            year: this.carYear
        });
        this.carName = '';
        this.carYear = 2017;
    }    
}
