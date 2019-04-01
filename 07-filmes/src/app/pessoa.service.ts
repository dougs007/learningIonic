import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  constructor(
    private http: HttpClient
  ) { }

  getDetails(person_id) {
    return this.http.get('https://api.themoviedb.org/3/person/' + person_id + '?language=pt-BR&api_key=8789b846c37641933a9e18e03eb25e2e')
  }

  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/person/popular?language=pt-BR&api_key=8789b846c37641933a9e18e03eb25e2e')
  }

}
