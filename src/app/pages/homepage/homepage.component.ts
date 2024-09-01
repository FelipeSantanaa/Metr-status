import { Component } from '@angular/core';
import { MetroService } from '../../services/metro.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(
    private metroService: MetroService
  ) { }

  ngOnInit(){
    this.metroService.getMetroStatus().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
