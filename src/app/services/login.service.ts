import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Se definen las rutas de la api
  baseURL = environment.apiURL + '/users/';

  constructor(private http: HttpClient) { }

  //Metodo que recibe los datos ingresados en el formulario
  getUser(user:Users){
    
  }
}
