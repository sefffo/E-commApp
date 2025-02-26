import { Component, Input } from '@angular/core';
import { Ibrands } from '../../interfaces/brands';
import { ICat } from '../../interfaces/cat';

@Component({
  selector: 'app-cat-cards',
  imports: [],
  templateUrl: './cat-cards.component.html',
  styleUrl: './cat-cards.component.scss'
})
export class CatCardsComponent {
  @Input() cardCart!:ICat
}
