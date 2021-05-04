import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actores';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }
  modelo: actorDTO = { nombre: 'Andres', fechaNacimiento: new Date(), foto: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg' }
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {

    })
  }
  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }
}
