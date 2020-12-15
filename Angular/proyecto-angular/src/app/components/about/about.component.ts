import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  constructor() {
    this.title = 'Elvis Garcia';
    this.subtitle = 'Desarrollador web y Student';
    this.email = 'elvis132027@gmail.com';
  }

  ngOnInit(): void {
  }

}
