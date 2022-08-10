import { fromFetch } from 'rxjs/fetch';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds?limit=';
const access_key =
  '&api_key=fd3c4694-49f0-492a-ad5c-a0110917bcd3';
let limit = 30;

const data$ = fromFetch(`${BASE_URL}${limit}${access_key}&order=DESC`, {
  selector: (response) => response.json(),
});


export default data$;

