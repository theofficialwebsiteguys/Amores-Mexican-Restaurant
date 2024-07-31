import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeroComponent } from '../hero/hero.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('homeContainer') homeContainer!: ElementRef;

  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1, // Display 1 review at a time
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1 // Responsive settings for smaller screens
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };


  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Add fade-in class to the home container after view initialization
    setTimeout(() => {
      this.renderer.addClass(this.homeContainer.nativeElement, 'fade-in');
    }, 0);
  }
}
