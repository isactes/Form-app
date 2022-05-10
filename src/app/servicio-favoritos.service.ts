import { Injectable, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritosService {
  @Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
