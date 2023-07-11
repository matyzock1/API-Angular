import { Component , OnInit} from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-drabon-ball',
  templateUrl: './drabon-ball.component.html',
  styleUrls: ['./drabon-ball.component.css']
})
export class DrabonBallComponent implements OnInit{

  data: any[] = [];

  constructor(private ApiService:ApiService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.ApiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }
}
