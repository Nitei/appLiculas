import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  pelisPopulares: object;

  constructor(private service: PeliculasService) {
    this.service.getPopulares().subscribe(x => {
      this.pelisPopulares = x.results
      console.log(this.pelisPopulares);
    })
   }

  ngOnInit() {
  }

}


