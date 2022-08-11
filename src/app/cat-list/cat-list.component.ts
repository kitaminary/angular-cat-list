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

  breeds: Breed[];
  limited$: number = 10;

  myForm= this.FormBuilder.group({
    currentBreed: '',
    currentCount: '',
  })

  public currentBreed: string;
  public currentCount: number;

  constructor(
    private store: Store<{ cats: Cat[]; count: number }>,
    private catServise: CatService,
    public FormBuilder: FormBuilder
  ) {}

  getCatsBreed(event) {
    this.currentBreed = event.value;
  }

  getCount(event) {
    this.currentCount = event.value;
  }

  onSubmit() {
    this.catServise.data(this.currentBreed, this.currentCount).subscribe({
      next: (result: Cat[]) => this.store.dispatch(loadCats({ cats: result })),
    });

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
