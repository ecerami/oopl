import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() image?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() footer?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
