import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/users';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: Users;
  userLocalStorage: Users;

  //Se inicializan los servicios y se declara el formato del formulario
  constructor(
    private _builder: FormBuilder,
    private loginService: LoginService,
    private localStorageService: LocalstorageService
  ) {
    this.loginForm = this._builder.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      checkDefault: [''],
    });
  }

  ngOnInit(): void {}

  //Metodo que compara las credenciales
  onLogin(values) {
    //console.log(values.checkDefault);
    this.loginService.getUser(values.correo).subscribe(
      //Se comparan los datos de la API con los datos ingresados del usuario
      (userFromApi: Users) => {
        if (
          userFromApi[0].correo === values.correo &&
          userFromApi[0].contraseña === values.contraseña
        ) {
          console.log('Logueado');
          this.userLocalStorage = userFromApi[0];
          //Si se selecciono "Recordar contraseña en el loggin se guardara un valor en localstorage"
          if ((values.checkDefault = true)) {
            this.setLocalStorage();
          }
          window.location.reload();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //Metodo que asigna a la variable isLogged un true y corrobora que recordara el inicio de sesion
  setLocalStorage() {
    this.localStorageService.set('isLogged', true);
    this.localStorageService.set('userName', this.userLocalStorage.nombre_usuario);
  }
}
