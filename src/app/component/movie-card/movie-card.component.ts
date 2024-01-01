import { Component, Input } from '@angular/core';
import { movie } from '../../types/movie';
import { tmdbConfig } from '../../constants/config';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
    @Input() movie! :movie;
    tmdbConfig=tmdbConfig;
}
