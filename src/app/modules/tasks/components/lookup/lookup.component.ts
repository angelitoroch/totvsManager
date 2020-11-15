import { Component, OnInit } from '@angular/core';

//Clases PO UI
import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';
import {
  PoNotificationService,
  PoDynamicFormField,
} from '@po-ui/ng-components';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css'],
})
export class LookupComponent implements OnInit {
  tasks: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'name', label: 'Nombre' },
    { property: 'status', label: 'Estatus' },
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'Información de tareas',
      optional: true,
      gridColumns: 6,
      label: 'Nombre',
    },
    { property: 'Estatus', optional: true, gridColumns: 6 },
  ];

  constructor(public service: SearchService) {}

  fieldFormat(value) {
    return `${value.name} - ${value.status}`;
  }

  ngOnInit(): void {}
}
