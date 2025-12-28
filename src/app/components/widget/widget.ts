import { Component, input } from '@angular/core';
import { WidgetInterface } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { ɵEmptyOutletComponent } from '@angular/router';
@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet],
  templateUrl: './widget.html',
  styleUrl: './widget.scss',
})
export class Widget {
  data = input.required<WidgetInterface>();
}
