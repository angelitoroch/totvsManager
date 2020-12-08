import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  PoDynamicFormField,
  PoNotificationService,
} from '@po-ui/ng-components';
import { Task } from 'src/app/modules/tasks/interfaces/task';
import { TaskService } from 'src/app/modules/tasks/service/task.service';

@Component({
  selector: 'app-statustask',
  templateUrl: './statustask.component.html',
  styleUrls: ['./statustask.component.css'],
})
export class StatustaskComponent implements OnInit {
  //taskHijo es la variable que recibe el objeto Task del componente padre
  @Input() taskHijo: Task;
  task: Task;

  //Se definen los campos del formulario
  fields: Array<PoDynamicFormField> = [
    {
      property: 'status',
      label: 'ESTATUS DE LA TAREA',
      gridColumns: 12,
      options: [
        { label: 'Pendiente', value: 'Pendiente' },
        { label: 'En Proceso', value: 'Proceso' },
        { label: 'Completada', value: 'Completada' },
      ],
    },
  ];

  //Se mandan a llamar los servicios
  constructor(
    private taskService: TaskService,
    public poNotification: PoNotificationService
  ) {}

  //Se asigna lo del taskHijo a un task para su manipulación
  ngOnInit(): void {
    this.task = this.taskHijo;
  }

  //Metodo utilizado para modificar los valores y enviarlos al servidor por medio de una API
  modifyTask(form: NgForm) {
    console.log(form);
    this.taskService
      .modifyTask(this.task)
      .subscribe(() => console.log('Se modifico el status de la tarea'));
      window.location.reload();
  }
}
