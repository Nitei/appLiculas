import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.sass']
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verPeli(item) {
    this.router.navigate(['pelicula', item]);
  }

}
