import { Injectable, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritosService {
  @Output() disparadorDeFavoritos: EventEmitter = new EventEmitter();
  constructor() { }
}
