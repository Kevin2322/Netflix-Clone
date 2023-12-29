import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../component/header/header.component';
import { MovieCategoryComponent } from '../../component/movie-category/movie-category.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {


}
