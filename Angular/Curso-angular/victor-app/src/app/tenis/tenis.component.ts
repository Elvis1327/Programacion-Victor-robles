import { Component, OnInit } from '@angular/core';
import { Tenis1 } from '../models/tenis';

@Component ({
  selector: 'tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.css']
})

export class TenisComponent implements OnInit{
  public title: string = "Tenis";
  public tenis1: Array<Tenis1>;




  constructor(){

    this.tenis1 = [
      new Tenis1("Jordan 1", 300, "Negras Con Blanco", "Jordan", false),
      new Tenis1("Reebook Classic", 30, "Blanco", "Reebook", true),
      new Tenis1("Reebook Spartan", 180, "Gris", "Rebook", false),
      new Tenis1("Nike Runners", 60, "Negras", "Nike", true),
      new Tenis1("Adidas Sport", 180, "Gris", "Adidas", false)
    ];
  }

  ngOnInit(){
    console.log(this.tenis1);

  }





  }





