import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  private URI = 'https://api.themoviedb.org/3';
  private KEY = '4581882ce738bbdeafb130c633d39bab';
  constructor(private htpp: HttpClient) {}

  getMovieById() {
    return this.htpp
      .get(`${this.URI}/find/{514847}?api_key=${this.KEY}&language=en-US&external_source=imdb_id`);
  }
}
