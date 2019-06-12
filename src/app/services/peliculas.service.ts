import {  Injectable  } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  map  } from 'rxjs/operators';

@Injectable({ 
  providedIn: 'root'
 })
export class PeliculasService {
  claveApi = '?api_key=d6babd9cb67613c4d79cf2520370500a';
  url = 'https://api.themoviedb.org/3';

  constructor(public http: HttpClient) {
   }


  getPopulares(): Observable<any> {
    return this.http.get(`${ this.url }/discover/movie${ this.claveApi }&language=es&sort_by=popularity.desc`)
      .pipe(map((x: any) => {
        console.log(x);
        return x.results.sort(x.results.release_date)
      }))
   }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${ this.url }/movie/${ id }${ this.claveApi }&language=es`)
   }

  searchMovie(query: string): Observable<any> {
    return this.http.get(`${ this.url }/search/movie${ this.claveApi }&language=es&query=${ query }`)
      .pipe(map((x: any) => {
            console.log(x);
            return x.results.sort(x.results.release_date)
          }))
   }


 }


