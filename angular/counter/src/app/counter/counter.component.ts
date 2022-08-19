import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  currentCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.currentCounter++;
  }
  subtract() {
    this.currentCounter--;
  }

}
