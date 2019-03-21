import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(
    private http: HttpClient
  ) { }

  all() {
    return this.http.get('https://www.vagalume.com.br/news/index.js');
  }
}
