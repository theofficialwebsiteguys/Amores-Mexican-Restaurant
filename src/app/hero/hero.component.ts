import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  isShrunk: boolean = false;

  reviews = [
    { author: 'Leslie', stars: '★★★★★', text: 'Partner and I were vacationing in the area and planned to stop by...' },
    { author: 'Ama Dominguez', stars: '★★★★★', text: 'The food was delicious 😋, our waitress was awesome very sweet...' },
    { author: 'Justin D', stars: '★★★★★', text: 'Parents — Amores is a great option for bringing your kids out...' },
    { author: 'Justin D', stars: '★★★★★', text: 'Parents — Amores is a great option for bringing your kids out...' },
    // Add more reviews as needed
  ];

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


  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isShrunk = !(event.url === '/' || event.url === '/home');
      }
    });

    // Set initial background position
    const heroContainer = document.querySelector('.hero') as HTMLElement;
    if (heroContainer) {
      const initialPosition = window.pageYOffset * -0.3;
      this.renderer.setStyle(heroContainer, 'background-position', `center ${initialPosition}px`);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.pageYOffset;
    const heroContainer = document.querySelector('.hero') as HTMLElement;

    if (heroContainer) {
      const newPosition = scrollPosition * -0.3;
      this.renderer.setStyle(heroContainer, 'background-position', `center ${newPosition}px`);
      console.log(`Scroll Position: ${scrollPosition}, New Position: ${newPosition}`);
    } else {
      console.log('Hero Container not found');
    }
  }

  onCanPlay(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.play();
  }

  onLoadedMetadata(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.muted = true;
  }
}
