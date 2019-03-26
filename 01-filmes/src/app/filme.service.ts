import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(
    private http: HttpClient
  ) { }

  getMoovie() {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=8789b846c37641933a9e18e03eb25e2e');
  }

  getPopularMoovie() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=8789b846c37641933a9e18e03eb25e2e');
  }
}
