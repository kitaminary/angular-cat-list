import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import CatService from 'src/api/api';
import { Breed, Cat } from 'types';
import { loadCats } from '../store/actions/cats.actions';
import { getCatsList } from '../store/selectors/cats.selectors';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent implements OnInit {
  cats$ = this.store.select(getCatsList);
  loader: boolean;

  breeds: Breed[];
  myForm: FormGroup = new FormGroup({
    currentBreed: new FormControl('all'),
    currentCount: new FormControl(10),
  });

  public currentBreed: string = 'all';

  public currentCount: number = 10;

  constructor(
    private store: Store<{ cats: Cat[]; count: number }>,
    private catServise: CatService
  ) {}

  getCatsBreed(event) {
    this.currentBreed = event.value;
  }

  getCount(event) {
    this.currentCount = event.value;
  }

  onSubmit() {
    console.log(this.cats$);
    if (this.currentBreed === 'all') {
      this.catServise.filterData(`${this.currentCount}`).subscribe({
        next: (result: Cat[]) =>
          this.store.dispatch(loadCats({ cats: result })),
      });
    }

    this.catServise.data(this.currentBreed, this.currentCount).subscribe({
      next: (result: Cat[]) => this.store.dispatch(loadCats({ cats: result })),
    });

    this.currentBreed = 'all'
    this.currentCount = 1;
    this.myForm.reset();
  }

  ngOnInit(): void {
    this.catServise.filterData('10').subscribe({
      next: (result: Cat[]) => this.store.dispatch(loadCats({ cats: result })),
    });
    this.catServise.getBreeds().subscribe({
      next: (result: Breed[]) => (this.breeds = result),
    });
  }
}
