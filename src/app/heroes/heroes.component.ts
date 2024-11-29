import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UpperCasePipe, NgFor, NgIf} from '@angular/common';
import { HEROES } from '../mock-heroes'; // Убедитесь, что файл mock-heroes экспортирует HEROES
import { Hero } from '../hero'; // Убедитесь, что файл hero содержит класс Hero

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})
export class HeroesComponent {
  heroes = HEROES; // Связываем heroes с данными из mock-heroes
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
