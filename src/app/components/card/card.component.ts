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
    if (empresa === 1 || empresa === 2 || empresa === 3 || empresa === 4 || empresa === 15) {
      return '../../../assets/images/metrosp.png';
    } else if (empresa === 5 || empresa === 8 || empresa === 9 ) {
      return '../../../assets/images/viamobilidade.png';
    } else {
      return '../../../assets/images/cptm.png';
    }
  }
}
