import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-outstanding-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outstanding-movies.component.html',
  styleUrl: './outstanding-movies.component.css'
})
export class OutstandingMoviesComponent {

  currentPosition = 0;
  slideDirection: string = '';
  isHovering: boolean = false;
  isLeftArrowVisible = false;
  moviesOutstanding = [
    {id: 1, path: './assets/outstanding/star wars 5.jpg'},
    {id: 2, path: '/assets/outstanding/godfather.jpg'},
    {id: 3, path: './assets/outstanding/indiana jones ark.jpg'},
    {id: 4, path: './assets/outstanding/harry potter prisoner.jpg'},
    {id: 5, path: './assets/outstanding/terminator.jpg'},
    {id: 6, path: './assets/outstanding/rambo.jpg'},
    {id: 7, path: './assets/outstanding/shining.jpg'},
    {id: 8, path: './assets/outstanding/mad max.jpg'},
    {id: 9, path: './assets/outstanding/inception.jpg'},
    {id: 9, path: './assets/outstanding/shutter island.jpg'},
    {id: 10, path: './assets/outstanding/lighthouse.jpg'},
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
