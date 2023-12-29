import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../component/header/header.component';
import { MovieCategoryComponent } from '../../component/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
    movieService = inject(MovieService);
    popularMovies:any[]=[]; 
    topRatedMovies:any[]=[]; 
    upcomingMovies:any[]=[]; 
    nowPlayingMovies:any[]=[]; 

    ngOnInit(){
      this.movieService.getPopularMovies().subscribe((result:any) => {
        console.log(result);
        this.popularMovies = result.results;
      });
      this.movieService.getTopRatedMovies().subscribe((result:any) => {
        console.log(result);
        this.topRatedMovies = result.results;
      });
      this.movieService.getNowPlayingMovies().subscribe((result:any) => {
        console.log(result);
        this.nowPlayingMovies = result.results;
      });
      this.movieService.getUpcomingMovies().subscribe((result:any) => {
        console.log(result);
        this.upcomingMovies = result.results;
      });
    }
}
