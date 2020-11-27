import { Component, OnInit, ViewChild } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../service/task.service';
import { PoModalComponent } from '@po-ui/ng-components';
import { Category } from 'src/app/modules/category/interfaces/category';

//Servicio
import { CategoryService } from 'src/app/modules/category/services/category.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[]; //Arreglo donde se guardaran los valores de todos las taareas
  taskPadre: Task; //Variable del tipo Task que servira para pasar objeto a un componente Hijo
  typeCategory: number = 0; //Tategoria por default
  categorys: Category[]; //Variable donde se guardaran las categorias
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  //Array con las opciones definidas para las categorias
  typesCategorys: Array<PoSelectOption> = [
    { label: 'TODAS LAS CATEGORIAS', value: 0 },
  ];
  router: any;

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

  //Metodo que obtiene las categorias y las agrega al arreglo typeCategorys
  joinCategorys() {
    for (let category of this.categorys) {
      this.typesCategorys.push({
        label: category.nombre,
        value: category.id,
      });
    }
  }

  //Metodo que se dispara cuando se cambia la opcion en las opciones de selecciona tu categotria
  changeCategoryId(id: number) {
    if (id != 0) {
      this.taskService.getTasksId(id).subscribe(
        (tasksFromApi: Task[]) => {
          console.log(tasksFromApi);
          this.tasks = tasksFromApi;
        },
        (error) => console.error(error)
      );
    } else {
      this.getTasks();
    }
  }
}
