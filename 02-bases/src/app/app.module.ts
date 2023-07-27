import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Modulos
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DragonBallModule } from './dbz/drabon-ball/drabonball.module';

//Routing y App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DragonBallModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
