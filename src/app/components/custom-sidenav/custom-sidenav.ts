import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
};
@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
})
export class CustomSidenav {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comments',
      label: 'Comments',
      route: 'comments',
    },
  ]);
}
