import { Component, OnInit } from '@angular/core';

//Componentes PO UI
import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';
import { PoDynamicFormField } from '@po-ui/ng-components';

//Servicio
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css'],
})
export class LookupComponent implements OnInit {
  //TODO: Falta la funcionalidad de mostrar los datos correctamente en el buscador
  tasks: string;

  //Elementos de las columnas
  public readonly columns: Array<PoLookupColumn> = [
    { property: 'name', label: 'Nombre' },
    { property: 'status', label: 'Estatus' },
  ];

  //Filtros avanzados
  advancedFilters: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'Información de tareas',
      optional: true,
      gridColumns: 6,
      label: 'Nombre',
    },
    { property: 'status', label: 'Estatus', optional: true, gridColumns: 6 },
  ];

  //Se inializa el servicio
  constructor(public service: SearchService) {}

  fieldFormat(value) {
    return `${value.name} - ${value.status}`;
  }

  ngOnInit(): void {}
}
