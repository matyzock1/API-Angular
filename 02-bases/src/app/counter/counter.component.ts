import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  // Maximo 4 lineas para crear otro archivo html
  template:`

    <h2>Counter: {{counter}}</h2>

    <button (click)="increase(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increase(-1)">-1</button>

  `
})

export class CounterComponent {
  public title: string = 'Mi primera app';
  public counter:number = 0;

  increase(value:number):void{
    this.counter += value;
  }
  reset():void{
    this.counter = 0;
  }

}
