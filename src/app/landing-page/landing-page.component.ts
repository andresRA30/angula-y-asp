import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  peliculasEnCines: any;
  peliculasProximosEstrenos = [];
  ngOnInit(): void {

    this.peliculasEnCines = [{
      titulo: 'spiderman',
      fechaLanzamiento: new Date(),
      precio: 1400.49,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      titulo: 'superman',
      fechaLanzamiento: new Date('2020-11-14'),
      precio: 1320.23,
      poster: 'https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    ];
  }
}



