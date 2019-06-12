import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  pelisPopulares: any[]

  constructor(private service: PeliculasService) {
    this.service.searchMovie('avengers').subscribe((x: any) => {
      this.pelisPopulares = x.results
      console.log(this.pelisPopulares);
    })
   }
  ngOnInit() {
  }

}
