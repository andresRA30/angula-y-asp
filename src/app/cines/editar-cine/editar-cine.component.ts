import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }
  modelo: cineDTO = { nombre: "Multicine", latitud: 10.579940735725128, longitud: -85.3979492560029 };
  ngOnInit(): void {
  }
  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }
}
