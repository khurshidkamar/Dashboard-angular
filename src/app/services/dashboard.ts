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
      rows: 2,
      columns: 2,
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

  addWidget(w: WidgetInterface) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }]);
  }

  updateWidget(id: number, widget: Partial<WidgetInterface>) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      this.addedWidgets.set(newWidgets);
    }
  }
  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === this.addedWidgets().length - 1) {
      return;
    }
    const newWidgets = [...this.addedWidgets()];

    [newWidgets[index], newWidgets[index + 1]] = [
      { ...newWidgets[index + 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }
  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === 0) {
      return;
    }
    const newWidgets = [...this.addedWidgets()];

    [newWidgets[index], newWidgets[index - 1]] = [
      { ...newWidgets[index - 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }
}
