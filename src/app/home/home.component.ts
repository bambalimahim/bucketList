import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   itemCount: number;  
  valueInput: string = "add Item";
  myTxt: string = "My first goal";
  goals = [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.myTxt);
    this.myTxt = "";
    this.itemCount = this.goals.length;
  }

  removeItem(i){
    this.goals.splice(i, 1);
    this.itemCount --;
  }

}
