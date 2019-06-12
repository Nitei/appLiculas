import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  pelisPopulares: any;


  constructor(private service: PeliculasService) {
    this.service.getPopulares().subscribe((x: any) => {
      this.pelisPopulares = x;
    })
   }

  ngOnInit() {
  }

  searchMovie(event: any): void {

    console.log(event);
    this.service.searchMovie(event.target.value).subscribe((x: any) => {
      this.pelisPopulares = x;
    })
    event.parentNode.apendChild('<div>')

  }

}


