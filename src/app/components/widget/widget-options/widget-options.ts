import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { WidgetInterface } from '../../../models/dashboard';
import { DashboardService } from '../../../services/dashboard';

@Component({
  selector: 'app-widget-options',
  imports: [MatButtonModule, MatIcon, MatButtonToggleModule],
  templateUrl: './widget-options.html',
  styleUrl: './widget-options.scss',
})
export class WidgetOptions {
  showOptions = model<boolean>(false);
  data = input.required<WidgetInterface>();
  store = inject(DashboardService);
}
