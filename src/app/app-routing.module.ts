import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Componentes personalizados */
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'resume',
    loadChildren: () =>
      import('./modules/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./modules/tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'todolist',
    loadChildren: () =>
      import('./modules/todolist/todolist.module').then(
        (m) => m.TodolistModule
      ),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./modules/calendar/calendar.module').then(
        (m) => m.CalendarModule
      ),
  },
  {
    path: 'count',
    loadChildren: () =>
      import('./modules/count/count.module').then((m) => m.CountModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./modules/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
