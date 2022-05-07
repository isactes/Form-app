import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Form-app';

  public "cards":Array<any> = [];
  ngOnInit(): void {
    this.cards = [
      {
        title:'videobox1',
        subtitle:'subbox1'
      },
      {
        title:'videobox2',
        subtitle:'subbox2'
      },
      {
        title:'videobox3',
        subtitle:'subbox3'
      }
    ];
  }
}
