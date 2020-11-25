import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Componentes y elementos de PO UI
import { PoMenuItem } from '@po-ui/ng-components';
import { PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menuItemSelected: string; //Item seleccionado del menu
  profile: PoToolbarProfile; //Avatar de usuario posterior derecha
  isLogged: boolean;

  //Array donde se asignan las caracteristicas de los items del menu como icono, accion y su shortlabel
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
          label: 'Modificar o Eliminar Tarea',
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

  //Opciones en el menu lateral izquierdo, 1er nivel
  printMenuAction(menu: PoMenuItem) {
    switch (menu.shortLabel) {
      case 'resume': {
        this.menuItemSelected = menu.label;
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

  //Opciones en el menu lateral izquierdo, 2do nivel
  printMenuSubItem(menu: PoMenuItem) {
    switch (menu.label) {
      case 'Crear Tarea': {
        this.menuItemSelected = menu.label;
        this.router.navigate(['tasks/makeTask']);
        break;
      }
      case 'Modificar o Eliminar Tarea': {
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

  //Constructor de la clase y se inicializa el router para redirigir entre paginas
  constructor(private router: Router) {}

  ngOnInit() {
    //TODO Falta poner acciones en el menu del user icon;
    this.profile = { avatar: '', subtitle: '', title: '' };
    this.isLogged = true;
  }
}
