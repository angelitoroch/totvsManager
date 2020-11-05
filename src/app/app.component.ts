import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon po-icon-home',
      shortLabel: 'Resume',
    },
    {
      label: 'Gestión de tareas',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon po-icon-clipboard',
      shortLabel: 'tasks',
    },
    {
      label: 'TO DO LIST',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon po-icon-list',
      shortLabel: 'todDoList',
    },
    {
      label: 'CALENDARIO',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon po-icon-calendar',
      shortLabel: 'calendar',
    },
    {
      label: 'Cuenta',
      icon: 'po-icon po-icon-user',
      shortLabel: 'count',
      subItems: [
        {
          label: 'Cerrar Sesión',
        },
      ],
    },
  ];

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
