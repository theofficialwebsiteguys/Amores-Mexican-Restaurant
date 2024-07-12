import { Component, HostListener, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, HeroComponent, NavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appContainer') appContainer!: ElementRef;

  isHomePage: boolean = false;
  isLandingPage: boolean = false;
  scrolled: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private renderer: Renderer2) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.route.root.firstChild;
      this.isHomePage = currentRoute?.snapshot.data['isHome'] || false;
      this.isLandingPage = currentRoute?.routeConfig?.path === 'landing';

      // Trigger fade-in effect on navigation to the home page
      if (this.isHomePage) {
        this.renderer.addClass(this.appContainer.nativeElement, 'fade-in');
        setTimeout(() => {
          this.renderer.addClass(this.appContainer.nativeElement, 'transitioned');
        }, 10); // Small delay to ensure the class is applied
      } else {
        this.renderer.removeClass(this.appContainer.nativeElement, 'fade-in');
        this.renderer.removeClass(this.appContainer.nativeElement, 'transitioned');
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  ngAfterViewInit() {
    // Ensure the app container starts with the fade-in class if it's the home page
    if (this.isHomePage) {
      this.renderer.addClass(this.appContainer.nativeElement, 'fade-in');
      setTimeout(() => {
        this.renderer.addClass(this.appContainer.nativeElement, 'transitioned');
      }, 10);
    }
  }
}