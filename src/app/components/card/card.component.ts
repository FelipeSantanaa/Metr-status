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
import { linesTranslate } from '../../types/lines-translate';

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
  lineName!: string;

  constructor() {}

  ngOnInit() {
    this.getLineName();
    this.getLineColor();
    this.getCompanyIcon();
  }

  getLineColor() {
    const nome = this.lineName;
    const colorName = nome.toLowerCase();
    this.bgColor = colorsTranslate.get(colorName) || '';
  }

  getLineName() {
    const codigo = this.data.codigo;
    this.lineName = linesTranslate.get(codigo.toString()) || '';
  }

  getCompanyIcon() {
    const empresa = this.data.codigo;
    const iconMap = {
      metrosp: [1, 2, 3, 4, 15],
      viamobilidade: [5, 8, 9],
    };

    if (iconMap.metrosp.includes(empresa)) {
      return '../../../assets/images/metrosp.png';
    } else if (iconMap.viamobilidade.includes(empresa)) {
      return '../../../assets/images/viamobilidade.png';
    } else {
      return '../../../assets/images/cptm.png';
    }
  }
}
