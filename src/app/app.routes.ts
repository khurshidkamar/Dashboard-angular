import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Comments } from './pages/comments/comments';
import { Analytics } from './pages/analytics/analytics';
import { Content } from './pages/content/content';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'comments',
    component: Comments,
  },
  {
    path: 'analytics',
    component: Analytics,
  },
  {
    path: 'content',
    component: Content,
  },
];
