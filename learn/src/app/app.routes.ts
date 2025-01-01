import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { ApiComponent } from './components/api/api.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/user/create/create-user/create-user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'admin',
    component: AdminComponent,
  },

  {
    path: 'user',

    children: [
      {
        path: '',
        component: UserComponent,
      },

      {
        path: 'create',
        component: CreateUserComponent,
      },
    ],
  },

  {
    path: 'api',
    component: ApiComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
