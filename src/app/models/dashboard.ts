import { Type } from '@angular/core';

export interface WidgetInterface {
  id: number;
  label: string;
  content: Type<unknown>;
}
