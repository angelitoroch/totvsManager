import { Component, OnInit, Input } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css'],
})
export class ModalDetailComponent implements OnInit {
  //taskHijo es la variable que recibe el objeto Task del componente padre
  // TODO: FALTA AGREGAR EL ESTATUS A LAS TAREAS
  @Input() taskHijo: Task;
  fields: Array<PoDynamicViewField> = [
    {
      property: 'name',
      label: 'NOMBRE',
      divider: 'DATOS PRINCIPALES',
      gridColumns: 4,
      order: 1,
    },
    { property: 'description', label: 'DESCRIPCIÓN', gridColumns: 4 },
    { property: 'startdate', label: 'FECHA INICIO', divider: 'FECHAS' },
    { property: 'enddate', label: 'FECHA ENTREGA', gridColumns: 4 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
