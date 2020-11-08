import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css'],
})
export class ModalDetailComponent implements OnInit {
  //taskHijo es la variable que recibe el objeto Task del componente padre
  @Input() taskHijo: Task;

  constructor() {}

  ngOnInit(): void {}
}
