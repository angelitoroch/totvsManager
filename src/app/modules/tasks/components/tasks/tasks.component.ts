import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];//Arreglo donde se guardaran los valores de todos las

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
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
}
