import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('homeContainer') homeContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Add fade-in class to the home container after view initialization
    setTimeout(() => {
      this.renderer.addClass(this.homeContainer.nativeElement, 'fade-in');
    }, 0);
  }
}
