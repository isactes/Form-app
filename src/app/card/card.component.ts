import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() "dataEntrante":any;
  public "image":string;
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg';
    console.log('entrando data', this.dataEntrante);
  }

}
