import { Component, OnInit, ViewChild } from '@angular/core';
import { PoButtonGroupToggle, PoSelectOption } from '@po-ui/ng-components';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../service/task.service';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[]; //Arreglo donde se guardaran los valores de todos las taareas
  taskPadre: Task; //Variable del tipo Task que servira para pasar objeto a un componente Hijo
  toggle: PoButtonGroupToggle;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  //Metodo que abre el Modal y pasa el objeto task del componente padre al componente hijo
  openModalDetails(oTask: Task) {
    this.taskPadre = oTask;
    this.poModal.open();
  }

  //TODO Falta definir una opcion por default y que obtenga las categorias de los productos
  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'Todas las categorias', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple },
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
}
