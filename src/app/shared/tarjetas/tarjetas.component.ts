import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.sass']
})
export class TarjetasComponent {
  @Input() items: any[] = [];

  constructor() { }

}
