import { Component, Input } from '@angular/core';
import { Ibrands } from '../interfaces/brands';

@Component({
  selector: 'app-brand-cards',
  imports: [],
  templateUrl: './brand-cards.component.html',
  styleUrl: './brand-cards.component.scss'
})
export class BrandCardsComponent {

  @Input() CardBrand!:Ibrands;



}
