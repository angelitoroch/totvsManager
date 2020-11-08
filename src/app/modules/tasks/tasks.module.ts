import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Modulos personalizados para el task */
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { MakeTasksComponent } from './components/make-tasks/make-tasks.component';
import { ModifyTaskComponent } from './components/modify-task/modify-task.component';

@NgModule({
  declarations: [TasksComponent, MakeTasksComponent, ModifyTaskComponent],
  imports: [CommonModule, TasksRoutingModule],
})
export class TasksModule {}
