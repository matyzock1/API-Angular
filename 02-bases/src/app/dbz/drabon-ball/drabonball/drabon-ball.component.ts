import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-drabon-ball',
  templateUrl: './drabon-ball.component.html',
  styleUrls: ['./drabon-ball.component.css']
})
export class DrabonBallComponent implements OnInit {

  data: any[] = [];
  titulo: String = 'RICK AND MORTY | API';
  subTitulo: String = 'Episodios en los que aparece:';
  numeroPersonaje: number = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  buscarPersonaje() {
    this.apiService.getDataByCharacterNumber(this.numeroPersonaje).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  getStatusColor(status: string): string {
    switch(status){
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      default:
        return 'black';
    }
  }
}
