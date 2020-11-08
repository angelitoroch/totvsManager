import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseURL = environment.apiURL + '/tasks/';

  constructor(private http: HttpClient) {}

  //Metodo que trae una tarea en especifico
  getTask(taskId: string): Observable<Task> {
    const url = this.baseURL + taskId;
    return this.http.get<Task>(url);
  }

  //Metodo que trae todas las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseURL);
  }
}
