import { Component, OnInit, ViewChild } from '@angular/core';
import { PoButtonGroupToggle, PoSelectOption } from '@po-ui/ng-components';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../service/task.service';
import { PoModalComponent } from '@po-ui/ng-components';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { Category } from 'src/app/modules/category/interfaces/category';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[]; //Arreglo donde se guardaran los valores de todos las taareas
  taskPadre: Task; //Variable del tipo Task que servira para pasar objeto a un componente Hijo
  typeCategory: number = 0;
  optionsCategory: string[];
  categorys: Category[];
  category: Category;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  typesCategorys: Array<PoSelectOption> = [
    { label: 'TODAS LAS CATEGORIAS', value: 0 },
  ];

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getCategorys();
    this.getTasks();
  }

  //Metodo que abre el Modal y pasa el objeto task del componente padre al componente hijo
  openModalDetails(oTask: Task) {
    this.taskPadre = oTask;
    this.poModal.open();
  }

  //TODO Falta definir una opcion por default y que obtenga las categorias de los productos
  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'Todas las categorias', value: PoButtonGroupToggle.Multiple },
  ];

  //Metodo que traera todas las tareas usando el servicio con HTTP
  getTasks() {
    this.taskService.getTasks().subscribe(
      (tasksFromApi: Task[]) => {
        this.tasks = tasksFromApi;
      },
      (error) => console.error(error)
    );
  }

  //Metodo que traera todas las categorias usando el servicio con HTTP
  getCategorys() {
    this.categoryService.getCategorys().subscribe(
      (categorysFromApi: Category[]) => {
        this.categorys = categorysFromApi;
        this.joinCategorys();
      },
      (error) => console.error(error)
    );
  }

  // TODO : FALTA ESTA PARTE 11/11/2020
  //Metodo que obtiene las categorias y las agrega al arreglo typeCategorys
  joinCategorys() {
    for (let category of this.categorys) {
      this.typesCategorys.push({
        label: category.nombre,
        value: category.id,
      });
    }
  }
}
