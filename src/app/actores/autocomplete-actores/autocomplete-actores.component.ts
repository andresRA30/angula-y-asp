import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();

  actores =
    [
      { nombre: 'Tom Hanks', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg' },
      { nombre: 'Brad Pitt', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg' },
      { nombre: 'Jennifer Aniston', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg' }
    ]

  actoresOriginal = this.actores;
  actoresSeleccionados = [];
  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1)
    })
  }
  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value)
    this.control.patchValue('')
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }
  eliminar(actor) {
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre == actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }
  finalizaArrastre(event: CdkDragDrop<any[]>) {
    const indicePrevio = this.actoresSeleccionados.findIndex(
      actor => actor === event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }
}
