import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


const routes: Routes = ([
  { path: '', component: CarouselComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'favoritos', component: FavoritosComponent}
]);

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
