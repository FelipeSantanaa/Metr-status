import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { metroResponse } from '../../types/metro-response';
import { colorsTranslate } from '../../types/colors-translate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() data!: metroResponse;
  @Input() loading!: boolean;

  bgColor!: string;

  constructor() {}

  ngOnInit() {
    this.getLineColor();
    this.getCompanyIcon();
    console.log(this.getCompanyIcon())
  }

  getLineColor() {
    const nome = this.data.nome.split(' - ');
    const colorName = nome[1].toLowerCase();
    this.bgColor = colorsTranslate.get(colorName) || '';
  }

  getCompanyIcon() {
    const empresa = this.data.empresa;
    switch (empresa) {
      case 'CPTM':
        return '../../../assets/images/cptm.png';
      case 'ViaMobilidade':
        return '../../../assets/images/viamobilidade.png';
      default:
        return '../../../assets/images/metrosp.png';
    }
  }
}
