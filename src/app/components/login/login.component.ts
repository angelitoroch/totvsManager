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
  fail: boolean;
  router: any;

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

  ngOnInit(): void {
    this.fail = false;
  }

  //Metodo que compara las credenciales
  onLogin(values) {
    //console.log(values.checkDefault);
    this.loginService.getUser(values.correo).subscribe(
      (userFromApi: Users) => {
        if (
          userFromApi[0].correo === values.correo &&
          userFromApi[0].contraseña === values.contraseña
        ) {
          console.log('Logueado');
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

  setLocalStorage() {
    this.localStorageService.set('isLogged', true);
  }
}
