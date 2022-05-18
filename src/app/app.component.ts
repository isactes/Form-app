import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Form-app';

  public "listdeVideos":Array<any> = [];
  ngOnInit(): void {
    this.listdeVideos = [
      {
        title:'videobox1',
        subtitle:'subbox1',
        img:'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'
      },
      {
        title:'videobox2',
        subtitle:'subbox2',
        img:'https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_960_720.jpg'
      },
      {
        title:'videobox3',
        subtitle:'subbox3',
        img:'https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186_960_720.jpg'
      },
      {
        title:'videobox4',
        subtitle:'subbox4',
        img:'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png'
      }
    ];
  }
}
