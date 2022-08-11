import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromFetch } from 'rxjs/fetch';
import { getCatsList } from 'src/app/store/selectors/cats.selectors';

@Injectable({ providedIn: 'root' })
export class CatService {
  BASE_URL = 'https://api.thecatapi.com/v1/images/search?limit=';
  access_key = 'api_key=9530a68c-2820-4f12-9e02-dcfa41c0990e';

  constructor(private store: Store<{ count: number }>) {}

  data(breed: string, limit: number) {
    return fromFetch(`${this.BASE_URL}${limit}&breed_ids=${breed}&${this.access_key}`, {
      selector: (response) => response.json(),
    });
  }

  filterData(limit: string) {
    return fromFetch(`${this.BASE_URL}${limit}&${this.access_key}`, {
      selector: (response) => response.json(),
    });
  }

  getBreeds() {
    return fromFetch(`https://api.thecatapi.com/v1/breeds?${this.access_key}`, {
      selector: (response) => response.json(),
    });
  }
}
export default CatService;
