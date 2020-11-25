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
import { LookupComponent } from './components/lookup/lookup.component';
import { PoButtonModule } from '@po-ui/ng-components';
import { ModalDetailEditComponent } from './components/modal-detail-edit/modal-detail-edit.component';

@NgModule({
  declarations: [
    TasksComponent,
    MakeTasksComponent,
    ModifyTaskComponent,
    ModalDetailComponent,
    LookupComponent,
    ModalDetailEditComponent,
  ],
  imports: [
    PoButtonModule,
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
