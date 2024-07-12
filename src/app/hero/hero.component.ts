import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  isShrunk: boolean = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isShrunk = !(event.url === '/landing' || event.url === '/home');
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
