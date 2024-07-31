import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgxImageZoomModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuFrontImageUrl = 'assets/amores_menu.avif'; // Replace with your actual image URL
  menuBackImageUrl = 'assets/amores-menu2.jpg'; // Replace with your actual image URL
}
