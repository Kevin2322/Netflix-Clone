import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../component/header/header.component';
import { MovieCategoryComponent } from '../../component/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';
import { movie } from '../../types/movie';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
    movieService = inject(MovieService);
    popularMovies:movie[]=[]; 
    topRatedMovies:movie[]=[]; 
    upcomingMovies:movie[]=[]; 
    nowPlayingMovies:movie[]=[]; 
    bannerMovie!:movie;
    tmdbConfig=tmdbConfig;
    public domSanitise=inject(DomSanitizer);

    ngOnInit(){
      this.movieService.getPopularMovies().subscribe((result:any) => {
        console.log(result);
        this.popularMovies = result.results;
        this.bannerMovie=this.popularMovies[0];
        this.movieService.getMovieVideo(this.bannerMovie.id).subscribe((res:any) => {
          console.log(res);
          this.bannerMovie.videoKey=res.results.find((x:any)=>x.site='YouTube').key;
          console.log(this.bannerMovie);
        })
      });
      this.movieService.getTopRatedMovies().subscribe((result:any) => {
        this.topRatedMovies = result.results;
      });
      this.movieService.getNowPlayingMovies().subscribe((result:any) => {
        this.nowPlayingMovies = result.results;
      });
      this.movieService.getUpcomingMovies().subscribe((result:any) => {
        this.upcomingMovies = result.results;
      });
    }
}
