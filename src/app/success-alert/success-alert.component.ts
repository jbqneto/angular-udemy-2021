import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div class="alert alert-success">Success alert!</div>`,
  styles: [`
    .alert {
      font-weight: bold;
      border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
