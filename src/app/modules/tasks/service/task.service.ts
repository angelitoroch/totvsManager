import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //Se definen las rutas de la api
  baseURL = environment.apiURL + '/tasks/';
  baseURL2 = environment.apiURL + '/tasks?categoria_id=';

  constructor(private http: HttpClient) {}

  //Metodo que trae una tarea en especifico
  getTask(taskId: number): Observable<Task> {
    const url = this.baseURL + taskId;
    return this.http.get<Task>(url);
  }

  //Metodo que trae todas las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseURL);
  }

  //Metodo que trae todas las tareas de una categoria definida
  getTasksId(categoryId: number): Observable<Task[]> {
    const url = this.baseURL2 + categoryId;
    return this.http.get<Task[]>(url);
  }

  //Metodo para crear una nueva tarea
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseURL, task);
  }

  deleteTask(id: number): Observable<any> {
    const url = this.baseURL + id;
    return this.http.delete(url);
  }

  modifyTask(task: Task): Observable<Task> {
    console.log(task);
    const url = this.baseURL + task.id;
    return this.http.put<Task>(url, task);
  }
}
