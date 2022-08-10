import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import data$ from 'src/api/api';
import { __values } from 'tslib';
import { Cat } from 'types';
import { loadCats } from './store/actions/cats.actions';
import { getCatsList } from './store/selectors/cats.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular cat list';
  constructor(private store: Store<{ cats: Cat[] }>) {
  }

  ngOnInit(): void {
    data$.subscribe({
      next: (result: Cat[]) => this.store.dispatch(loadCats({ cats: result })),
    });
  }
}
