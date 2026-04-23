import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component';

@NgModule({
  declarations: [SerieListComponent],
  imports: [CommonModule],
  exports: [SerieListComponent]
})
export class SerieModule {}
