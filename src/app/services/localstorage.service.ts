import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  //Asigna una variable con su valor en localstorage
  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }

  //Obtiene el valor de un campo especifico en localstorage
  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(e);
    }
  }

  //Remueve el valor de localStorage
  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }

  //Limpia localStorage
  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }
}
