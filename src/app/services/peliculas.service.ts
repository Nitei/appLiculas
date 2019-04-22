import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  claveApi = 'api_key=d6babd9cb67613c4d79cf2520370500a';
  url = 'https://api.themoviedb.org/3';

  constructor(public http: HttpClient) { 
  }


  getPopulares(): Observable<any> {
    return this.http.get(`${this.url}/discover/movie?${this.claveApi}&sort_by=popularity.desc`)
  }

  getMovie(id: number) {
    return this.http.get(`${this.url}/movie/${id}?${this.claveApi}`)
  }
}


