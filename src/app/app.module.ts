import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {HttpModule} from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PowPipe } from './pow.pipe';
import { CarFilterPipe } from './car-filter.pipe';
import { CarsService } from './cars.service';



@NgModule({
    declarations: [
        AppComponent,
        PowPipe,
        CarFilterPipe,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [CarsService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private httpClient: HttpClientModule) {

    }
 }
