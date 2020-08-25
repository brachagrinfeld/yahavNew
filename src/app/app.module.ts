import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';



import {MatTabsModule} from '@angular/material/tabs';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';





@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgApexchartsModule, BrowserAnimationsModule,MatCardModule,MatStepperModule, MatFormFieldModule,MatInputModule,ReactiveFormsModule,FormsModule, MatTabsModule,MatSliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
