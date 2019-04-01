import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalheService {

  constructor(
    private http: HttpClient
  ) { }

  getDetails(movie_id) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movie_id + '?language=pt-BR&api_key=8789b846c37641933a9e18e03eb25e2e')
  }

  getActors(movie_id) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?language=pt-BR&api_key=8789b846c37641933a9e18e03eb25e2e')
  }

}

