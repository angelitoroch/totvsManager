import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  PoDynamicFormField,
  PoNotificationService,
} from '@po-ui/ng-components';
import { Category } from 'src/app/modules/category/interfaces/category';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-make-tasks',
  templateUrl: './make-tasks.component.html',
  styleUrls: ['./make-tasks.component.css'],
})
export class MakeTasksComponent implements OnInit {
  task = {}; //Databidding
  categorys: Category[];
  //Modelo de Task donde se colocara la data que el usuario ingrese al hacer el submit
  modelTask: Task = {
    id: 0,
    name: '',
    description: '',
    startdate: '',
    enddate: '',
    status: '',
    categoria_id: 0,
  };
  validateFields: Array<string> = ['state'];

  //Se declaran los campos del formulario junto a sus caracteristicas
  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      label: 'Nombre',
      divider: 'DATOS DE LA TAREA',
      required: true,
      minLength: 5,
      maxLength: 100,
      gridColumns: 8,
      gridSmColumns: 12,
      order: 1,
    },
    {
      property: 'categoria_id',
      label: 'Categoria',
      gridColumns: 4,
      options: [
        { label: 'Trabajo', value: 1 },
        { label: 'Hogar', value: 2 },
      ], // TODO: Falta mandar las opciones por medio de un servicio
    },
    {
      property: 'description',
      label: 'Descripción de la tarea',
      required: true,
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
    },
    {
      property: 'startdate',
      label: 'Fecha Inicio',
      required: true,
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2030-12-31',
      order: -1,
    },
    {
      property: 'enddate',
      label: 'Fecha Entrega',
      required: true,
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2030-12-31',
      order: -1,
    },
  ];

  //Se llaman los servicios que se utilizan para la creacion de una task
  constructor(
    public poNotification: PoNotificationService,
    private categoryService: CategoryService,
    private taskService: TaskService
  ) {}

  ngOnInit() {}

  //Metodo para guardar los datos ingresados en el formulario en la API
  Submit(form: NgForm) {
    this.modelTask.id = 0;
    this.modelTask.name = form.value.name;
    this.modelTask.description = form.value.description;
    this.modelTask.startdate = form.value.startdate;
    this.modelTask.enddate = form.value.enddate;
    this.modelTask.status = 'Sin iniciar';
    this.modelTask.categoria_id = form.value.categoria_id;
    this.taskService
      .createTask(this.modelTask)
      .subscribe((response: Task) =>
        console.log('Exito al ingresar el usuario id: ' + response.id)
      );
  }
}
