import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';


const routes: Routes = ([
  { path: '', component: CarouselComponent },
  { path: 'details', component: MovieDetailsComponent }
]);

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
