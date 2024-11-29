import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  standalone: true,
  styleUrls: ['./hero-detail.component.css'] // Исправлено на styleUrls
})

export class HeroDetailComponent {
  @Input() hero?: Hero;


}
