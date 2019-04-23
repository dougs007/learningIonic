import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovie() {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=8789b846c37641933a9e18e03eb25e2e')
  }

  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=8789b846c37641933a9e18e03eb25e2e')
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=8789b846c37641933a9e18e03eb25e2e')
  }

}
