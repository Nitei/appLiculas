import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.sass']
})
export class PeliculaComponent implements OnInit {
  peliData: any;

  constructor(private route: ActivatedRoute, private service: PeliculasService) { 
    // console.log(this.route.snapshot.params)
    this.service.getMovie(this.route.snapshot.params['id']).subscribe((data: any) => {
      this.peliData = data;
      console.log(this.peliData);
    })
  }

  ngOnInit() {
  }



}
