import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  PoDynamicViewField,
  PoNotificationService,
} from '@po-ui/ng-components';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-modal-detail-edit',
  templateUrl: './modal-detail-edit.component.html',
  styleUrls: ['./modal-detail-edit.component.css'],
})
export class ModalDetailEditComponent implements OnInit {
  //taskHijo es la variable que recibe el objeto Task del componente padre
  // TODO: FALTA AGREGAR EL ESTATUS A LAS TAREAS
  @Input() taskHijo: Task;
  task: Task;

  //Se definen los campos del formulario
  fields: Array<PoDynamicViewField> = [
    {
      property: 'name',
      label: 'NOMBRE',
      divider: 'DATOS PRINCIPALES',
      gridColumns: 12,
      order: 1,
    },
    { property: 'description', label: 'DESCRIPCIÓN', gridColumns: 12 },
    {
      property: 'startdate',
      label: 'FECHA INICIO',
      type: 'date',
      format: 'mm/dd/yyyy',
      divider: 'FECHAS',
      gridColumns: 6,
    },
    {
      property: 'enddate',
      label: 'FECHA ENTREGA/VENCIMIENTO',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
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
      .subscribe(() => console.log('Task modificado correctamente'));
  }
}
