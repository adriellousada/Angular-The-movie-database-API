import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from './movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor( private detailService : MovieDetailsService) { }

  ngOnInit(): void {
    this.detailService.getMovieById().subscribe(data => {
      console.log(data);
    });
  }

}
