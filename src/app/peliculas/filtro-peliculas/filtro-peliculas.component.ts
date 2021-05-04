import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private location: Location,
    private activatedRoute: ActivatedRoute) { }
  form!: FormGroup;
  generos = [
    { id: 1, nombre: 'Comedia' },
    { id: 2, nombre: 'Accion' },
    { id: 3, nombre: 'Suspenso' },
  ];
  peliculas = [
    {
      titulo: 'Spider-Man:Far From Home', enCines: false,
      proximosEstrenos: true, generos: [1, 2], poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'

    },
    {
      titulo: 'Batman:El caballero de la noche', enCines: true,
      proximosEstrenos: false, generos: [3], poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'

    },
    {
      titulo: 'Back to the future', enCines: false,
      proximosEstrenos: false, generos: [2], poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'

    },
  ]
  peliculasOriginal = this.peliculas;
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);
    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnURL();
      })
  }
  private leerValoresURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any = {};
      if (params.titulo) {
        objeto.titulo = params.titulo;
      }
      if (params.generoId) {
        objeto.generoId = Number(params.generoId);
      }
      if (params.proximosEstrenos) {
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if (params.enCines) {
        objeto.enCines = params.enCines;
      }
      this.form.patchValue(objeto);
    })
  }
  private escribirParametrosBusquedaEnURL() {
    var queryString = [];
    var valoresFormulario = this.form.value;
    if (valoresFormulario.titulo) {
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }
    if (valoresFormulario.generoId != '0') {
      queryString.push(`generoId=${valoresFormulario.generoId}`);

    }

    if (valoresFormulario.proximosEstrenos) {
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);

    }
    if (valoresFormulario.enCines) {
      queryString.push(`enCines=${valoresFormulario.enCines}`);

    }
    this.location.replaceState('/pelicula/buscar', queryString.join('&'));

  }
  buscarPeliculas(valores: any) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);

    }
    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);

    }
    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);

    }
  }
  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }
}
