import { computed, Injectable, signal } from '@angular/core';
import { WidgetInterface } from '../models/dashboard';
import { Subscribers } from '../pages/dashboard/widgets/subscribers/subscribers';
import { Views } from '../pages/dashboard/widgets/views/views';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  widgets = signal<WidgetInterface[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: Subscribers,
    },
    {
      id: 2,
      label: 'Views',
      content: Views,
    },
  ]);
  addedWidgets = signal<WidgetInterface[]>([]);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });
}
