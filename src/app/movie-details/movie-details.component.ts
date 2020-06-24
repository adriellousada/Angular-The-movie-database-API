import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from './movie-details.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  filmeDetalhado;
  constructor( private detailService: MovieDetailsService, private route: ActivatedRoute, private _location: Location) { }
  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.detailService.getMovieById(id).subscribe(data => {
      console.log(data);
      this.filmeDetalhado = data;
    });
  }

}
