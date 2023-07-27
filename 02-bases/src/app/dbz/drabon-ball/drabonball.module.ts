import { NgModule } from "@angular/core";
import { DrabonBallComponent } from "./drabonball/drabon-ball.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[
    DrabonBallComponent
  ],
  exports:[
    DrabonBallComponent
  ],
  imports:[
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class DragonBallModule{}
