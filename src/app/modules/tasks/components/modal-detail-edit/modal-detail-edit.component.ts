import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  PoDynamicFormField,
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
  @Input() taskHijo: Task;
  task: Task;

  //Se definen los campos del formulario
  fields: Array<PoDynamicFormField> = [
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
      validate: this.esMenorFechaInicio.bind(this),
    },
    {
      property: 'enddate',
      label: 'FECHA ENTREGA/VENCIMIENTO',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      validate: this.esMenorFechaVencimiento.bind(this),
    },
    {
      property: 'categoria_id',
      label: 'Categoria',
      gridColumns: 12,
      options: [
        { label: 'Trabajo', value: 1 },
        { label: 'Hogar', value: 2 },
        { label: 'Universidad TOTVS', value: 3 },
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
      .subscribe(() => console.log('Task modificado correctamente'));
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
