import { EventEmitter, Component, OnInit, Input } from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() "dataEntrante":any;
  public "image":string;

  constructor(private servicioFavorito: ServicioFavoritosService) { }

  ngOnInit(): void {
    this.image = 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg';
    //console.log('entrando data', this.dataEntrante);
  }

  agrearFavorito(){
    //console.log(this.dataEntrante);
    this.servicioFavorito.disparadorDeFavoritos.emit({
      data:this.dataEntrante
    });
  }

}
