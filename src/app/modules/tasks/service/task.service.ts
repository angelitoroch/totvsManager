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
  baseURL2 = environment.apiURL + '/categpry?nombre=';

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
}
