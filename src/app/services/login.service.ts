import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //Se definen las rutas de la api
  baseURL = environment.apiURL + '/users/'; //Busca el usuario y sus datos
  baseURL2 = environment.apiURL + '/users?correo='; //Busca por correo para el login

  //Se inicializa el servicio
  constructor(private http: HttpClient) {}

  //Metodo que recibe los datos ingresados en el formulario
  getUser(correo: string): Observable<Users> {
    const url = this.baseURL2 + correo;
    return this.http.get<Users>(url);
  }
}
