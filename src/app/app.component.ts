import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';
import { ServicioFavoritosService } from './servicio-favoritos.service';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Form-app';

  public "listdeVideos":any = [];

  constructor(private RestService:RestService){

  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('https://api-uat.kushkipagos.com');
    
  }
}
