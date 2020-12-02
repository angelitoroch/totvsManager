import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  PoDynamicFormField,
  PoNotificationService,
} from '@po-ui/ng-components';
import { Category } from 'src/app/modules/category/interfaces/category';
import { LocalstorageService } from 'src/app/services/localstorage.service';
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
    autor: '',
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
        { label: 'Universidad TOTVS', value: 3 },
      ],
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
      format: 'mm-dd-yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2030-12-31',
      order: -1,
      validate: this.esMenorFechaInicio.bind(this),
    },
    {
      property: 'enddate',
      label: 'Fecha Entrega/Vencimiento',
      required: true,
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2030-12-31',
      order: -1,
      validate: this.esMenorFechaVencimiento.bind(this),
    },
  ];

  //Se llaman los servicios que se utilizan para la creacion de una task
  constructor(
    public poNotification: PoNotificationService,
    private taskService: TaskService,
    private localStorageService: LocalstorageService
  ) {}

  ngOnInit() {}

  //Metodo para guardar los datos ingresados en el formulario en la API
  Submit(form: NgForm) {
    this.modelTask.id = 0;
    this.modelTask.name = form.value.name;
    this.modelTask.description = form.value.description;
    this.modelTask.startdate = form.value.startdate;
    this.modelTask.enddate = form.value.enddate;
    this.modelTask.status = 'Pendiente';
    this.modelTask.categoria_id = form.value.categoria_id;
    this.modelTask.autor = JSON.parse(localStorage.getItem('userName'));
    this.taskService
      .createTask(this.modelTask)
      .subscribe((response: Task) =>
        console.log('Exito al ingresar la Task id: ' + response.id)
      );
  }

  //Metodo que verifica la fecha actual y no permite introducir una fecha antes de
  esMenorFechaInicio(date: any) {
    let bandera: boolean;
    bandera = this.esMenor(date);
    console.log(bandera);
    if (bandera != false) {
      alert('La fecha de inicio no puede ser menor al dia actual');
      return {
        value: { startdate: undefined },
        fields: [{ property: 'startdate' }],
        focus: 'startdate',
      };
    }
  }

  //Metodo que verifica la fecha actual y no permite introducir una fecha antes de
  esMenorFechaVencimiento(date: any) {
    let bandera: boolean;
    bandera = this.esMenor(date);
    console.log(bandera);
    if (bandera != false) {
      alert('La fecha de Entrega/Vencimiento no puede ser menor al dia actual');
      return {
        value: { enddate: undefined },
        fields: [{ property: 'enddate' }],
        focus: 'enddate',
      };
    }
  }

  //Metodo que verifica si la fecha como parametro es mas antigua a la del sistema
  esMenor(date: any) {
    //Fecha usuario
    let fechaUser = new Date(date.value);
    let fechaSystem = '';
    let fechaSystemConv: Date;

    //Se saca el dia, mes y año
    let diaSystem = new Date().getDate();
    let mesSystem = new Date().getMonth() + 1;
    let añoSystem = new Date().getFullYear();

    if (diaSystem >= 1 && diaSystem <= 9) {
      fechaSystem = '' + añoSystem + '-' + mesSystem + '-0' + diaSystem;
    } else {
      fechaSystem = '' + añoSystem + '-' + mesSystem + '-0' + diaSystem;
    }

    fechaSystemConv = new Date(fechaSystem);

    if (fechaUser < fechaSystemConv) {
      return true;
    } else {
      return false;
    }
  }
}
