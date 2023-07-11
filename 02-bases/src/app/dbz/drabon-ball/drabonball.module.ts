import { NgModule } from "@angular/core";
import { DrabonBallComponent } from "./drabonball/drabon-ball.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations:[
    DrabonBallComponent
  ],
  exports:[
    DrabonBallComponent
  ],
  imports:[
    CommonModule,
    HttpClientModule
  ]
})

export class DragonBallModule{}
