import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  randomArr: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    console.log("Adding new random number...");
    this.randomArr.push(Math.random());
  }

}
