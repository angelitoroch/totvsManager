import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      shortLabel: 'resume',
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
      shortLabel: 'todolist',
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
    switch (menu.shortLabel) {
      case 'resume': {
        this.router.navigate(['resume']);
        break;
      }
      case 'tasks': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['tasks']);
        break;
      }
      case 'todolist': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['todolist']);
        break;
      }
      case 'calendar': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['calendar']);
        break;
      }
      case 'count': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['count']);
        break;
      }
    }
  }

  constructor(private router: Router) {}
}
