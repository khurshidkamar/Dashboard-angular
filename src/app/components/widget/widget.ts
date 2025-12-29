import { Component, input, signal } from '@angular/core';
import { WidgetInterface } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetOptions } from './widget-options/widget-options';
@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet, MatButtonModule, MatIcon, WidgetOptions],
  templateUrl: './widget.html',
  styleUrl: './widget.scss',
  host: {
    '[style.grid-area]': '"span " + (data().rows ?? 1) + "/ span " + (data().columns ?? 1) ',
  },
})
export class Widget {
  data = input.required<WidgetInterface>();

  showOptions = signal(false);
}
