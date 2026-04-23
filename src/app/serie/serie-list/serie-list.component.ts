import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css',
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];
  selectedSerie: Serie | null = null;
  seasonsAverage: number = 0;

  constructor(private serieService: SerieService) {}

  getSeriesList(): void {
    this.serieService.getSeries().subscribe((data) => {
      this.series = data;
      this.calculateSeasonsAverage();
    });
  }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe({
      next: (data) => {
        console.log('Series recibidas:', data);
        this.series = data;
        this.calculateSeasonsAverage();
      },
      error: (err) => {
        console.error('Error al obtener series:', err);
      }
    });
  }

  calculateSeasonsAverage(): void {
    if (this.series.length > 0) {
      const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.seasonsAverage = totalSeasons / this.series.length;
    } else {
      this.seasonsAverage = 0;
    }
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
