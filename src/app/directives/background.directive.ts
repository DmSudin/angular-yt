import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

    @Input('appBackground') hoverColor: string = 'yellow';
    @Input() defaultColor: string =  'blue';

    @HostBinding('style.backgroundColor') background: string;

    constructor() {};

    ngOnInit() {
        this.background = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter() {
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        this.background = this.defaultColor;
    }

}
