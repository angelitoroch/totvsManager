import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photho-user',
  templateUrl: './photho-user.component.html',
  styleUrls: ['./photho-user.component.css'],
})
export class PhothoUserComponent implements OnInit {
  avatar = 'http://lorempixel.com/300/300/cats/';

  constructor() {}

  ngOnInit(): void {}
}
