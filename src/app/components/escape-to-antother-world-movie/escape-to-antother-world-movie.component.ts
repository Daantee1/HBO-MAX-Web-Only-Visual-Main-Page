import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-escape-to-antother-world-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escape-to-antother-world-movie.component.html',
  styleUrl: './escape-to-antother-world-movie.component.css'
})
export class EscapeToAntotherWorldMovieComponent {
  currentPosition = 0;
  slideDirection: string = '';
  isHovering: boolean = false;
  isLeftArrowVisible = false;
  moviesOutstanding = [
    {id: 1, path: './assets/escapeToAnotherWorld/godzilla.jpeg'},
    {id: 2, path: './assets/escapeToAnotherWorld/ex.jpg'},
    {id: 3, path: './assets/escapeToAnotherWorld/ad astra.jpg'},
    {id: 4, path: './assets/escapeToAnotherWorld/black.jpg'},
    {id: 5, path: './assets/escapeToAnotherWorld/inter.jpg'},
    {id: 6, path: './assets/escapeToAnotherWorld/lotr.jpg'},
    {id: 7, path: './assets/escapeToAnotherWorld/matrix.jpg'},
    {id: 8, path: './assets/escapeToAnotherWorld/harry.jpg'},
    
  
  ];

  next(){
    const totalMovies = this.moviesOutstanding.length;
    if(this.currentPosition < totalMovies - 6){
      this.currentPosition++;
      this.slideDirection = 'right';
      this.isLeftArrowVisible = true;
  }
}
  previous(){
    if (this.currentPosition > 0) { 
      this.currentPosition--;
      this.slideDirection = 'left';
    }
    if(this.currentPosition === 0){
      this.isLeftArrowVisible = false;
    }
  }
}
