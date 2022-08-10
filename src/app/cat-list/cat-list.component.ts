import { Component, Input, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Cat } from 'types';
import { getCatsList } from '../store/selectors/cats.selectors';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent implements OnInit {
  @Input() cats: any;

  constructor(private store: Store) {
    this.cats =  this.store.select(getCatsList);
  }

  ngOnInit(): void {
    console.log('cats in list', this.cats);
  }
}
