import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.loginForm = this._builder.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLogin(values) {
    console.log(values);
  }
}
