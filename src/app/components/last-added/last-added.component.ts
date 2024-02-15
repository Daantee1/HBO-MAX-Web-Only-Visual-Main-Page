import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-last-added',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-added.component.html',
  styleUrl: './last-added.component.css'
})
export class LastAddedComponent {
  currentPosition = 0;
  slideDirection: string = '';
  isHovering: boolean = false;
  isLeftArrowVisible = false;
  moviesOutstanding = [
    {id: 1, path: './assets/lastAdded/ninja kamui.jpg'},
    {id: 2, path: './assets/lastAdded/azyl.jpeg'},
    {id: 3, path: './assets/lastAdded/daredevil.jpg'},
    {id: 4, path: './assets/lastAdded/zjawa.jpg'},
    {id: 5, path: './assets/lastAdded/dune.jpg'},
    {id: 6, path: './assets/lastAdded/the last of us.jpg'},
    {id: 7, path: './assets/lastAdded/pirates.jpg'},
    {id: 8, path: './assets/lastAdded/maze.jpg'},
    {id: 9, path: './assets/lastAdded/scar.jpg'},
  
  ];

  next(){
    const totalMovies = this.moviesOutstanding.length;
    if(this.currentPosition < totalMovies - 4){
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
