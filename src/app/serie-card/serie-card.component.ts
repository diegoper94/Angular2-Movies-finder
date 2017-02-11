import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.css']
})
export class SerieCardComponent implements OnInit {
  @Input() serie: Object;
  
  constructor() { }

  ngOnInit() {
  }

}
