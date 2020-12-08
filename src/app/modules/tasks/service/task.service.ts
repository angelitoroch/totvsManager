import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { environment } from 'src/environments/environment';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //Se definen las rutas de la api
  baseURL = environment.apiURL + '/tasks?autor=';
  baseDelete = environment.apiURL + '/tasks/';
  baseModify = environment.apiURL + '/tasks/';
  baseURL2 = environment.apiURL + '/tasks?categoria_id=';
  temp: string;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) {}

  //Metodo que trae una tarea en especifico
  getTask(taskId: number): Observable<Task> {
    const url = this.baseURL + taskId;
    return this.http.get<Task>(url);
  }

  //Metodo que trae todas las tareas de un usuario
  getTasks(): Observable<Task[]> {
    this.temp = this.localStorageService.get('userName');
    return this.http.get<Task[]>(this.baseURL + this.temp);
  }

  //Metodo qye trae todas las tareas con dos filtros 1- usuario y 2-Status(Pendiente)
  getTasksPending(): Observable<Task[]> {
    this.temp = this.localStorageService.get('userName');
    this.temp += '&status=Pendiente';
    return this.http.get<Task[]>(this.baseURL + this.temp);
  }

  //Metodo qye trae todas las tareas con dos filtros 1- usuario y 2-Status(Proceso)
  getTasksProcess(): Observable<Task[]> {
    this.temp = this.localStorageService.get('userName');
    this.temp += '&status=Proceso';
    return this.http.get<Task[]>(this.baseURL + this.temp);
  }

  //Metodo qye trae todas las tareas con dos filtros 1- usuario y 2-Status(Completa)
  getTasksCompleta(): Observable<Task[]> {
    this.temp = this.localStorageService.get('userName');
    this.temp += '&status=Completa';
    return this.http.get<Task[]>(this.baseURL + this.temp);
  }

  //Metodo qye trae todas las tareas con dos filtros 1- usuario y 2-Status(Completa)
  getTasksAtrasada(): Observable<Task[]> {
    this.temp = this.localStorageService.get('userName');
    this.temp += '&status=Atrasada';
    return this.http.get<Task[]>(this.baseURL + this.temp);
  }

  //Metodo que trae todas las tareas de una categoria definida
  getTasksId(categoryId: number): Observable<Task[]> {
    let url = this.baseURL2 + categoryId;
    url += '&autor=' + this.localStorageService.get('userName');
    return this.http.get<Task[]>(url);
  }

  //Metodo para crear una nueva tareaF
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseURL, task);
  }

  //Metodo que elimina una tarea
  deleteTask(id: number): Observable<any> {
    const url = this.baseDelete + id;
    return this.http.delete(url);
  }

  //Metodo que modifica una tarea
  modifyTask(task: Task): Observable<Task> {
    console.log(task.id);
    const url = this.baseModify + task.id;
    return this.http.put<Task>(url, task);
  }
}
