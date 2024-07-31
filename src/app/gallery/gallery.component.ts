import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: { src: string, alt: string }[] = [
    { src: 'assets/food.jpg', alt: 'Delicious Dish 1' },
    { src: 'assets/food2.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/food3.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/food4.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/food5.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/food7.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/food8.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/food9.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/food10.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/drink-image.jpg', alt: 'Restaurant Interior 1' },
    { src: 'assets/drink2.jpg', alt: 'Restaurant Interior 2' },
    { src: 'assets/drink3.jpg', alt: 'Restaurant Interior 2' },
    { src: 'assets/table-food.webp', alt: 'Restaurant Interior 1' },
    { src: 'assets/tables.jpg', alt: 'Restaurant Interior 2' },
    { src: 'assets/food-tg1.jpg', alt: 'Restaurant Interior 2' },
    { src: 'assets/food-tg2.jpg', alt: 'Restaurant Interior 2' },
    { src: 'assets/food-tg3.jpg', alt: 'Restaurant Interior 2' },
    { src: 'assets/dessert.jpg', alt: 'Restaurant Interior 2' },
    // Add more images as needed
  ];
}
