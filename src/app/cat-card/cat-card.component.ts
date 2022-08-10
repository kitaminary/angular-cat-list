import { Component, Input, OnInit } from '@angular/core';
import { Cat } from 'types';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  @Input() cat: Cat | null = null;



  ngOnInit(): void {
  }

}
