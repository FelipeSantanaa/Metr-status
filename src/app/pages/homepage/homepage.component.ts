import { Component } from '@angular/core';
import { MetroService } from '../../services/metro.service';
import { finalize, Subscription } from 'rxjs';
import { metroResponse } from '../../types/metro-response';
import { CommonModule, JsonPipe } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardComponent, JsonPipe, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  metroResponse: metroResponse[] = [];

  isDarkTheme = true;

  loading: boolean = false;

  private subscription = new Subscription();

  constructor(private metroService: MetroService) {}

  ngOnInit() {
    this.getStatusMetro();
  }

  toggleDarkTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }
 
  getStatusMetro() {
    this.loading = true; 
    this.subscription.add(
      this.metroService.getMetroStatus().pipe(
        finalize(() => {
          this.loading = false;
        })
      ).subscribe({
        next: (response) => {
          this.metroResponse = response;
        },
        error: (error) => {
          console.log(error);
          
        },
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
