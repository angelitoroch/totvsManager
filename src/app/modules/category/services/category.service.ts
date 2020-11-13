import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  //Se agrega la ruta de la api para la parte de las tareas
  baseURL = environment.apiURL + '/category/';

  constructor(private http: HttpClient) {}

  //Metodo que trae una catgoria en especifico
  getCategory(cagetoryId: string): Observable<Category> {
    const url = this.baseURL + cagetoryId;
    return this.http.get<Category>(url);
  }

  //Metodo que trae todas las categorias
  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseURL);
  }
}
