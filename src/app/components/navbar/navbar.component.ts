import { Component, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualService } from '../../services/visual.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

 menuOpen = false;
 menuOpenSecond = false;
 isScrolled = false;
 isBlur = false;

 constructor(private visualService: VisualService) { 
  visualService.isBlur.subscribe((value) => {
    this.isBlur = value;
    console.log('isBlur', this.isBlur);
  })
 }

 toggleMenu() {
  this.menuOpen = !this.menuOpen;
  this.visualService.isBlur.next(this.menuOpen);
  console.log('menuOpen', this.menuOpen);
}
  toggleMenuSecond(){
    this.menuOpenSecond = !this.menuOpenSecond;
}




  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }
}
