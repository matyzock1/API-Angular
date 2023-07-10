import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`
  }

  //throw 'Metodo no implementado'
  changeHero():void{
    this.name = 'SpiderMan';
  }
  changeAge():void{
    this.age = 25;
  }
  resetForm():void{
    this.name = 'Iron Man';
    this.age = 45;
  }
}
