import { Component, OnInit, ViewChild } from '@angular/core';

//Componentes
import { PoModalComponent } from '@po-ui/ng-components';

//Servicio
import { TaskService } from 'src/app/modules/tasks/service/task.service';

//Interfaces
import { Task } from 'src/app/modules/tasks/interfaces/task';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css'],
})
export class PendientesComponent implements OnInit {
  tasks: Task[]; //Arreglo donde se guardaran los valores de todos las tareas
  taskPadre: Task; //Variable del tipo Task que servira para pasar objeto a un componente Hijo
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  //Metodo que abre el Modal y pasa el objeto task del componente padre al componente hijo
  openModalDetails(oTask: Task) {
    this.taskPadre = oTask;
    this.poModal.open();
  }

  //Metodo que traera todas las tareas usando el servicio con HTTP con filtro de usuario y proceso
  getTasks() {
    this.taskService.getTasksPending().subscribe(
      (tasksFromApi: Task[]) => {
        this.tasks = tasksFromApi;
      },
      (error) => console.error(error)
    );
  }
}
