import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CateringComponent } from './catering/catering.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'catering', component: CateringComponent },
    { path: 'gallery', component: GalleryComponent },
];
