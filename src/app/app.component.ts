import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Componentes y elementos de PO UI
import { PoMenuItem } from '@po-ui/ng-components';
import {
  PoRadioGroupOption,
  PoSelectOption,
  PoToolbarAction,
  PoToolbarProfile,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menuItemSelected: string;
  profile: PoToolbarProfile;
  profileActions: Array<PoToolbarAction>;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'po-icon-star', label: 'po-icon-star' },
  ];

  public readonly toolbarActionTypes: Array<PoRadioGroupOption> = [
    { label: 'Profile', value: 'profile' },
  ];

  menus: Array<PoMenuItem> = [
    {
      label: 'HOME',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon po-icon-home',
      shortLabel: 'resume',
    },
    {
      label: 'GESTION DE TAREAS',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon po-icon-clipboard',
      shortLabel: 'tasks',
      subItems: [
        {
          label: 'Crear Tarea',
          action: this.printMenuSubItem.bind(this),
        },
        {
          label: 'Modificar Tarea',
          action: this.printMenuSubItem.bind(this),
        },
      ],
    },
    {
      label: 'GESTION DE CATEGORIAS',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon po-icon-pushcart',
      shortLabel: 'category',
      subItems: [
        {
          label: 'Crear Categoria',
          action: this.printMenuSubItem.bind(this),
        },
        {
          label: 'Modificar Categoria',
          action: this.printMenuSubItem.bind(this),
        },
      ],
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
      case 'category': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['category']);
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

  printMenuSubItem(menu: PoMenuItem) {
    switch (menu.label) {
      case 'Crear Tarea': {
        this.menuItemSelected = menu.label;
        console.log('entro');
        this.router.navigate(['tasks/makeTask']);
        break;
      }
      case 'Modificar Tarea': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['tasks/modifyTask']);
        break;
      }
      case 'Crear Categoria': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['category/makeCategory']);
        break;
      }
      case 'Modificar Categoria': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['category/modifyCategory']);
        break;
      }
    }
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.profile = { avatar: '', subtitle: '', title: '' };
    this.profileActions = [];
  }
}
