import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Modulos personalizados para el task */
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { MakeTasksComponent } from './components/make-tasks/make-tasks.component';
import { ModifyTaskComponent } from './components/modify-task/modify-task.component';
import { PoAvatarModule } from '@po-ui/ng-components';
import { PoWidgetModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { PoModalModule } from '@po-ui/ng-components';
import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
import { PoDynamicModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    TasksComponent,
    MakeTasksComponent,
    ModifyTaskComponent,
    ModalDetailComponent,
  ],
  imports: [
    PoDynamicModule,
    PoModalModule,
    FormsModule,
    PoFieldModule,
    PoAvatarModule,
    PoWidgetModule,
    CommonModule,
    TasksRoutingModule,
  ],
})
export class TasksModule {}
