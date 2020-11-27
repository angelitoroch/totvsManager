import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-photho-user',
  templateUrl: './photho-user.component.html',
  styleUrls: ['./photho-user.component.css'],
})
export class PhothoUserComponent implements OnInit {
  avatar = 'http://lorempixel.com/300/300/cats/'; //TODO falta colocar la imagen correcta del usuario
  nombre: String;

  constructor(private localStorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.getName();
  }

  //Metodo que obtiene el nombre del usuario desde la API
  getName() {
    this.nombre = JSON.parse(localStorage.getItem('userName'));
  }
}
