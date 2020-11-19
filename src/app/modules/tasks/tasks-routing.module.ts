import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Componentes para el ruteo del modulo de tasks */
import { MakeTasksComponent } from './components/make-tasks/make-tasks.component';
import { ModifyTaskComponent } from './components/modify-task/modify-task.component';
import { TasksComponent } from './components/tasks/tasks.component';

//Rutas del modulo task
const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'makeTask',
    component: MakeTasksComponent,
  },
  {
    path: 'modifyTask',
    component: ModifyTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
