import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import {HttpModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BackgroundDirective } from './directives/background.directive';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { PowPipe } from './pow.pipe';
import { CarFilterPipe } from './car-filter.pipe';

import { CarsService } from './cars.service';
import { ConsoleService } from './console.service';


@NgModule({
    declarations: [
        AppComponent,
        PowPipe,
        CarFilterPipe,

    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [ConsoleService],
    bootstrap: [AppComponent]
})
export class AppModule { }
