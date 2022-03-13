import { Component, Input, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  @Input() car: {name: string, year: number};
  @ContentChild('carHeading') carHeading: ElementRef;

  ngAfterViewInit() {
    console.log(this.carHeading);
  }
}
