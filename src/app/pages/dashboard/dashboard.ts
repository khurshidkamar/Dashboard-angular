import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { Widget } from '../../components/widget/widget';
import { DashboardService } from '../../services/dashboard';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { wrapGrid } from 'animate-css-grid';
@Component({
  selector: 'app-dashboard',
  imports: [Widget, MatButtonModule, MatIconModule, MatMenuModule],
  providers: [DashboardService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  store = inject(DashboardService);

  dashboard = viewChild.required<ElementRef>('dashboard');

  ngOnInit() {
    wrapGrid(this.dashboard().nativeElement, { duration: 400 });
  }
}
